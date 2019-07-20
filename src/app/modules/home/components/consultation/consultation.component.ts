import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConsultationService } from 'src/app/core/services/consultation.service';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss'],
})
export class ConsultationComponent implements OnInit {

  appointment;

  constructor(
    private modalController:ModalController,
    private  consultationService: ConsultationService
  ) { }

  ngOnInit() {}

  dismiss(){
    this.modalController.dismiss();
  }

  startConsultation() {
    this.consultationService.startConsultation(this.appointment.token);
  }

}
