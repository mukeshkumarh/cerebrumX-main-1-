import { Component, Input, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexGrid,
  ApexStroke,
  ApexTitleSubtitle,
  ChartComponent,
  ApexYAxis,
  ApexFill,
  ApexTooltip,
  ApexMarkers,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  yaxis: ApexYAxis;
  fill: ApexFill;
  colors: string[];
  markers: ApexMarkers;
};

@Component({
  selector: 'app-basic-line-chart',
  templateUrl: './basic-line-chart.component.html',
  styleUrls: ['./basic-line-chart.component.css'],
})
export class BasicLineChartComponent {
  @Input() chartData: any;
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;

  ngOnInit(): void {
    this.chartOptions = {
      colors: this.chartData.colors,
      markers: {
        size: this.chartData.markers,
        colors: this.chartData.colors,
        strokeColors: this.chartData.colors,
      },
      series: [
        {
          name: 'Trips',
          data: this.chartData.data,
        },
      ],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.2,
          opacityTo: 0.4,
          stops: [0, 90, 100],
        },
      },

      chart: {
        toolbar: {
          show: false,
        },
        height: this.chartData?.height || 350,
        type: 'area',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: '1',
        curve: this.chartData?.curve || 'smooth',
      },

      grid: {
        show: this.chartData?.grid || false,
        borderColor:'#ebebeb',
        strokeDashArray:2, 
        xaxis: {
          lines: {
            show: false, //or just here to disable only x axis grids
          },
        },
        yaxis: {
          lines: {
            show: this.chartData?.grid || false, //or just here to disable only y axis
          },
        },
      },
      xaxis: {
        title: {
          text: this.chartData?.xaxisTitle || '',
        },
        tooltip: {
          enabled: false,
        },
        categories: this.chartData.categories,
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels:{
          style:{
            fontSize:'10px',
            fontWeight:700
          }
        }
        
      },
      yaxis: {
        title: {
          text: this.chartData?.yaxisTitle || '',
        },
        labels:{
          style:{
            fontSize:'10px',
            fontWeight:900
          }
        },
        min: this.chartData.min,
        max: this.chartData.max,
        tickAmount: this.chartData.tickAmount,
      },

      tooltip: {
        enabled: true,
        custom: function (
          data: any,
          seriesIndex: any,
          dataPointIndex: any,
          w: any
        ) {
          let month = '';
          if (data.dataPointIndex == 0) {
            month = 'August';
          } else if (data.dataPointIndex == 1) {
            month = 'September';
          } else if (data.dataPointIndex == 2) {
            month = 'October';
          } else if (data.dataPointIndex == 3) {
            month = 'November';
          } else if (data.dataPointIndex == 4) {
            month = 'December';
          } else if (data.dataPointIndex == 5) {
            month = 'January';
          }

          return (
            '<div style="text-align: center; padding: 5%; background:#102C53;width:6rem;">' +
            '<span style="color:white; font-size:14px">' +
            data.series[0][data.dataPointIndex] +
            '</span>' +
            '</br>' +
            '<span style="font-size:10px; color:#8795A9">' +
            month +
            ' 2023' +
            '</span>' +
            '</div>'
          );
        },
      },
    };
  }
}
