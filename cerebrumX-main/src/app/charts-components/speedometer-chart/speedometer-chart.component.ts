import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-speedometer-chart',
  templateUrl: './speedometer-chart.component.html',
  styleUrls: ['./speedometer-chart.component.css'],
})
export class SpeedometerChartComponent {
  @Input() data: any;
  minValue: any;
  maxValue: any;
  chartType: any;
  angle!: string;
  progressMeter: number = 0;
  single: any[] = [
    {
      name: '',
      value: 0,
    },
  ];

  colorScheme = {
    domain: ['#5AA454'],
  };

  ngOnInit() {
    this.single[0].value = this.data.value || 0;
    this.angle = `rotate(-90deg)`;
    Object.assign(this, this.single);
    this.minValue = this.data.minValue;
    this.maxValue = this.data.maxValue;
    this.chartType = this.data.chartType;
    setInterval(() => {
      this.angle = `rotate(${this.calculateAngle(this.single[0].value)}deg)`;
    },100)

    this.progressCalc();
  }
  public calculateAngle(input: any): number {
    const mapping: any =
      this.chartType == 'speed'
        ? {
            0: -90,
            1: -60,
            2: -30,
            3: 0,
            4: 30,
            5: 60,
            6: 90,
            7: 120,
            8: 150,
          }
        : {
            0: -90,
            20: -60,
            40: -30,
            60: 0,
            80: 30,
            100: 60,
            120: 90,
            140: 120,
            160: 150,
          };

    if (input in mapping) {
      return mapping[input];
    }

    // If the input is not in the mapping, calculate the intermediate values
    const keys = Object.keys(mapping)
      .map(Number)
      .sort((a, b) => a - b);
    for (let i = 0; i < keys.length - 1; i++) {
      if (input > keys[i] && input < keys[i + 1]) {
        const diff = keys[i + 1] - keys[i];
        const percent = (input - keys[i]) / diff;
        const angleDiff = mapping[keys[i + 1]] - mapping[keys[i]];
        return mapping[keys[i]] + angleDiff * percent;
      }
    }

    return -90; // Return null for out of range inputs
  }

  public progressCalc() {
    const total = this.chartType == 'speed' ? 12 : 4;
    this.progressMeter = Math.round((this.single[0].value * total) / this.maxValue);
  }
}
