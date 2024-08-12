import { Component } from '@angular/core';
import { Legend } from 'chart.js';

@Component({
  selector: 'app-vin-summary',
  templateUrl: './vin-summary.component.html',
  styleUrls: ['./vin-summary.component.css']
})
export class VinSummaryComponent {
  section: string = 'tracking';
  chartData:any={
    tireBreakUpData: {
      data: [46, 29, 10],
      height: 250,
      colors: ['#63E3B9', '#E2E7F3', '#FFFFFF'],
      categories: [
        'Under-Inflated Tires',
        'Over Inflated Tires',
        'Correctly - Inflated Tires',
      ],
      position:'',
      label: 88,
      
    },
    fuelLevelData: {
      data: [46, 29, 10],
      height: 200,
      colors: ['#265493', '#E2E7F3', '#FFFFFF'],
      categories: [
        'Under-Inflated Tires',
        'Over Inflated Tires',
        'Correctly - Inflated Tires',
      ],
      position:'',
      label: 47,
      
    }
  }
}
