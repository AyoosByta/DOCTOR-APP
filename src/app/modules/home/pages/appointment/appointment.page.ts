import { GetService } from 'src/app/core/services/get.service';
import { Component, OnInit } from '@angular/core';
import { APPOINTMENTS } from 'src/app/core/mocks/appointments.list';
import { Util } from 'src/app/core/util/util';
import { ModalController } from '@ionic/angular';
import { ConsultationComponent } from '../../components/consultation/consultation.component';
import { DoctorSettingsDTO } from 'src/app/api/models';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.page.html',
  styleUrls: ['./appointment.page.scss'],
})
export class AppointmentPage implements OnInit {

  pendingAppointments: any[] = [];

  completedAppointments: any[] = [];

  acceptedAppointments: any[] = [];


  currentPage = 'pending';

  settings: DoctorSettingsDTO = {
    approvalType: ''
  };

  constructor(
    private util: Util,
    private modalController: ModalController,
    private getService: GetService
  ) { }

  ngOnInit() {
    this.getSettings();
  }

  getPendingAppointments() {
    this.pendingAppointments = APPOINTMENTS;
  }

  getAcceptedAppointments() {
    this.acceptedAppointments = APPOINTMENTS;
  }

  getCompletedAppointments() {

  }

  getSettings() {
    this.getService.getDoctorSettings()
    .subscribe(ds => {
      if(ds != undefined) {
        this.settings = ds;
        console.log(ds);
        if(this.settings.approvalType === 'manual') {
          this.currentPage = 'pending';
          this.getPendingAppointments();
        } else {
          this.currentPage = 'accepted';
        }
      }
      this.getAcceptedAppointments();
      this.getCompletedAppointments();
    });
  }

  async startConsultation(pAppointment: any) {
    const modal = await this.modalController.create({
      component: ConsultationComponent,
      componentProps: {appointment: pAppointment}
    });

    modal.onDidDismiss()
    .then(data => {
      if (data.data !== undefined) {
        this.pendingAppointments = this.pendingAppointments.filter(val => val !==  data.data);
        this.completedAppointments.push(data.data);
      }
    });

    return await modal.present();
  }

  viewConsultationHistory(a) {

  }

  acceptAppointment(a) {

  }

  declineAppointment(a) {

  }

  segmentChanged(event) {
    this.currentPage = event.detail.value;
  }

}
