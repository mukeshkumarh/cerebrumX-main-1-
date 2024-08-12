import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexXAxis,
  ApexGrid,
  ApexLegend,
  ApexStroke,
} from 'ng-apexcharts';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import * as ExcelJS from 'exceljs';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
};

@Component({
  selector: 'app-fleet-dashboard',
  templateUrl: './fleet-dashboard.component.html',
  styleUrls: ['./fleet-dashboard.component.css'],
})
export class FleetDashboardComponent implements OnInit {
  selectedOption: string = '';
  @ViewChild('chartContainer')
  chartContainer!: ElementRef;
  @ViewChild('chart') chart!: ChartComponent;
  public ChartOptions!: Partial<ChartOptions> | any;

  chartData = {
    vehicleEnrolledData: {
      chartType: 'app-bar-category-chart',
      data: [100, 500, 100, 300],
      labels: ['Pending', 'Active', 'Failed', 'Deactivated'],
      colors: ['#739FFF', '#2CA67E', '#FF7D7D', '#FAD691'],
    },
    tireBreakUpData: {
      data: [100, 100, 150, 50],
      height: 250,
      colors: ['#739FFF', '#2CA67E', '#FAD691', '#FF7D7D'],
      categories: ['Pending', 'Active', 'Deactivated', 'Failed'],
      label: 400,
      formatter: 'Vehicle Enrolled',
      legend: true,
      shadow: true,
    },
  };

  info_icon_base_64 =
    'PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2IDE0LjY2NjdWMjEuMzMzM00xNiAyOEM5LjM3MjU4IDI4IDQgMjIuNjI3NCA0IDE2QzQgOS4zNzI1OCA5LjM3MjU4IDQgMTYgNEMyMi42Mjc0IDQgMjggOS4zNzI1OCAyOCAxNkMyOCAyMi42Mjc0IDIyLjYyNzQgMjggMTYgMjhaTTE2LjA2NjQgMTAuNjY2N1YxMC44TDE1LjkzMzYgMTAuODAwM1YxMC42NjY3SDE2LjA2NjRaIiBzdHJva2U9IiNGQTc1MUEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=';
  
  
    async exportToExcel() {
    try {
      const html2canvas = (await import('html2canvas')).default;
      const canvas = await html2canvas(this.chartContainer.nativeElement);
      const imageData = canvas.toDataURL('image/png');

      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Sheet1', {
        views: [{ showGridLines: false }],
      });

      const widthInPixels = 220 / 7.5;
      for (let col = 1; col <= 4; col++) {
        worksheet.getColumn(col).width = widthInPixels;
      }

