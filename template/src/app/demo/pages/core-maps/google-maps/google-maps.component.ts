import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GoogleMapsComponent implements OnInit {
  lat = 21.1591857;
  lng = 72.7522563;
  latA = 21.7613308;
  lngA = 71.6753074;
  zoom = 8;

  styles: any = [{
    featureType: 'all',
    stylers: [{
      saturation: -80
    }]
  }, {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [{
      hue: '#00ffee'
    }, {
      saturation: 50
    }]
  }, {
    featureType: 'poi.business',
    elementType: 'labels',
    stylers: [{
      visibility: 'off'
    }]
  }];

  constructor() { }

  ngOnInit() {
  }

}
