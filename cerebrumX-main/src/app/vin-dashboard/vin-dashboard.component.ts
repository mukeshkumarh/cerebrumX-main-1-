import { Component } from '@angular/core';

@Component({
  selector: 'app-vin-dashboard',
  templateUrl: './vin-dashboard.component.html',
  styleUrls: ['./vin-dashboard.component.css'],
})
export class VinDashboardComponent {
  section: string = 'fleetDashboard';
  ngOninit(): void {}
}
