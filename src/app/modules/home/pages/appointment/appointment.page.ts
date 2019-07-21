import { Component, OnInit } from '@angular/core';
import { APPOINTMENTS } from 'src/app/core/mocks/appointments.list';
import { Util } from 'src/app/core/util/util';
import { ModalController } from '@ionic/angular';
import { ConsultationComponent } from '../../components/consultation/consultation.component';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.page.html',
  styleUrls: ['./appointment.page.scss'],
})
export class AppointmentPage implements OnInit {

  pendingAppointments: any[] = [];

  completedAppointments: any[] = [];

  currentPage = 'pending';

  constructor(
    private util: Util,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.getPendingAppointments();
    this.getPendingAppointments();
  }

  getPendingAppointments() {
    this.pendingAppointments = APPOINTMENTS;
  }

  getCompletedAppointments() {

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

  segmentChanged(event) {
    this.currentPage = event.detail.value;
  }

}
