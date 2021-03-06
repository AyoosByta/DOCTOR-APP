import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { ConsultationService } from 'src/app/core/services/consultation.service';
import { AddParamedicalComponent } from '../add-paramedical/add-paramedical.component';
import { AddMedicalSummaryComponent } from '../add-medical-summary/add-medical-summary.component';
import { PrescriptionListComponent } from '../prescription-list/prescription-list.component';
import { Util } from 'src/app/core/util/util';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {
  status = null;

  appointment;

  constructor(
    private modalController: ModalController,
    private consultationService: ConsultationService,
    private alertController: AlertController,
    private util: Util
  ) {}

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss();
  }

  startConsultation() {
    this.util.createLoader().then(loader => {
      loader.present();
      this.consultationService.startConsultation(
        this.appointment.token,
        () => {
          loader.dismiss();
          this.status = 'waiting';
          this.showAlert();
        },
        () => {
          loader.dismiss();
          alert("Some Error Occured")
        }
      );
    });
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header:'Collect Paramedical Information',
      message: 'Would You Like to Collect Paramedical Information',
      buttons: [
        {
          text: 'Skip',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.consultationService.collectParamedicalInfo(false, () => {
              this.showAddMedicalSummary();
            });
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.consultationService.collectParamedicalInfo(true, () => {
              this.showAddParamedical();
            });
          }
        }
      ]
    });
    await alert.present();
    return alert;
  }

  async showAddParamedical() {
    const modal = await this.modalController.create({
      component: AddParamedicalComponent
    });

    modal.onDidDismiss().then(data => {
      if (data.data !== undefined) {
        console.log('Saving Paramedical Info', data.data);
        this.consultationService.saveParamedicalInfo(data.data, () => {
          this.showAddMedicalSummary();
        });
      } else {
        this.status = 'canceled';
      }
    });
    modal.present();
  }

  async showAddMedicalSummary() {
    const modal = await this.modalController.create({
      component: AddMedicalSummaryComponent
    });

    modal.onDidDismiss().then(data => {
      if (data.data !== undefined) {
        console.log('Saving Medical Summary', data.data);
        this.consultationService.saveMedicalSummary(data.data, () => {
          this.showPrescription();
        });
      } else {
        this.status = 'canceled';
      }
    });
    modal.present();
  }

  async showPrescription() {
    const modal = await this.modalController.create({
      component: PrescriptionListComponent
    });

    modal.onDidDismiss().then(data => {
      if (data.data !== undefined) {
        console.log('Saving Prescription', data.data);
        this.consultationService.savePrescription(data.data, () => {
          this.status = 'completed';
        });
      } else {
        this.status = 'canceled';
      }
    });
    modal.present();
  }

  completedConsultation() {
    this.modalController.dismiss(this.appointment);
  }

  downloadPrescription() {

    this.util.createLoader()
    .then(loader => {
      loader.present();
      var fileName =  this.appointment.name + this.appointment.token;
      this.consultationService.downloadPrescription(fileName , () => {
        loader.dismiss();
        this.completedConsultation();
      }, () => {
        loader.dismiss();
        this.completedConsultation();
        alert('Unable tp Download PDF');
      });
    });
  }
}
