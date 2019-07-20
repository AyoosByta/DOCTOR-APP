import { Component, OnInit } from '@angular/core';
import { DIAGNOSIS } from 'src/app/core/mocks/diagnosis.mock';
import { SYMPTOMS } from 'src/app/core/mocks/symptoms';
import { ConsultationRequest } from 'src/app/api/models';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-medical-summary',
  templateUrl: './add-medical-summary.component.html',
  styleUrls: ['./add-medical-summary.component.scss'],
})
export class AddMedicalSummaryComponent implements OnInit {

  daignosis = DIAGNOSIS;

  symptoms = SYMPTOMS;

  tmpOptionsDiagnosis = [];

  tmpOptionsSymptoms = [];

  inputValueDiagnosis;

  inputValueSymptoms;

  selectedDiagnosis = [];

  selectedSymptoms = [];

  consultationInfo: ConsultationRequest = {};

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  saveMedicalSummary() {

    var date = new Date();
    this.consultationInfo.evaluation = this.selectedDiagnosis;
    this.consultationInfo.symptom = this.selectedSymptoms;
    this.consultationInfo.examinationRequired = 'no';
    this.consultationInfo.date =
     date.getMonth() + '-' + date.getUTCDay() + '-' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes();
    this.modalController.dismiss(this.consultationInfo);
  }

  findMatching(type) {

    let tmpArray = [];

    this.tmpOptionsDiagnosis = [];

    switch(type) {
      case 'diagnosis': tmpArray = this.daignosis;
      if(this.inputValueDiagnosis.length != 0) {
        for(let option of tmpArray) {
          if(this.inputValueDiagnosis.substr(0 , this.inputValueDiagnosis.length).toUpperCase() === option.name.substr(0,this.inputValueDiagnosis.length).toUpperCase()) {
            this.tmpOptionsDiagnosis.push(option);
          }
        }  
      }break;
      case 'symptoms': tmpArray = this.symptoms;
      if(this.inputValueSymptoms.length != 0) {
        for(let option of tmpArray) {
          if(this.inputValueSymptoms.substr(0 , this.inputValueSymptoms.length).toUpperCase() === option.name.substr(0,this.inputValueSymptoms.length).toUpperCase()) {
            this.tmpOptionsSymptoms.push(option);
          }
        }  
      }break;
    }
    
  }

  selectDiagnosis(d) {
    this.selectedDiagnosis.push(d);
    this.tmpOptionsDiagnosis = [];
    this.inputValueDiagnosis = '';
  }

  selectSymptoms(s) {
    this.selectedSymptoms.push(s);
    this.tmpOptionsSymptoms = [];
    this.inputValueSymptoms = '';
  }
}
