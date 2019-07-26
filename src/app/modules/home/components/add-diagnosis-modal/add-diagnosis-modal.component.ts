import { ModalController } from '@ionic/angular';
import { DIAGNOSIS } from './../../../../core/mocks/diagnosis.mock';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-diagnosis-modal',
  templateUrl: './add-diagnosis-modal.component.html',
  styleUrls: ['./add-diagnosis-modal.component.scss']
})
export class AddDiagnosisModalComponent implements OnInit {

  daignosis = DIAGNOSIS;

  tmpOptionsDiagnosis = [];

  inputValueDiagnosis;

  selectedDiagnosis = [];

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  selectDiagnosis(d) {
    this.selectedDiagnosis.push(d);
    // // this.tmpOptionsDiagnosis = [];
    // this.inputValueDiagnosis = '';
  }

  removeDiagnosis(d) {
    this.selectedDiagnosis = this.selectedDiagnosis.filter(val => val != d);
  }

  findMatching(type) {
    let tmpArray = [];

    this.tmpOptionsDiagnosis = [];

    tmpArray = this.daignosis;
    if (this.inputValueDiagnosis.length !== 0) {
      for (const option of tmpArray) {
        if (
          this.inputValueDiagnosis
            .substr(0, this.inputValueDiagnosis.length)
            .toUpperCase() ===
          option.name.substr(0, this.inputValueDiagnosis.length).toUpperCase()
        ) {
          this.tmpOptionsDiagnosis.push(option);
        }
      }
    }
  }

  save() {
    this.modalController.dismiss(this.selectedDiagnosis);
  }

  dismiss() {
    this.modalController.dismiss();
  }
}
