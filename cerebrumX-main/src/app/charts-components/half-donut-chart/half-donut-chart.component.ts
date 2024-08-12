import { Component, Input, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexXAxis,
  ApexGrid,
  ApexLegend,
  ChartComponent,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
};

@Component({
  selector: 'app-half-donut-chart',
  templateUrl: './half-donut-chart.component.html',
  styleUrls: ['./half-donut-chart.component.css'],
})
export class HalfDonutChartComponent {
  @Input() chartData: any;
  @ViewChild('chart') chart!: ChartComponent;
  public ChartOptions!: Partial<ChartOptions> | any;

  ngOnInit(): void {
    this.ChartOptions = {
      series: this.chartData.data,

      chart: {
        height: 170,
        type: 'donut',
      },
      labels: this.chartData.categories,
      colors: this.chartData.colors,
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          offsetY: 10,
          donut: {
            labels: {
              show: this.chartData?.labelShow || true,
              total: {
                show: true,
                label: this.chartData?.label || '',
                fontSize: '20px',
                fontWeight: 600,
                formatter: () => this.chartData?.formatter ||''
              }
            },
    
            size : "80%"
          },
        },
      },
      dataLabels: {
        enabled: false // Disable the data labels
      },
      grid: {
        padding: {
          bottom: -80,
        },
      },
      legend:{
        formatter: function (val: any, opt: any) {
          return '<span style="font-size:14px; font-weight:600;margin-left:5px">'+'$' +opt.w.config.series[opt.seriesIndex] + '</span>'+ '</br>' + '<span style="font-size:12px; margin-left:35px; font-weight:500; color:#9A9FA5 ">'+  val  +'</span>';
        },
        markers: {
          width: 25,
          height: 4,
          radius: 4, // Setting radius to 0 will make it a rectangle
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'right',
             
            },
          },
        },
      ],
    };
  }
}
