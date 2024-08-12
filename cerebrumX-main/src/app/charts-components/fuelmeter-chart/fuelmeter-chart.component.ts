import { Component, ViewChild } from '@angular/core';
import { ApexChart, ApexGrid, ApexLegend, ApexNonAxisChartSeries, ApexPlotOptions, ChartComponent } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  legend: ApexLegend;
  colors: string[];
  grid: ApexGrid;
};

@Component({
  selector: 'app-fuelmeter-chart',
  templateUrl: './fuelmeter-chart.component.html',
  styleUrls: ['./fuelmeter-chart.component.css']
})
export class FuelmeterChartComponent {
  @ViewChild('chart') chart!: ChartComponent;
  @ViewChild('clock-container') clockContainer!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;
  speedArr = ['0', '20', '40', '60', '80', '100', '120', '140', '160'];

  constructor() {
    this.chartOptions = {
      chart: {
        type: 'radialBar',
        height: 275,
        events: {
          animationEnd: (chartCtx: any, opts: any) => {
            console.log('chartCtx', chartCtx);

            const value = this.chartOptions.series[0];
            const angle = this.calculateAngle(value);

            // Create a clock hand
            const hand = document.createElement('div');
            hand.className = 'clock-hand';
            hand.style.transform = `rotate(${angle}deg)`;
            chartCtx.el.appendChild(hand);
          },
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          hollow: {
            margin: 15,
            size: '70%',
          },
          dataLabels: {
            show: false,
            showOn: 'always',
            name: {
              offsetY: -10,
              show: true,
              color: '#888',
              fontSize: '13px',
            },
            value: {
              color: '#111',
              fontSize: '30px',
              show: true,
            },
          },
        },
      },
      fill: {
        colors : ['#2CA67E']
      },
      series: [75],
      labels: ['Speed'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              height: 300,
            },
          },
        },
      ],
    };
  }

  ngOnInit() {
    this.chartOptions.chart.events = {
      animationEnd: (chartCtx: any, opts: any) => {
        const value = this.chartOptions.series[0];
        const angle = this.calculateAngle(value);

        // Create a clock hand
        const hand = document.createElement('div');
        hand.className = 'clock-hand';
        hand.style.transform = `rotate(${angle}deg)`;
        chartCtx.el.appendChild(hand);
      },
    };
  }
  private calculateAngle(value: number): number {
    // Calculate the angle based on the value and the chart's configuration
    const maxAngle = 180; // Assuming a semi-circular chart
    const maxDataValue = 100; // Maximum value in the chart's scale

    const angle = (value / maxDataValue) * maxAngle;
    return angle;
  }
}
