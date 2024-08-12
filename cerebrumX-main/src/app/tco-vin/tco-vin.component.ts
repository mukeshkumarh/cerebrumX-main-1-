import { Component } from '@angular/core';

@Component({
  selector: 'app-tco-vin',
  templateUrl: './tco-vin.component.html',
  styleUrls: ['./tco-vin.component.css'],
})
export class TcoVinComponent {
  chartData = {
    ComparisonData: {
      data: [2644.94, 1490.0, 598.29, 1855.81, 263.83],
      height: 450,
      colors: ['#779EF1', '#63EABE', '#EB5252', '#FF8080', '#4DDE76'],
      categories: [
        'Fuel cost',
        'Deprecation cost',
        'Maintain cost',
        'Insurance cost',
        'State fees',
      ],
      labelShow: true,
      label: 'Total Annual Cost',
      formatter: '$6797.29',
      
    },
    annualProjectionData: {
      height: 300,
      xaxistitle: '',
      yaxistitle: 'Annual fuel cost',
      yaxistitle2: 'Total cost per mile',

      chartType: 'basic-column-chart',
      series: [
        {
          name: '',
          data: [1500, 3000, 3600, 3500, 3900],
        },
        {
          name: '',
          data: [1000, 2000, 4200, 3500, 4500],
        },
      ],
      categories: ['2021', '2022', '2023', '2024', '2025'],
      colors: ['#FF8531', '#FFBD8F'],
      legend: false,
      columnWidth:'40%',
      tooltipbg: '#FFBD8F'
    },
    fuelCostData: {
      height: 300,
      xaxistitle: '',
      yaxistitle: 'Annual fuel cost',
      yaxistitle2: 'Total cost per mile',

      chartType: 'basic-column-chart',
      series: [
        {
          name: '',
          data: [1500, 3000, 3600, 3500, 3900],
        },
        {
          name: '',
          data: [1000, 2000, 4200, 3500, 4500],
        },
        
      ],
      categories: ['2021', '2022', '2023', '2024', '2025'],
      colors: ['#8BB0FF', '#D8E4FF'],
      legend: false,
      columnWidth:'70%',
      tooltipbg: '#9089D4',
    },
    depreciationCostData: {
      height: 300,
      xaxistitle: '',
      yaxistitle: 'Annual depreciation cost',
      yaxistitle2: 'Total cost per mile',

      chartType: 'basic-column-chart',
      series: [
        {
          name: '',
          data: [1500, 3000, 3600, 3500, 3900],
        },
        {
          name: '',
          data: [1000, 2000, 4200, 3500, 4500],
        },
      ],
      categories: ['2021', '2022', '2023', '2024', '2025'],
      colors: ['#95D3BF', '#C4F2E3'],
      legend: false,
      columnWidth:'70%',
      tooltipbg: '#95D3BF',
    },
    maintainenceCostData: {
      height: 300,
      xaxistitle: '',
      yaxistitle: 'Annual fuel cost',
      yaxistitle2: 'Total cost per mile',

      chartType: 'basic-column-chart',
      series: [
        {
          name: '',
          data: [1500, 3000, 3600, 3500, 3900],
        },
        {
          name: '',
          data: [1000, 2000, 4200, 3500, 4500],
        },
      ],
      categories: ['2021', '2022', '2023', '2024', '2025'],
      colors: ['#EB5252', '#FFB0B0'],
      legend: false,
      columnWidth:'70%',
      tooltipbg: '#FFB0B0',
    },
  };
}
