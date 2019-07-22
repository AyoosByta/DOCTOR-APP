import { ModalController } from '@ionic/angular';
import { SessionInfoDTO } from './../../../../api/models/session-info-dto';
import { Component, OnInit } from '@angular/core';
import { WorkPlaceDTO } from 'src/app/api/models';

@Component({
  selector: 'app-add-single-session-modal',
  templateUrl: './add-single-session-modal.component.html',
  styleUrls: ['./add-single-session-modal.component.scss'],
})
export class AddSingleSessionModalComponent implements OnInit {

  workplace: WorkPlaceDTO;

  session: SessionInfoDTO = {};

  dayNumber;

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {}

  timeStringToFloat(time) {
    const hoursMinutes = time.split(/[.:]/);
    const hours = parseInt(hoursMinutes[0], 10);
    const minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
    return Math.round((hours + minutes / 60));
  }


  addSession() {
    this.session.workPlaceId = this.workplace.id;
    this.session.weekDay = this.dayNumber;
    this.session.fromTime = this.timeStringToFloat(this.session.fromTime);
    this.session.toTime = this.timeStringToFloat(this.session.toTime);
    this.modalController.dismiss(this.session);
  }

}
