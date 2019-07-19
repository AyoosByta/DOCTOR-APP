import { GetService } from './../../../../core/services/get.service';
import { ModalController } from '@ionic/angular';
import { LocationService } from './../../../../core/services/location.service';
import { MapsAPILoader } from '@agm/core';
import { Component, OnInit } from '@angular/core';
import { WorkPlaceDTO } from 'src/app/api/models';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-add-workplace-modal',
  templateUrl: './add-workplace-modal.component.html',
  styleUrls: ['./add-workplace-modal.component.scss'],
})
export class AddWorkplaceModalComponent implements OnInit {

  excludes: string[] = [];

  did: number;

  searchLocation = '';

  searchClinic = '';

  selectedLocation: any;

  locationSuggetions: any[] = [];

  firstTime = true;

  workPlace: WorkPlaceDTO = {};

  updateMode = false;

  nameUpdatedStatus = false;

  constructor(
    private modalController: ModalController,
    private postService: PostService,
    private locationService: LocationService
  ) {}

  ngOnInit() {
    if(this.updateMode === true) {
      this.searchClinic = this.workPlace.name;
      this.searchLocation =  this.workPlace.locationName;
      this.selectedLocation = {};
    }
  }

  search() {
    this.firstTime = false;
    this.locationService.getPredictions(this.searchLocation)
    .subscribe(locationData => {
      this.locationSuggetions = locationData;
    });
    this.remove();
  }

  save() {
    if(this.updateMode === false) {
      console.log('Adding Wokplace');
      this.locationService.getGeoFromPlace(this.selectedLocation.description,
        (results, status) => {
          const latitude = results[0].geometry.location.lat();
          const longitude = results[0].geometry.location.lng();
          const latLong = latitude + ',' + longitude;
          this.postService.addWorkplace(this.searchClinic , latLong , this.searchLocation , this.did);
          this.modalController.dismiss();
        });
    } else {
      console.log('Updating Wokplace');
      let description = this.selectedLocation.description;
      if(this.selectedLocation === undefined) {
        description = this.workPlace.locationName;
      }
      console.log(description);
      
      this.locationService.getGeoFromPlace(description,
        (results, status) => {
          const latitude = results[0].geometry.location.lat();
          const longitude = results[0].geometry.location.lng();
          const latLong = latitude + ',' + longitude;
          this.workPlace.name = this.searchClinic;
          this.workPlace.location = latLong;
          this.workPlace.locationName = this.searchLocation;
          this.postService.updateWorkplace(this.workPlace);
          this.modalController.dismiss();
        });
    }
  }

  select(locationData: any) {
    this.selectedLocation = locationData;
    this.searchLocation = locationData.description;
    console.log(this.searchLocation);
  }


  nameUpdated() {
    this.nameUpdatedStatus = true;
  }

  remove() {
    console.log('removed');
    this.selectedLocation = undefined;
  }

  cancel() {
    this.modalController.dismiss();
  }

}
