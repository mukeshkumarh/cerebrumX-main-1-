import { Component, ElementRef, ViewChild } from '@angular/core';
import * as L from 'leaflet';
import { Browser, map, tileLayer } from 'leaflet';

@Component({
  selector: 'app-trip-simulator',
  templateUrl: './trip-simulator.component.html',
  styleUrls: ['./trip-simulator.component.css'],
})
export class TripSimulatorComponent {
  @ViewChild('map')
  private mapContainer: ElementRef<HTMLElement> | any;
  speedObj = {
    minValue: 0,
    maxValue: 8,
    chartType: 'speed',
    value: 6
  };
  fuelObj = {
    minValue: 0,
    maxValue: 160,
    chartType: 'fuel',
    value: 150
  };
  distanceObj = {
    minValue: 0,
    maxValue: 1000,
    chartType: 'distance',
    value:300
  }
  ngAfterViewInit() {
    const initialState = { lng: 11, lat: 49, zoom: 4 };

    const lefletMap = map(this.mapContainer.nativeElement).setView(
      [initialState.lat, initialState.lng],
      initialState.zoom
    );

    const isRetina = Browser.retina;
    const baseUrl =
      'https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey={apiKey}';
    const retinaUrl =
      'https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}@2x.png?apiKey={apiKey}';

    tileLayer(isRetina ? retinaUrl : baseUrl, {
      attribution:
        'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | <a href="https://openmaptiles.org/" target="_blank">© OpenMapTiles</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap</a> contributors',
      // This API key is for use only in stackblitz.com
      // Get your Geoapify API key on https://www.geoapify.com/get-started-with-maps-api
      // The Geoapify service is free for small projects and the development phase.
      apiKey: '18c85a44a76042788847e2fb74d27386',
      maxZoom: 20,
      id: 'osm-bright',
    } as any).addTo(lefletMap);
  }
}
