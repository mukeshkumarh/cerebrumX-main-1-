import { Component, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-safety-dashboard',
  templateUrl: './safety-dashboard.component.html',
  styleUrls: ['./safety-dashboard.component.css'],
})
export class SafetyDashboardComponent {
  @ViewChild('chart') chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions> | any;
  chartData = {
    driverScoreTrend: {
      //basic-line-chart
      chartType: 'basic-line-chart',
      series: [
        {
          name: 'Name',
          data: [20, 45, 75, 40, 80],
        },
        {
          name: 'Name',
          data: [0, 25, 65, 45, 70],
        },
        {
          name: 'Name',
          data: [25, 20, 55, 45, 75],
        },
      ],
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      colors: ['#FA751A', '#2CA87F', '#4680FF'],
      min: 0,
      max: 100,
      tickAmount: 4,
      height: 300,
      curve: 'straight',
      grid: true,
      markers: 2,
      legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'left',
        itemMargin: {
          vertical: 25,
          horizontal: 10,
        },
        markers: {
          strokeColor: '#FA751A',
          strokeWidth: 20
        }
      },
    },
    harshEventTrend: {
      //basic-line-chart
      chartType: 'basic-line-chart',
      series: [
        {
          name: 'Harsh Braking',
          data: [20, 45, 75, 40, 80],
        },
        {
          name: 'Harsh Acceleration',
          data: [0, 25, 65, 45, 70],
        },
        {
          name: 'Harsh Cornering',
          data: [25, 20, 55, 45, 75],
        },
        {
          name: 'Harsh Overspeeding',
          data: [80, 65, 20, 50, 90],
        },
      ],
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      colors: ['#FF0000', '#FA751A', '#2CA87F', '#4680FF'],
      min: 0,
      max: 100,
      tickAmount: 4,
      height: 300,
      curve: 'straight',
      grid: true,
      markers: 2,
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'left',
        itemMargin: {
          vertical: 15,
        },
      },
    },
    aggresiveDriversData: {
      //basic-line-chart
      chartType: 'basic-column-chart',
      series: [
        {
          name: 'Harsh Braking ',
          data: [7, 15, 22, 8, 28],
        },
        {
          name: 'Harsh Acceleration',
          data: [36, 25, 31, 11, 31],
        },
        {
          name: 'Harsh Cornering',
          data: [40, 29, 35, 12, 23],
        },
        {
          name: 'Overspeeding',
          data: [42, 33, 37, 11, 19],
        },
      ],
      categories: ['Driver 1', 'Driver 2', 'Driver 3', 'Driver 4', 'Driver 5'],
      colors: ['#FF9999', '#FF6666', '#FF4D4D', '#FF0000'],
    },
    driverScoreCardData: {
      data: [8.43, 16.57, 15.9, 18.1, 41.0],
      height: 450,
      colors: ['#fc1010', '#f97d7d', '#457dfa', '#fa761b', '#2ca880'],
      categories: ['Very Risky', 'Risky', 'Moderate', 'Good', 'Very Good'],
    },
    driverInsightsData: {
      height: 280,
      data: [398, 210, 149, 123, 74],
      // backgrounddata:[],
      colors: ['#FF0000'],
      categories: [
        'Vehicle 1',
        'Vehicle 2',
        'Vehicle 3',
        'Vehicle 4',
        'Vehicle 5',
      ],
      legend: {
        show: false,
      },
      axisLabel: true,
      min: 0,
      max: 500,
      tickAmount: 5,
    },
  };

  ngOninit(): void {}
}
