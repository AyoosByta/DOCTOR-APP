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

  appointments: any[];
  
  constructor(private util: Util,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.getAppointments();
  }

  getAppointments() {
    this.appointments = APPOINTMENTS;
  }

  async startConsultation(_appointment:any) {
    const modal = await this.modalController.create({
      component: ConsultationComponent,
      componentProps: {appointment: _appointment}
    });

    return await modal.present();  }

}
