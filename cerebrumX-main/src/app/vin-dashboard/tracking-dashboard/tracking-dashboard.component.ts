import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Subscription, interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-tracking-dashboard',
  templateUrl: './tracking-dashboard.component.html',
  styleUrls: ['./tracking-dashboard.component.css'],
})
export class TrackingDashboardComponent implements OnInit {
  public options: any = {
    locale: { format: 'DD/MM/YYYY' },
    ranges: {
      Today: [moment(), moment()],
      Yesterday: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'Last 7 Days': [moment().subtract(6, 'days'), moment()],
      'Last 30 Days': [moment().subtract(29, 'days'), moment()],
      'This Month': [moment().startOf('month'), moment().endOf('month')],
      'Last Month': [
        moment().subtract(1, 'month').startOf('month'),
        moment().subtract(1, 'month').endOf('month'),
      ],
    },
    alwaysShowCalendars: true,
  };
  trackingDateRange!: any;
  markers: {
    lat: number;
    lng: number;
    markerIconUrl: string;
    title: string;
    content: string;
  }[] = [
    {
      lat: 34.0842,
      lng: 74.7968,
      markerIconUrl: '../../../assets/images/car-top-view-icon-rotated.svg',
      title: 'Marker 1',
      content: 'Content for Marker 1',
    }, // Example marker 1
    {
      lat: 34.0838,
      lng: 74.7964,
      markerIconUrl: '../../../assets/images/car-2.svg',
      title: 'Marker 2',
      content: 'Content for Marker 2',
    }, //reduce long
    {
      lat: 34.086,
      lng: 74.796,
      markerIconUrl: '../../../assets/images/car-3.svg',
      title: 'Marker 3',
      content: 'Content for Marker 3',
    },
  ];
  items = [
    { title: 'Item 1', content: 'Content 1' },
    { title: 'Item 2', content: 'Content 2' },
    { title: 'Item 3', content: 'Content 3' }
  ];
  
  accordianData = [
    {
      outer_id: 1,
      month: 'March',
      trips: 23,
      miles: 37,
      tripsDetails: [
        {
          inner_id: 11,
          trip_id: 'F2M_GSETRET4235435ETTRFSFG',
          start_time: '2:33 PM',
          end_time: '2:44 PM',
        },
        {
          inner_id: 12,
          trip_id: 'F2M_GSETRET4235435ETTRFSFG',
          start_time: '2:33 PM',
          end_time: '2:44 PM',
        },
        {
          inner_id: 13,
          trip_id: 'F2M_GSETRET4235435ETTRFSFG',
          start_time: '2:33 PM',
          end_time: '2:44 PM',
        },
      ],
    },
    {
      outer_id: 2,
      month: 'April',
      trips: 23,
      miles: 37,
      tripsDetails: [
        {
          inner_id: 21,
          trip_id: 'F2M_GSETRET4235435ETTRFSFG',
          start_time: '2:33 PM',
          end_time: '2:44 PM',
        },
        {
          inner_id: 22,
          trip_id: 'F2M_GSETRET4235435ETTRFSFG',
          start_time: '2:33 PM',
          end_time: '2:44 PM',
        },
        {
          inner_id: 23,
          trip_id: 'F2M_GSETRET4235435ETTRFSFG',
          start_time: '2:33 PM',
          end_time: '2:44 PM',
        },
      ],
    },
    {
      outer_id: 3,
      month: 'May',
      trips: 23,
      miles: 37,
      tripsDetails: [
        {
          inner_id: 31,
          trip_id: 'F2M_GSETRET4235435ETTRFSFG',
          start_time: '2:33 PM',
          end_time: '2:44 PM',
        },
        {
          inner_id: 32,
          trip_id: 'F2M_GSETRET4235435ETTRFSFG',
          start_time: '2:33 PM',
          end_time: '2:44 PM',
        },
        {
          inner_id: 33,
          trip_id: 'F2M_GSETRET4235435ETTRFSFG',
          start_time: '2:33 PM',
          end_time: '2:44 PM',
        },
      ],
    },
  ];
  zoomLevel = 17; // Default zoom level
  markerIconUrl = '../../../assets/images/car-top-view-icon-rotated.svg';
  selectedDate(event: any) {
    console.log(event);
  }
  moveCount = 0; // Counter for number of moves

  ngOnInit() {
    let i;

    interval(200)
      .pipe(take(100))
      .subscribe(() => {
        this.moveMarkers();
      });
  }

  moveMarkers() {
    // let i = 0
    // for(i=0;i<3;i++){
    //   if(i)
    // }
    // this.markers.forEach((marker) => {
    this.markers[0].lat += 0.00001; // Update latitude
    this.markers[0].lng -= 0.0000065; // Update longitude

    this.markers[1].lat -= 0.00000065;
    this.markers[1].lng -= 0.00001;

    this.markers[2].lat -= 0.00000725;
    this.markers[2].lng += 0.00001;

    // });
  }

  // Existing methods...

  openInfoWindow(infoWindow: any, marker: any) {
    infoWindow.open(marker);
  }
}
