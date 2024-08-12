import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-distance-chart',
  templateUrl: './distance-chart.component.html',
  styleUrls: ['./distance-chart.component.css'],
})
export class DistanceChartComponent {
  @Input() data: any;
  minValue: any;
  maxValue: any;
  chartType: any;
  progressMeter: number = 0;
  single: any[] = [
    {
      name: '',
      value: 500,
    },
  ];

  colorScheme = {
    domain: ['#fa751a'],
  };

  ngOnInit() {
    this.single[0].value = this.data.value;
    // Object.assign(this, this.single);
    this.minValue = this.data.minValue;
    this.maxValue = this.data.maxValue;
    this.chartType = this.data.chartType;
    this.progressCalc();
  }
  public progressCalc() {
    this.progressMeter = Math.round((this.single[0].value * 50) / this.maxValue);
  }
}
