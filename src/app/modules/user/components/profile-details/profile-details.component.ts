import { ModalController } from '@ionic/angular';
import { ImageSelectorComponent } from './../../../../shared/image-selector/image-selector.component';
import { GetService } from './../../../../core/services/get.service';
import { DoctorDTO } from 'src/app/api/models';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PostService } from 'src/app/core/services/post.service';
import * as moment from 'moment';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {

  inputSupportedDate: string;

  doctor: DoctorDTO;

  constructor(
    private getService: GetService,
    private postService: PostService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.getDoctor();
  }

  getDoctor() {
    this.getService.getDoctor().subscribe(doctor => {
      this.doctor = doctor;
      if (doctor) {
        const date = new Date(this.doctor.practiceSince);
        this.inputSupportedDate = moment(date).format('YYYY-MM-DD');
      }
    });
  }

  updateDoctor() {
    console.log('Updating Doctor' , this.doctor);
    this.doctor.practiceSince = moment
      .parseZone(this.inputSupportedDate)
      .format()
      .toString();
    this.postService.updateDoctor(this.doctor).then(data => {
      console.log(data);
    });
  }

  async selectImage() {

    const modal = await this.modalController.create({
      component: ImageSelectorComponent,
      cssClass: 'half-height'
    });

    modal.onDidDismiss()
    .then(data => {
      this.doctor.image = data.data.imageBase64;
      this.doctor.imageContentType = data.data.imageType;
      this.postService.updateDoctor(this.doctor);
    });

    modal.present();
  }

}
