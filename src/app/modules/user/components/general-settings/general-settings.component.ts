import { PostService } from 'src/app/core/services/post.service';
import { Util } from 'src/app/core/util/util';
import { DoctorSettingsDTO } from './../../../../api/models/doctor-settings-dto';
import { GetService } from 'src/app/core/services/get.service';
import { CommandResourceService } from 'src/app/api/services';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-settings',
  templateUrl: './general-settings.component.html',
  styleUrls: ['./general-settings.component.scss'],
})
export class GeneralSettingsComponent implements OnInit {

  doctorSettings: DoctorSettingsDTO = {};

  constructor(
    private modalController: ModalController,
    private getService: GetService,
    private postService: PostService,
    private util: Util
  ) { }

  ngOnInit() {
    this.getDoctorSettings();
  }

  dismiss() {
    this.modalController.dismiss();
  }

  updateSettngs() {
    this.util.createLoader()
    .then(loader => {
      loader.present();
      this.postService.updateDoctorSettings(this.doctorSettings , ()=>{
        loader.dismiss();
      });
    });
  }

  getDoctorSettings() {
    this.util.createLoader()
    .then(loader => {
      loader.present();

      this.getService.getDoctorSettings()
      .subscribe(ds => {
        this.doctorSettings = ds;
        loader.dismiss();
      },
      err=>{
        loader.dismiss();
      });  
    });
  }

}
