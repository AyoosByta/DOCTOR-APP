import { DoctorDTO } from 'src/app/api/models';
import { Component, OnInit, Input } from '@angular/core';
import { Util } from '../util/util';
import { GetService } from '../services/get.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  doctor: DoctorDTO;

  constructor(
    private util: Util,
    private getService: GetService
  ) { }

  ngOnInit() {
    this.getDoctor();
  }

  profilePage() {
    this.util.navigateProfile();
  }

  settingsPage() {
    this.util.navigateSettings();
  }

  getDoctor() {
    this.util.createLoader()
    .then(loading => {
      loading.present();
      this.getService.getDoctor()
      .subscribe(doctor => {
        this.doctor = doctor;
        loading.dismiss();
      });
    })
    .catch(err => {
      console.log(err);
    })
  }
}
