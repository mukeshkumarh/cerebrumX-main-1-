import { Component, Input, ViewChild } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexChart,
  ApexPlotOptions,
  ChartComponent,
  ApexLegend,
  ApexGrid,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  legend: ApexLegend;
  colors : string[];
  grid:ApexGrid
};

@Component({
  selector: 'app-multi-radial-chart',
  templateUrl: './multi-radial-chart.component.html',
  styleUrls: ['./multi-radial-chart.component.css'],
})
export class MultiRadialChartComponent {
  @Input() chartData: any;
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;

  constructor() {}
  ngOnInit(): void {
    this.chartOptions = {
      series: this.chartData.data,
      grid:{
        strokeDashArray: 7,
      },
      chart: {
        height: 450,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          offsetX: 10,
          offsetY: 10,
          hollow : {
            margin : 10
          },
          dataLabels: {
            name: {
              fontSize: '22px',
            },
            value: {
              fontSize: '16px',
            },
          },
          track : {
            strokeWidth : '40%',
            margin : 6,
          }
        },
      },
      labels: this.chartData.categories,
      colors : this.chartData.colors,
      legend: {
        show: true,
        enable: true,
        position: 'bottom',
        horizontalAlign: 'left',
        fontSize: '14',
        markers: {
          offsetY: 100,
        },
        itemMargin: {
          horizontal: 10,
          vertical: 13,
        },
        
        formatter: function (val: any, opt: any) {
          return (
            val +
            '</br>' +
            '<b style="font-size:20px; margin-left:15px">' +
            opt.w.config.series[opt.seriesIndex] +
            '%' +
            '</b>'
          );
        },
      },
    };
  }
}
