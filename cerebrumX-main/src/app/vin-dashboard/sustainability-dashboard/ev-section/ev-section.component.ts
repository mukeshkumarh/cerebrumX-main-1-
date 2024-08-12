import { Component } from '@angular/core';
import * as moment from 'moment';
import { Subscription, interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-ev-section',
  templateUrl: './ev-section.component.html',
  styleUrls: ['./ev-section.component.css'],
})
export class EvSectionComponent {
  filter : string = 'weekly'
  chartData = {
    fuelConsumedData: {
      height:200,
      data: [280,110,190,220,310,210,350,270,80,190,270,310],
      // backgrounddata:[],
      colors: ['#2CA87F','#95D3BF','#FA751A','#FCBA8C','#4680FF', '#C7D9FF','#2CA87F','#95D3BF','#FA751A','#FCBA8C','#4680FF', '#C7D9FF'],
      categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'],
      legend: {
        show: false,
      },
      axisLabel:false,
      min:0,
      max:400,
      tickAmount:4,
      datalabel:false,
      grid:true
    },
    savingsData: {
      height:200,
      chartType: 'app-bar-category-chart',
      data: [182, 267, 435],
      colors: ['#F5731A', '#467FFD', '#2CA47C'],
      labels: ['Charging Cost', 'Energy Consumed', 'Carbon Emissions'],
      labelsshow: false,
    },

    chargingData: {
      height: 150,
      width: 200,
      chartType: 'app-bar-category-chart',
      data: [30, 70],
      colors: ['#2CA87F', '#FA751A'],
      labels: ['Public Charging', 'Home Charging'],
      labelsshow: false,
    },
    ElectronicVehicleData: {
      data: [20, 60, 20],
      height: 220,
      colors: ['#4680FF', '#2CA77E', '#F6731A'],
      categories: [
        'Plug-in Hybrid Electric Vehicles (PHEV)',
        'Battery Electric Vehicles (BEV)',
        'Hybrid Electric Vehicles (HEV)',
      ],
      position: 'right',
      formatter: 'Total EVs',
      label: '100',
    },
    ComparisonData:{
      data: [2000,1000],
      height: 450,
      colors: [ '#fa761b', '#2ca880'],
      categories: ['Home Charging', 'Public Charging'],
      labelShow:true,
      label:'Total Cost',
      formatter:'$3000'
    }
  };

 // Initialize the activeTab variable to hold the index of the active tab
 activeTab: number = 0;

 // Method to change the active tab
 changeTab(index: number): void {
   this.activeTab = index;
 }
  section: string = 'history';




  // Map Part Start
  markers: { lat: number; lng: number }[] = [
    { lat: 34.0845, lng: 74.7968 }, // Example marker 1
    { lat: 34.1, lng: 74.8373 }, // Example marker 2
    // Add more markers as needed
  ];
  zoomLevel = 18; // Default zoom level
  markerIconUrl = '../../../assets/images/car-top-view-icon-rotated.svg';
  selectedDate(event: any) {
    console.log(event);
  }
  moveCount = 0; // Counter for number of moves

  ngOnInit() {
    let i;

    interval(200)
      .pipe(take(200))
      .subscribe(() => {
        this.moveMarkers();
      });
  }

  moveMarkers() {
    this.markers.forEach((marker) => {
      marker.lat += 0.00001; // Update latitude
      marker.lng -= 0.0000065; // Update longitude
    });
  }
  //Map Part Ends
}
