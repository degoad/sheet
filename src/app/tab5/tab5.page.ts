import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var google;


@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page implements OnInit, AfterViewInit {
  latitude: any;
  longitude: any;
  @ViewChild('mapElement', {static: false}) mapNativeElement: ElementRef;

  async getLocation() {
    const coordinates = await this.geolocation.getCurrentPosition();
    console.log('Current', coordinates);
    this.latitude = coordinates.coords.latitude;
    this.longitude = coordinates.coords.longitude;
  }

  constructor(private geolocation: Geolocation) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
        center: {lat: this.latitude, lng: this.longitude},
        zoom: 6
      });
      const infoWindow = new google.maps.InfoWindow();
      const pos = {
        lat: this.latitude,
        lng: this.longitude
      };
      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      infoWindow.open(map);
      map.setCenter(pos);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

}
