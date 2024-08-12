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
  ApexStroke,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  stroke:ApexStroke
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
};

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css'],
})
export class DonutChartComponent {
  @Input() chartData: any;
  @ViewChild('chart') chart!: ChartComponent;
  public ChartOptions!: Partial<ChartOptions> | any;

  ngOnInit(): void {
    this.ChartOptions = {
      series: this.chartData.data,
      chart: {
        height: this.chartData.height,
        type: 'donut',
      },
      stroke: {
        width: 0,
      },
      labels: this.chartData.categories,
      responsive: [
        {
          breakpoint: 480,
          options: {
            
            chart: {
              width: '100%',
            },
            legend: {
              show: this.chartData.legend || false,
              position: 'bottom',
            },
          },
        },
      ],
      colors: this.chartData.colors,
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: '14px',
                fontWeight: 600,
                color: '#000',
              },
              value: {
                show: true,
                fontSize: '12px',
                fontWeight: 500,
                color: '#000',
              },
              total: {
                show: true,
                label: this.chartData.label,
                fontSize: '12px',
                fontWeight: 600,
                color: '#000',
                formatter: () => this.chartData.formatter,
              },
            },
            stroke: {
              width: 0
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
        position: this.chartData?.position || 'bottom',
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
}
