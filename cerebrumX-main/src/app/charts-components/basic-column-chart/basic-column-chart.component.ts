import { Component, Input, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
  ApexStroke,
  ApexLegend,
  ChartComponent,
  ApexGrid,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  colors: string[];
  legend: ApexLegend;
  grid: ApexGrid;
};

@Component({
  selector: 'app-basic-column-chart',
  templateUrl: './basic-column-chart.component.html',
  styleUrls: ['./basic-column-chart.component.css'],
})
export class BasicColumnChartComponent {
  @Input() chartData: any;
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;
  legendDataLabel!: string[];

  ngOnInit(): void {
    this.chartOptions = {
      series: this.chartData.series,
      grid: {
        borderColor: '#F0F0F0',
        xaxis: {
          lines: {
            show: true, // Enable vertical grid lines
          },
        },
        yaxis: {
          lines: {
            show: false, // Enable vertical grid lines
          },
        },
      },
      colors: this.chartData.colors,
      dataLabels: {
        enabled: false,
        enabledOnSeries: [3],
        textAnchor: 'start',
        style: {
          colors: ['#fff'],
        },
        formatter: function (val: any, opt: any) {
          return val + '%';
        },
        offsetX: 0,
        offsetY: 2,
        dropShadow: {
          enabled: true,
        },
      },
      chart: {
        toolbar: {
          show: false,
        },
        type: 'bar',
        height: this.chartData?.height || 400,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: this.chartData.columnWidth || '60%',
          endingShape: 'rounded',
        },
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: ['transparent'],
      },
      legend: {
        show: false,
        formatter: function (seriesName: any, opts: any) {
          if (opts.seriesIndex === 0) {
            return (
              seriesName +
              '<span style="font-size:20px; margin-left:-3px; visibility:hidden;">' +
              1 +
              '</span>'
            );
          } else {
            return `<span style="">${seriesName}</span>`;
          }
        },
        itemMargin: {
          horizontal: 0,
          vertical: 45,
        },
        horizontalAlign: 'left',
        markers: {
          radius: 12,
          width: 8,
          height: 8,
        },
      },
      xaxis: {
        title: {
          text: this.chartData.xaxistitle || '',
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        categories: this.chartData.categories,
        labels: {
          style: {
            colors: Array(this.chartData.categories.length).fill('#AEADAD'), // Color for the x-axis labels
          },
        },
      },
      yaxis: [
        {
          title: {
            text: this.chartData.yaxistitle || '',
            style: {
              color: '#AEADAD',
            },
          },
          labels: {
            style: {
              color: '#AEADAD',
            },
            formatter: function (val: number) {
              return val === 0 ? '0' : (val / 1000).toFixed(0) + 'k';
            },
          },
        },
        {
          opposite: true,
          title: {
            text: this.chartData.yaxistitle2 || '',
            style: {
              color: '#AEADAD',
            },
          },
          labels: {
            style: {
              color: '#AEADAD',
            },
            formatter: function (val: number) {
              return val === 0 ? '0' : (val / 1000).toFixed(1);
            },
          },
        },
      ],
      fill: {
        opacity: 1,
      },
      tooltipBackgroundColor: this.chartData.tooltipbg,
      tooltip: {
        custom: function ({
          series,
          seriesIndex,
          dataPointIndex,
          w,
        }: {
          series: number[][];
          seriesIndex: number;
          dataPointIndex: number;
          w: any;
        }) {
          console.log(w.config.colors[1]);
          const value = series[seriesIndex][dataPointIndex];
          const formattedValue =
            seriesIndex === 0
              ? value === 0
                ? '0'
                : (value / 1000).toFixed(0) + 'k'
              : value === 0
              ? '0'
              : (value / 1000).toFixed(1);
              const backgroundColor = seriesIndex === 0 ? w.config.colors[0] : w.config.colors[1];
          return `
            <div style="background-color:${backgroundColor}; color: black; padding: 10px; border-radius: 5px; border:none">
              ${formattedValue}
            </div>`;
        },
        marker: {
          show: false, // Hide the marker in the tooltip
        },
        style: {
          backgroundColor: 'purple', // Set the tooltip background color to purple
        },
        x: {
          show: false, // Hide the x-axis value in the tooltip
        },
        // y: {
        //   formatter: function (val: any, { seriesIndex }: any) {
        //     if (seriesIndex === 0) {
        //       // For the first series, format as 1k, 2k, etc.
        //       return val === 0 ? '0' : (val / 1000).toFixed(0) + 'k';
        //     } else {
        //       // For the second series, format as 1.0, 2.0, etc.
        //       return val === 0 ? '0' : (val / 1000).toFixed(1);
        //     }
        //   },
        // },
      },
    };

    this.legendDataLabel = [];
    for (let i = 0; i < 5; i++) {
      let arr = [
        this.chartData.series[0]['data'][i],
        this.chartData.series[1]['data'][i],
        this.chartData.series[2]['data'][i],
        this.chartData.series[3]['data'][i],
      ];
      const maxNumber = Math.max(...arr);
      this.legendDataLabel.push(maxNumber + '.0' + '%');
    }
  }
}
