import { DAY_FULL_NAME } from './../../../../core/mocks/day.list';
import { AddSessionModalComponent } from './../add-session-modal/add-session-modal.component';
import { ModalController } from '@ionic/angular';
import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  OnChanges
} from '@angular/core';
import { WorkPlaceDTO, SessionInfoDTO } from 'src/app/api/models';
import { DAY } from 'src/app/core/mocks/day.list';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit, OnChanges {
  @Input() workplace: WorkPlaceDTO;
  @Input() sessions: SessionInfoDTO[] = [];

  currentDayListSessions: SessionInfoDTO[] = [];
  currentDay = '';
  currentDayFullName = '';
  dayNames: string[] = DAY;

  constructor(
    private modalController: ModalController
  ) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    this.showSessionForDay('Sun');
  }

  showSessionForDay(day: string) {
    this.currentDayListSessions = [];
    this.currentDay = day;
    this.currentDayFullName = DAY_FULL_NAME[DAY.indexOf(day)];
    const dayNumber = this.dayNames.indexOf(day) + 1;
    if(this.sessions !== undefined) {
      this.sessions.forEach(session => {
        if (session.weekDay === dayNumber) {
          this.currentDayListSessions.push(session);
        }
      });
    }
   }

  async addSessionsModal() {
    const modal = await this.modalController.create({
      component: AddSessionModalComponent,
      componentProps: {}
    });
    modal.present();
  }
}
