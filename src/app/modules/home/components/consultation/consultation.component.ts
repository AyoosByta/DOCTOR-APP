import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { ConsultationService } from 'src/app/core/services/consultation.service';
import { AddParamedicalComponent } from '../add-paramedical/add-paramedical.component';
import { AddMedicalSummaryComponent } from '../add-medical-summary/add-medical-summary.component';
import { PrescriptionListComponent } from '../prescription-list/prescription-list.component';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss'],
})
export class ConsultationComponent implements OnInit {

  status = false;

  appointment;

  constructor(
    private modalController:ModalController,
    private  consultationService: ConsultationService,
    private alertController: AlertController
  ) { }

  ngOnInit() {}

  dismiss(){
    this.modalController.dismiss();
  }

  startConsultation() {
    this.consultationService.startConsultation(this.appointment.token,
    ()=>{
      this.status = true;
      this.showAlert();
    });
  }

  async showAlert() {
    const alert = await this.alertController
    .create({
      header: 'Would You Like to Collect Paramedical Information',
      buttons: [
        {
          text: 'Skip',
          role: 'cancel',
          cssClass: 'secondary',
          handler: ()=>{
            this.consultationService.collectParamedicalInfo(false,()=>{});
            }
          },
          {
            text: 'Yes',
            handler:()=>{
              this.consultationService.collectParamedicalInfo(true , ()=>{
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
    })

    modal.onDidDismiss()
    .then(data => {
      if(data.data != undefined) {
        console.log('Saving Paramedical Info' , data.data)
        this.consultationService.saveParamedicalInfo(data.data , ()=>{
          this.showAddMedicalSummary();
        })  
      }
    })
    modal.present();
  }

  async showAddMedicalSummary() {
    const modal = await this.modalController.create({
      component: AddMedicalSummaryComponent
    })

    modal.onDidDismiss()
    .then(data => {
      if(data.data != undefined) {
        console.log('Saving Medical Summary' , data.data);
        this.consultationService.saveMedicalSummary(data.data, ()=>{
          this.showPrescription();
        })
      }
    })
    modal.present();
  }

  async showPrescription() {
    const modal = await this.modalController.create({
      component: PrescriptionListComponent
    })
    modal.onDidDismiss()
    .then(data => {
      if(data.data != undefined) {
        console.log('Saving Prescription' , data.data);
        this.consultationService.savePrescription(data.data , ()=>{

        });
      }
    })
    modal.present();
  }


}
