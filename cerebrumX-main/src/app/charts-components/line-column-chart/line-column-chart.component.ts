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
  ApexPlotOptions,
  ApexLegend,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  title: ApexTitleSubtitle;
  labels: string[];
  stroke: any; // ApexStroke;
  dataLabels: any; // ApexDataLabels;
  fill: ApexFill;
  tooltip: ApexTooltip;
  plotOptions: ApexPlotOptions;
  colors: string[];
  legend: ApexLegend;
  grid: ApexGrid;
};

@Component({
  selector: 'app-line-column-chart',
  templateUrl: './line-column-chart.component.html',
  styleUrls: ['./line-column-chart.component.css'],
})
export class LineColumnChartComponent {
  @Input() chartData: any;
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;

  ngOnInit(): void {
    this.chartOptions = {
      legend: {
        show: false,
      },

      colors: this.chartData.colors,

      series: [
        {
          name: this.chartData.yaxisTitle1,
          type: 'column',
          data: this.chartData.columnData,
        },
        {
          name: this.chartData.yaxisTitle2,
          type: 'line',
          data: this.chartData.lineData,
        },
  
      ],
      chart: {
        height: this.chartData.height,
        type: 'line',
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      grid: {
        show: true,
        borderColor: '#ebebeb',
        strokeDashArray: 2,
        xaxis: {
          lines: {
            show: false, //or just here to disable only x axis grids
          },
        },
        yaxis: {
          lines: {
            show: true, //or just here to disable only y axis
          },
        },
      },
      plotOptions: {
        bar: {
          // barHeight: '70%',
          borderRadius: 30,

          borderRadiusApplication: 'around',
          columnWidth: '30%',
          distributed: true,
          startingShape: 'rounded',
          endingShape: 'rounded',
          dataLabels: {
            position: 'top',
          },

          colors: {
            backgroundBarRadius: 9,

            backgroundBarColors: ['#eee'],
            backgroundBarOpacity: 0,
          },
        },
      },
      stroke: {
        width: [0, 2],
        curve: 'smooth',
      },

      dataLabels: {
        enabled: false,
        enabledOnSeries: [1],
      },
      // labels: ["Nov'23", "Dec'23", "Jan'24", "Feb'24", "Mar'24"],
      xaxis: {
        title: {
          text: this.chartData.xaxisTitle,
        },
        labels: {
          style: {
            fontSize: '8px',
            fontWeight: 900,
          },
        },
        type: 'category',
        categories: this.chartData.categories,
      },
      yaxis: [
        {
          title: {
            text: this.chartData.yaxisTitle1,
          },
        },
        {
          opposite: true,
          title: {
            text: this.chartData.yaxisTitle2,
          },
        },
      ],
    };
  }
}
