import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss'],
})
export class ConsultationComponent implements OnInit {

  appointment;

  constructor(
    private modalController:ModalController
  ) { }

  ngOnInit() {}

  dismiss(){
    this.modalController.dismiss();
  }

}
