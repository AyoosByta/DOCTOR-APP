import { Injectable, OnInit, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import { MapsAPILoader, GoogleMapsAPIWrapper } from '@agm/core';


declare var google: any;

@Injectable({
  providedIn: 'root'
})
export class LocationService implements OnInit {

  public autoCompleteService: any;

  currentLat: number;
  currentLon: number;

  geocoder: any;

  constructor(private mapsAPILoader: MapsAPILoader, private mapsWrapper: GoogleMapsAPIWrapper, private geolocation: Geolocation) {

    console.log('Constror service location');
    this.mapsAPILoader.load().then(() => {
    this.autoCompleteService = new
    google.maps.places.AutocompleteService();

  });

  }


  calculateDistance(from: any, to: any): number {
    const distance = google.maps.geometry.spherical.computeDistanceBetween(from, to);
    return distance;
  }

  getCurrentLocation() {
    this.geolocation.getCurrentPosition().then(resp => {
       this.currentLat = resp.coords.latitude;
       this.currentLon = resp.coords.longitude;

    });
  }

  getPredictions(searchTerm: string): Observable<any[]> {

    return Observable.create(observer => {
      this.autoCompleteService.getPlacePredictions({input: searchTerm}, data => {
        let previousData: Array<any[]>;
        if (data) {
          previousData = data;
          observer.next(data);
          observer.complete();
        }

        if (!data) {

          observer.next(previousData);
          observer.complete();
        } else {

          observer.error(status);

        }


      });
    });

  }

  async geocodeAddress(place_id: string) {
    this.geocoder = new google.maps.Geocoder;
    let latlon = [];
    console.log('dhgshghsgdhgsgdhg ' ,place_id);
    return await this.geocoder.geocode({placeId: place_id}, (results, status) => {
      if (status !== 'OK') {
        console.log('Geocoder failed due to: ' + status);
        return;
      }

      latlon = [results[0].geometry.location.lat(), results[0].geometry.location.lng()];
      console.log('Lat is inside geo ' + results[0].geometry.location.lat());
      console.log('Lon is inside geo ' + results[0].geometry.location.lng());
      return latlon.toString();
      });
  }

  getGeoFromPlace(description) {
    const geocoder = new google.maps.Geocoder;

    geocoder.geocode({ address: description }, (results, status) => {
        // var latitude = results[0].geometry.location.lat();
        // var longitude = results[0].geometry.location.lng();
        // console.log("lat: " + latitude + ", long: " + longitude);

        console.log(results);
      });
  }


    ngOnInit() {
      this.getCurrentLocation();
    }
}