      for (let col = 1; col <= 26; col++) {
        const cell = worksheet.getCell(1, col);
        cell.font = {
          name: 'Tahoma',
          size: 12,
          color: { argb: 'FFFFFFFF' },
        };
        cell.alignment = { vertical: 'middle', horizontal: 'center' };
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'FF25477B' },
        };
      }

      for (let col = 27; col <= 16384; col++) {
        worksheet.getColumn(col).hidden = true;
      }

      const titleCell = worksheet.getCell('A1');
      titleCell.value = 'Fleet Summary Data';
      titleCell.alignment.horizontal = 'left';

      const azugaCell = worksheet.getCell('A2');
      azugaCell.value = 'Azuga';
      azugaCell.font = {
        name: 'Tahoma',
        size: 12,
        color: { argb: 'FFFA751A' },
      };
      azugaCell.alignment = { vertical: 'middle' };

      const FleetIdCell = worksheet.getCell('A3');
      FleetIdCell.value = 'Fleet id - 110021';
      FleetIdCell.font = {
        name: 'Tahoma',
        size: 10,
        color: { argb: 'FF25477B' },
      };
      FleetIdCell.alignment = { vertical: 'middle' };

      const dateCell = worksheet.getCell('D1');
      dateCell.value = this.formatDate(new Date());

      const totalVehicles = worksheet.getCell('D5');
      totalVehicles.value = 'Total Enrolled Vehicles';
      totalVehicles.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFFFFFFF' },
      };
      totalVehicles.font = {
        name: 'Tahoma',
        size: 12,
        color: { argb: 'FF000000' },
        bold: true,
      };
      totalVehicles.alignment = { vertical: 'middle', horizontal: 'center' };
      totalVehicles.border = {
        top: { style: 'medium', color: { argb: 'FF000000' } },
        left: { style: 'medium', color: { argb: 'FF000000' } },
        bottom: { style: 'medium', color: { argb: 'FF000000' } },
        right: { style: 'medium', color: { argb: 'FF000000' } },
      };

      const enrolledVehicles = worksheet.getCell('D6');
      enrolledVehicles.value = 1000;
      enrolledVehicles.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFFFFFFF' },
      };
      enrolledVehicles.font = {
        name: 'Tahoma',
        size: 12,
        color: { argb: 'FFFA751A' },
        bold: true,
      };
      enrolledVehicles.alignment = { vertical: 'middle', horizontal: 'center' };
      enrolledVehicles.border = {
        top: { style: 'medium', color: { argb: 'FF000000' } },
        left: { style: 'medium', color: { argb: 'FF000000' } },
        bottom: { style: 'medium', color: { argb: 'FF000000' } },
        right: { style: 'medium', color: { argb: 'FF000000' } },
      };

      const timePeriod = worksheet.getCell('F5');
      timePeriod.value = 'Time Period';
      timePeriod.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFFFFFFF' },
      };
      timePeriod.font = {
        name: 'Tahoma',
        size: 12,
        color: { argb: 'FF000000' },
        bold: true,
      };
      timePeriod.alignment = { vertical: 'middle', horizontal: 'center' };
      timePeriod.border = {
        top: { style: 'medium', color: { argb: 'FF000000' } },
        left: { style: 'medium', color: { argb: 'FF000000' } },
        bottom: { style: 'medium', color: { argb: 'FF000000' } },
        right: { style: 'medium', color: { argb: 'FF000000' } },
      };

      const timePeriodValue = worksheet.getCell('F6');
      timePeriodValue.value = '06-21-2024 till 06-27-2024';
      timePeriodValue.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFFFFFFF' },
      };
      timePeriodValue.font = {
        name: 'Tahoma',
        size: 12,
        color: { argb: 'FFFA751A' },
        bold: true,
      };
      timePeriodValue.alignment = { vertical: 'middle', horizontal: 'center' };
      timePeriodValue.border = {
        top: { style: 'medium', color: { argb: 'FF000000' } },
        left: { style: 'medium', color: { argb: 'FF000000' } },
        bottom: { style: 'medium', color: { argb: 'FF000000' } },
        right: { style: 'medium', color: { argb: 'FF000000' } },
      };

      const headers = [
        'OEM-wise',
        'Ford',
        'GM',
        'Stellantis',
        'Tesla',
        'Toyota',
      ];
      for (let i = 0; i < headers.length; i++) {
        const cell = worksheet.getCell(8, 4 + i);
        cell.value = headers[i];
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'FFFFFFFF' },
        };
        cell.font = {
          name: 'Tahoma',
          size: 12,
          color: { argb: 'FF000000' },
          bold: true,
        };
        cell.border = {
          top: { style: 'medium', color: { argb: 'FF000000' } },
          left: { style: 'medium', color: { argb: 'FF000000' } },
          bottom: { style: 'medium', color: { argb: 'FF000000' } },
          right: { style: 'medium', color: { argb: 'FF000000' } },
        };
        cell.alignment = { vertical: 'middle', horizontal: 'center' };
      }

      const vehicleEnrolledData = this.chartData.vehicleEnrolledData;
      for (let i = 0; i < vehicleEnrolledData.labels.length; i++) {
        const label = vehicleEnrolledData.labels[i];
        const color = vehicleEnrolledData.colors[i];
        const value = vehicleEnrolledData.data[i];

        for (let j = 0; j < headers.length; j++) {
          const cell = worksheet.getCell(9 + i, 4 + j);
          cell.value = j === 0 ? label : value;
          cell.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: color.replace('#', 'FF') },
          };
          cell.font = {
            name: 'Tahoma',
            size: 12,
            color: { argb: 'FF000000' },
          };
          cell.border = {
            top: { style: 'thin', color: { argb: 'FF000000' } },
            left: { style: 'medium', color: { argb: 'FF000000' } },
            bottom: { style: 'thin', color: { argb: 'FF000000' } },
            right: { style: 'medium', color: { argb: 'FF000000' } },
          };
          cell.alignment = { vertical: 'middle', horizontal: 'center' };
        }
      }

      for (let row = 9; row <= 12; row++) {
        const cell = worksheet.getCell(row, 4);
        cell.font = {
          name: 'Tahoma',
          size: 12,
          color: { argb: 'FF000000' },
          bold: true, // Make text bold
        };
      }

      worksheet.getColumn(3).width = 100 / 7.5;
      for (let col = 5; col <= 11; col++) {
        worksheet.getColumn(col).width = 100 / 7.5; 
      }

      worksheet.mergeCells('F5:H5');
      worksheet.mergeCells('F6:H6');

      const imageId = workbook.addImage({
        base64: imageData,
        extension: 'png',
      });

      const height = canvas.height * 0.7;
      const width = (height / canvas.height) * canvas.width;

      worksheet.addImage(imageId, {
        tl: { col: 0, row: 4 },
        ext: { width, height },
      });

      worksheet.mergeCells('K8:L11');

      const mergedCellRange = worksheet.getCell('K8');
      mergedCellRange.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFFEEADD' },
      };

      const imageId1 = workbook.addImage({
        base64: this.info_icon_base_64, 
        extension: 'png',
      });

      worksheet.addImage(imageId1, {
        tl: { col: 10, row: 7 }, 
        ext: { width: 30, height: 30 }, 
      });

      // Add text to the merged cells
      const mergedTextCell = worksheet.getCell('K8');
      mergedTextCell.value =
        '       See the Description tab for more information.';
      mergedTextCell.font = {
        name: 'Tahoma',
        size: 12,
        color: { argb: 'FF000000' }, 
      };
      mergedTextCell.alignment = {
        vertical: 'middle',
        horizontal: 'left', 
        wrapText: true,
      };

      

      for (let col = 1; col <= 13; col++) {
        const cell = worksheet.getCell(15, col);
        cell.font = {
          name: 'Tahoma',
          size: 12,
          color: { argb: 'FFFFFFFF' },
        };
        cell.alignment = { vertical: 'middle', horizontal: 'center' };
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'FF25477B' },
        };
      }

      const headers15 = [
        'VIN',
        'Fleet id',
        'Enroll Date',
        'Pending',
        'Active',
        'Failed',
        'Unenrolled',
      ];
      for (let i = 0; i < headers15.length; i++) {
        const cell = worksheet.getCell(15, 1 + i); 
        cell.value = headers15[i];
      }

     
      for (let row = 16; row <= worksheet.rowCount; row++) {
        for (let col = 1; col <= 7; col++) {
          const cell = worksheet.getCell(row, col); 
          cell.font = {
            name: 'Tahoma',
            size: 10,
            color: { argb: 'FF000000' }, 
          };
          cell.alignment = { vertical: 'middle', horizontal: 'center' };
        }
      }

      const buffer = await workbook.xlsx.writeBuffer();
      const blob = new Blob([buffer], { type: 'application/octet-stream' });
      FileSaver.saveAs(blob, 'chart.xlsx');
    } catch (error) {
      console.error('Error generating image:', error);
    }
  }

  private formatDate(date: Date): string {
    const options = {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    } as const;
    return date.toLocaleDateString('en-US', options);
  }

  ngOnInit(): void {
    this.ChartOptions = {
      series: this.chartData.tireBreakUpData.data,
      chart: {
        height: this.chartData.tireBreakUpData.height,
        type: 'donut',
      },
      stroke: {
        width: 0,
      },
      labels: this.chartData.tireBreakUpData.categories,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: '100%',
            },
            legend: {
              show: this.chartData.tireBreakUpData.legend || false,
              position: 'bottom',
            },
          },
        },
      ],
      colors: this.chartData.tireBreakUpData.colors,
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: '12px',
                fontWeight: 800,
                fontFamily: 'Poppins',
                offsetY: 14,
                color: '#000',
              },
              value: {
                show: true,
                fontSize: '18px',
                fontWeight: 500,
                fontFamily: 'Poppins',
                offsetY: -15,
                color: '#000',
              },
              total: {
                show: true,
                label: this.chartData.tireBreakUpData.formatter,

                color: '#000',
                formatter: () => this.chartData.tireBreakUpData.label,
              },
            },
            stroke: {
              width: 0,
            },
            size: '75%',
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
        position: 'bottom',
        horizontalAlign: 'center',
        fontSize: '12px',
        fontFamily: 'Poppins',
        markers: {
          size: 4,
          offsetX: 20,
        },
        itemMargin: {
          horizontal: 10,
          vertical: 13,
        },
        formatter: function (val: any, opt: any) {
          return (
            '<span style="font-size:12px">' +
            val +
            '</span>' +
            '</br>' +
            '<b style="font-size:14px; ">' +
            opt.w.config.series[opt.seriesIndex] +
            '' +
            '</b>'
          );
        },
      },
    };
  }

  calculateWidth(value: number): number {
    const total = this.chartData.vehicleEnrolledData.data.reduce(
      (acc: number, curr: number) => acc + curr,
      0
    );
    return total ? (value / total) * 100 : 0;
  }


  isCardOpen = false;
 

  openCard() {
    this.isCardOpen = true;
  }

  closeCard() {
    this.isCardOpen = false;
  }

  handleOption(option: string) {
    this.selectedOption = option;
    if (option !== 'custom-range') {
      this.closeCard();
    }
  }
}
