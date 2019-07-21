import { Component, OnInit } from '@angular/core';
import { PrescriptionRequest } from 'src/app/api/models';
import { ModalController } from '@ionic/angular';
import { AddPrescriptionComponent } from '../add-prescription/add-prescription.component';

@Component({
  selector: 'app-prescription-list',
  templateUrl: './prescription-list.component.html',
  styleUrls: ['./prescription-list.component.scss'],
})
export class PrescriptionListComponent implements OnInit {

  prescriptions: PrescriptionRequest[] = [];

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() { }


  async addPrescription() {
    const modal = await this.modalController.create({
      component: AddPrescriptionComponent
    })
    modal.onDidDismiss()
      .then(data => {
        if (data.data != undefined) {
          this.prescriptions.push(data.data);
        }
      });

    modal.present();
  }

  removePrescription(p) {
    this.prescriptions = this.prescriptions.filter(val => val != p);
  }

  async editPrescription(p) {
    const modal = await this.modalController.create({
      component: AddPrescriptionComponent,
      componentProps: { prescription: p }
    })
    modal.onDidDismiss()
      .then(data => {
        if (data.data != undefined) {
          this.prescriptions = this.prescriptions.filter(val => val != p);
          this.prescriptions.push(data.data);
        }
      });

    modal.present();
  }

  savePrescription() {
    this.modalController.dismiss(this.prescriptions)
  }

  dismiss() {
    this.modalController.dismiss();
  }
}
