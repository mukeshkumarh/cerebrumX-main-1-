import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-bar-chart',
  templateUrl: './horizontal-bar-chart.component.html',
  styleUrls: ['./horizontal-bar-chart.component.css']
})
export class HorizontalBarChartComponent {
  @Input() chartData: any;
  calculateWidth(value: number): number {
    const total = this.chartData.data.reduce((acc: number, curr: number) => acc + curr, 0);
    return total ? (value / total) * 100 : 0;
  }
}
