import { AddSingleSessionModalComponent } from './../add-single-session-modal/add-single-session-modal.component';
import { ModalController } from '@ionic/angular';
import { WorkPlaceDTO, SessionInfoDTO } from 'src/app/api/models';
import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-add-session-modal',
  templateUrl: './add-session-modal.component.html',
  styleUrls: ['./add-session-modal.component.scss'],
})
export class AddSessionModalComponent implements OnInit {

  monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
  ];

  availabelMonths: string[] = [];


  dayNumber;

  workplace: WorkPlaceDTO;


  mnthList: number[] = [];

  arraySession: SessionInfoDTO[] = [];


  constructor(
    private postService: PostService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.findAvailabelMonths();
  }


  dismiss() {
    this.modalController.dismiss();
  }

  findAvailabelMonths() {
    const mnth = new Date().getMonth();
    for (let i = mnth; i < (mnth + 3); i++ ) {
      this.availabelMonths.push(this.monthNames[i]);
    }
  }

  addToMonths(mnthNumber: never) {
    console.log('clicked' , mnthNumber);
    const index = this.mnthList.indexOf(mnthNumber);
    if (index < 0) {
      this.mnthList.push(mnthNumber);
    } else {
      this.mnthList = this.mnthList.filter((mnth) => {
        if (mnth !== mnthNumber) {
          return mnth;
        }
      });
    }
  }


  async addSession() {

    const modal = await this.modalController.create({
      component: AddSingleSessionModalComponent,
      componentProps: {workplace: this.workplace , dayNumber: this.dayNumber}
    });

    modal.onDidDismiss()
    .then(data => {
      if (data.data !== undefined) {
        console.log('Adding Session' , data.data);
        this.arraySession.push(data.data);
      }
    });

    modal.present();
  }

  saveSession() {
    console.table(this.arraySession);
    if (this.arraySession.length > 0) {
      this.postService.addSessions(this.arraySession, this.mnthList , () => { this.dismiss();

      }, () => {    });
    } else {

      // Add Session first
    }
  }

  removeSession(session) {

  }

  editSession(session) {

  }

}
