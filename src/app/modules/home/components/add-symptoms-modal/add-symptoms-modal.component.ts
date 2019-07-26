import { SYMPTOMS } from 'src/app/core/mocks/symptoms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-symptoms-modal',
  templateUrl: './add-symptoms-modal.component.html',
  styleUrls: ['./add-symptoms-modal.component.scss']
})
export class AddSymptomsModalComponent implements OnInit {

  symptoms = SYMPTOMS;

  inputValueSymptoms;

  tmpOptionsSymptoms = [];

  selectedSymptoms = [];

  constructor() {}

  ngOnInit() {}

  selectSymptoms(s) {
    this.selectedSymptoms.push(s);
    // this.tmpOptionsSymptoms = [];
    // this.inputValueSymptoms = '';
  }

  removeSymptoms(s) {
    this.selectedSymptoms = this.selectedSymptoms.filter(val => val !== s);
  }

  findMatching(type) {
    
    let tmpArray = [];

    this.tmpOptionsSymptoms = [];

    tmpArray = this.symptoms;
    if (this.inputValueSymptoms.length != 0) {
      for (const option of tmpArray) {
        if (
          this.inputValueSymptoms
            .substr(0, this.inputValueSymptoms.length)
            .toUpperCase() ===
          option.name.substr(0, this.inputValueSymptoms.length).toUpperCase()
        ) {
          this.tmpOptionsSymptoms.push(option);
        }
      }
    }
  }
}
