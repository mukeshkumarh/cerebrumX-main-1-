import { Component } from '@angular/core';

@Component({
  selector: 'app-maintenance-dashboard',
  templateUrl: './maintenance-dashboard.component.html',
  styleUrls: ['./maintenance-dashboard.component.css'],
})
export class MaintenanceDashboardComponent {
  chartData: any = {
    driverScoreCardData: {
      data: [7, 23, 53, 17],
      height: 450,
      colors: ['#FF0000', '#F3721A', '#2CA77E', '#457FFC'],
      categories: ['Very Low', 'Low', 'Normal', 'High'],
      labelShow : false,
    },
    tireBreakUpData: {
      data: [26, 29, 45],
      height: 450,
      colors: ['#F3721A', '#2CA77E', '#457FFC'],
      categories: [
        'Under-Inflated Tires',
        'Over Inflated Tires',
        'Correctly - Inflated Tires',
      ],
      label: 400,
      formatter: 'Total Tires',
    },
    totalMilesDrivenData: {
      //basic-line-chart
      chartType: 'basic-line-chart',
      data: [210, 170, 400, 230, 520, 205],
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      colors: ['#4680FF'],
      min: 0,
      max: 800,
      tickAmount: 4,
      height: 250,
      curve: 'straight',
      xaxisTitle: 'Months',
      yaxisTitle: 'Fuel cost in dollars',
      grid: true,
      markers: 2,
    },
    driverScoreTrend: {
      topLegend: true,
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
        show: false,
        position: 'bottom',
        horizontalAlign: 'left',
        itemMargin: {
          vertical: 25,
          horizontal: 10,
        },
        markers: {
          strokeColor: '#FA751A',
          strokeWidth: 20,
        },
      },
    },
    vehicleAlertData: {
      chartType: 'app-bar-category-chart',
      height: 200,
      data: [545, 478, 98],
      suffix: 'T',
      colors: ['#2ca87f', '#fa751a', '#4680ff'],
      labels: [
        'Under-Inflated Tires',
        'Over-Inflated Tires',
        'Correctly-Inflated Tires',
      ],
      icons: true,
    },
    lifeExpentancyData: {
      height: 270,
      xaxistitle: 'Type of Tires',
      yaxistitle: 'No of years',
      //basic-line-chart
      chartType: 'basic-column-chart',
      series: [
        {
          name: '',
          data: [22, 17],
        },
        {
          name: '',
          data: [16, 12],
        },
      ],
      categories: ['Under-Inflated Conditions', 'Over-Inflated Conditions'],
      colors: ['#2CA87F', '#FA751A'],
      legend: false,
    },
    fuelConsumedData: {
      //basic-line-chart
      chartType: 'column-line-chart',
      columnData: [370, 280.2, 370.2],
      lineData: [387.2, 300, 386.6],
      categories: [
        'Recommended Conditions',
        'Under-Inflated Conditions',
        'Over-Inflated Conditions',
      ],
      colors: ['#2CA87F', '#FA751A', '#4680FF'],
      height: 270,
      xaxisTitle: 'Gallons',
      yaxisTitle1: 'Types of conditions',
    },
    DistanceDrivenData: {
      icons: true,
      chartType: 'app-bar-category-chart',
      height: 200,
      suffix: 'km',
      data: [150, 100, 150],
      colors: ['#2ca87f', '#fa751a', '#4680ff'],
      labels: [
        'Under-Inflated Tires',
        'Over-Inflated Tires',
        'Correctly-Inflated Tires',
      ],
    },
  };

  ngOninit() {}
}
