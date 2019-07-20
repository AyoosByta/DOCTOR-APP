import { Component, OnInit } from '@angular/core';
import { ParamedicalExaminationRequest } from 'src/app/api/models';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-paramedical',
  templateUrl: './add-paramedical.component.html',
  styleUrls: ['./add-paramedical.component.scss'],
})
export class AddParamedicalComponent implements OnInit {

  paramedicalInfo: ParamedicalExaminationRequest = {};

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  saveParamedical() {
    this.modalController.dismiss(this.paramedicalInfo);
  }

}
