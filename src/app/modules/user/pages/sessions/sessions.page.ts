import { AddWorkplaceModalComponent } from './../../components/add-workplace-modal/add-workplace-modal.component';
import { ModalController } from '@ionic/angular';
import { GetService } from 'src/app/core/services/get.service';
import { Component, OnInit } from '@angular/core';
import { SessionInfoDTO, WorkPlaceDTO } from 'src/app/api/models';
import { Util } from 'src/app/core/util/util';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.page.html',
  styleUrls: ['./sessions.page.scss']
})
export class SessionsPage implements OnInit {

  sessionsMap: Map<string, SessionInfoDTO[]> = new Map();

  workplaces: WorkPlaceDTO[] = [];

  isReady = false;

  constructor(
    private getService: GetService,
    private util: Util,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.getWorkplaces();
    this.getSessions();
  }

  getWorkplaces() {
    this.getService.getWorkplaces().subscribe(workplaces => {
      this.workplaces = workplaces;
      this.isReady = true;
    });
  }

  getSessions() {
    this.getService.getSessions().subscribe(sessionsMap => {
      console.log('Got Sessions');
      if (sessionsMap.get('sessions') !== undefined) {
      this.sessionsMap = sessionsMap.get('sessions');
      }
    });
  }


  async addWorkplaceModal() {
    const modal = await this.modalController.create({
      component: AddWorkplaceModalComponent,
      // componentProps: { exclude: this.exclude , did: this.doctor.id}
    });
    modal.present();
  }

  // Navigations

  navigateProfile() {
    this.util.navigateProfile();
  }
}
