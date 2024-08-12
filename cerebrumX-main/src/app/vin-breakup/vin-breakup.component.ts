import { Component } from '@angular/core';

@Component({
  selector: 'app-vin-breakup',
  templateUrl: './vin-breakup.component.html',
  styleUrls: ['./vin-breakup.component.css']
})
export class VINBreakupComponent {
  chartData = {
    vehicleEnrolledData: {
      labels: ['Toyota', 'GM', 'Ford', 'Stellantis'],
      data: [
        { ineligible: 10000, eligible: 45000, inProgress: 23000 },
        { ineligible: 2000, eligible: 6000, inProgress: 3000 },
        { ineligible: 200, eligible: 130000, inProgress: 10000 },
        { ineligible: 20000, eligible: 25000, inProgress: 15000 }
      ]
    }
  };

  calculateWidth(value: number, total: number): string {
    const percentage = (value / total) * 100;
    const minimumWidth = 10; // Minimum visual length in percentage
    return Math.max(percentage, minimumWidth) + '%';
  }

  getTotal(index: number): number {
    const item = this.chartData.vehicleEnrolledData.data[index];
    return item.ineligible + item.eligible + item.inProgress;
  }

  getClass(type: string): string {
    if (type === 'ineligible') {
      return 'rounded-start rounded-middle';
    } else if (type === 'eligible') {
      return 'rounded-middle';
    } else {
      return 'rounded-end rounded-middle';
    }
  }
}
