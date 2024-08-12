import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from "ngx-bootstrap/modal";
import {  CUSTOM_ELEMENTS_SCHEMA ,NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BulkEligibilityComponent } from './bulk-eligibility/bulk-eligibility.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VehicleSummaryComponent } from './vehicle-summary/vehicle-summary.component';
import { DonutChartComponent } from './charts-components/donut-chart/donut-chart.component';
import { DistColumnChartComponent } from './charts-components/dist-column-chart/dist-column-chart.component';
import { MultiRadialChartComponent } from './charts-components/multi-radial-chart/multi-radial-chart.component';
import { BasicColumnChartComponent } from './charts-components/basic-column-chart/basic-column-chart.component';
import { BarCategoryChartComponent } from './charts-components/bar-category-chart/bar-category-chart.component';
import { BasicLineChartComponent } from './charts-components/basic-line-chart/basic-line-chart.component';
import { TripSimulatorComponent } from './trip-simulator/trip-simulator.component';
import { NgChartsModule } from 'ng2-charts';
import { SpeedometerChartComponent } from './charts-components/speedometer-chart/speedometer-chart.component';
import { DistanceChartComponent } from './charts-components/distance-chart/distance-chart.component';
import { FuelmeterChartComponent } from './charts-components/fuelmeter-chart/fuelmeter-chart.component';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MapComponent } from './charts-components/map/map.component';
import { VinDashboardComponent } from './vin-dashboard/vin-dashboard.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { SustainabilityDashboardComponent } from './vin-dashboard/sustainability-dashboard/sustainability-dashboard.component';
import { LineColumnChartComponent } from './charts-components/line-column-chart/line-column-chart.component';
import { SafetyDashboardComponent } from './vin-dashboard/safety-dashboard/safety-dashboard.component';
import { TrackingDashboardComponent } from './vin-dashboard/tracking-dashboard/tracking-dashboard.component';
import { Daterangepicker } from 'ng2-daterangepicker';
import { MultipleLineChartComponent } from './charts-components/multiple-line-chart/multiple-line-chart.component';
import { LoginComponent } from './login/login.component';
import { EvSectionComponent } from './vin-dashboard/sustainability-dashboard/ev-section/ev-section.component';
import { MaintenanceDashboardComponent } from './vin-dashboard/maintenance-dashboard/maintenance-dashboard.component';
import { HalfDonutChartComponent } from './charts-components/half-donut-chart/half-donut-chart.component';
import { NoTripsFoundComponent } from './no-trips-found/no-trips-found.component';
import { VinSummaryComponent } from './vin-summary/vin-summary.component';
import { TcoVinComponent } from './tco-vin/tco-vin.component';
import { FleetDashboardComponent } from './fleet-dashboard/fleet-dashboard.component';
import { HorizontalBarChartComponent } from './charts-components/horizontal-bar-chart/horizontal-bar-chart.component';
import { ManageDeviceComponent } from './manage-device/manage-device.component';
import { FormsModule } from '@angular/forms';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarModule } from 'primeng/calendar';
import { DatePipe } from '@angular/common';
import { VINBreakupComponent } from './vin-breakup/vin-breakup.component';


@NgModule({
  declarations: [
    CalendarComponent,
    DashboardComponent,
    AppComponent,
    BulkEligibilityComponent,
    VehicleSummaryComponent,
    DashboardComponent,
    DonutChartComponent,
    DistColumnChartComponent,
    MultiRadialChartComponent,
    BasicColumnChartComponent,
    BarCategoryChartComponent,
    BasicLineChartComponent,
    TripSimulatorComponent,
    SpeedometerChartComponent,
    DistanceChartComponent,
    FuelmeterChartComponent,
    MapComponent,
    VinDashboardComponent,
    SustainabilityDashboardComponent,
    LineColumnChartComponent,
    SafetyDashboardComponent,
    TrackingDashboardComponent,
    MultipleLineChartComponent,
    LoginComponent,
    EvSectionComponent,
    MaintenanceDashboardComponent,
    HalfDonutChartComponent,
    NoTripsFoundComponent,
    VinSummaryComponent,
    TcoVinComponent,
    FleetDashboardComponent,
    HorizontalBarChartComponent,
    ManageDeviceComponent,
    VINBreakupComponent,
    
  ],
  imports: [
    
    CalendarModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    NgApexchartsModule,
    NgChartsModule,
    NgSelectModule,
    Daterangepicker,
    NgxChartsModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw'
    })
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
