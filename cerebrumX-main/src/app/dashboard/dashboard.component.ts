import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  chartData = {
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
      categories: [
        'Driver 1',
        'Driver 2',
        'Driver 3',
        'Driver 4',
        'Driver 5',
      ],
      colors:  ['#FF9999', '#FF6666', '#FF4D4D', '#FF0000'],
      
    },
    totalTripsData: {
      //basic-line-chart
      chartType: 'basic-line-chart',
      data: [101, 250, 110, 400, 150, 250],
      categories: ['Aug', 'Sept', 'Oct', 'Nov', 'Dec', 'Jan'],
      colors: ['#2CA87F'],
      min: 0,
      max: 400,
      tickAmount: 4,
      totalNumber: '238,582',
      percentage: '4.25%',
    },
    totalMilesDrivenData: {
      //basic-line-chart
      chartType: 'basic-line-chart',
      data: [50, 250, 220, 260, 190, 350],
      categories: ['Aug', 'Sept', 'Oct', 'Nov', 'Dec', 'Jan'],
      colors: ['#FA751A'],
      min: 0,
      max: 400,
      tickAmount: 4,
      totalNumber: '15,092,494.08',
      percentage: '12.71%',
    },

    totalDrivingHoursData: {
      //basic-line-chart
      chartType: 'basic-line-chart',
      data: [400, 250, 390, 100, 200, 90],
      categories: ['Aug', 'Sept', 'Oct', 'Nov', 'Dec', 'Jan'],
      colors: ['#4680FF'],
      min: 0,
      max: 400,
      tickAmount: 4,
      totalNumber: '4512',
      percentage: '12.71%',
    },

    fleetMileageData: {
      //basic-line-chart
      chartType: 'basic-line-chart',
      data: [500, 2900, 2700, 3000, 1900, 3500],
      categories: ['Aug', 'Sept', 'Oct', 'Nov', 'Dec', 'Jan'],
      colors: ['#4680FF'],
      min: 0,
      max: 4000,
      tickAmount: 4,
      totalNumber: null,
      percentage: null,
    },

    vehicleAlertData: {
      chartType: 'app-bar-category-chart',
      data: [70, 20, 10, 5, 2],
      colors: ['#2ca87f', '#fa751a', '#4680ff', '#ff8080', '#ff0000'],
      labels: ['Vehicle 5', 'Vehicle 4', 'Vehicle 3', 'Vehicle 2', 'Vehicle 1'],
    },
    driverInsightsData: {
      height : 280,
      data: [398,210,149,123,74],
      // backgrounddata:[],
      colors: [
        '#FF0000'
        
      ],
      categories: ['Vehicle 1', 'Vehicle 2','Vehicle 3','Vehicle 4','Vehicle 5'],
      legend: {
        show: false,
      },
      axisLabel:true,
      min:0,
      max:500,
      tickAmount:5
    },
    fuelConsumedData: {
      data: [1575,1354,1200,854,698,542],
      // backgrounddata:[],
      colors: [
        '#2CA87F','#95D3BF','#FA751A','#FCBA8C','#4680FF','#C7D9FF'
        
      ],
      categories: ['Aug','Sept','Oct','Nov','Dec','Jan'],
      legend: {
        show: false,
      },
      axisLabel:true,
      min:0,
      max:2000,
      tickAmount:5
    },
    byFuelData: {
      data: [75.15,19.75,5.1,1,0.00,0.00,0.00],
      // backgrounddata:[],
      colors: [
        '#2CA87F','#95D3BF','#FA751A','#FCBA8C','#4680FF','#C7D9FF','#FF0000'
        
      ],
      categories: ['Gasoline','Diesel','Electric','FFV','CNG','LPG','Hybrid'],
      legend: {
        show: true,
      },
      axisLabel:false,
      min:0,
      max:100,
      tickAmount:5
    },
    driverScoreCardData: {
      data: [8.43, 16.57, 15.9, 18.1, 41.0],
      height: 450,
      colors: ['#fc1010', '#f97d7d', '#457dfa', '#fa761b', '#2ca880'],
      categories: ['Very Risky', 'Risky', 'Moderate', 'Good', 'Very Good'],
    },
    byMakeCardData: {
      data: [62.0, 8.7, 29.3, 0.0],
      height : 380,
      colors: ['#2ca880', '#fa761b', '#457dfa', '#c7d9ff'],
      categories: ['Stellantis', 'Ford', 'Toyota', 'FordPro'],
    },
    byBodyClass: {
      chartType : 'multi-radial-chart',
      data: [55.5, 31.6, 8.2, 3.21, 1.49, 0, 0],
      colors: ['#2ca87f', '#95d3bf', '#fa751a', '#fcba8c','#4680ff','#c7d9ff','#ff0000'],
      categories: ['Pickup', 'Convertible', 'Sedan', 'Hatchback','Van','SUV/MUV','Truck'],

    },
  };
}
