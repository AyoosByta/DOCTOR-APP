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


  addSession() {
    this.session.workPlaceId = this.workplace.id;
    this.session.weekDay = this.dayNumber;
    this.modalController.dismiss(this.session);
  }

}
