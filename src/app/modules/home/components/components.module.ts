import { AddSymptomsModalComponent } from './add-symptoms-modal/add-symptoms-modal.component';
import { AddDiagnosisModalComponent } from './add-diagnosis-modal/add-diagnosis-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ConsultationComponent } from './consultation/consultation.component';
import { AddParamedicalComponent } from './add-paramedical/add-paramedical.component';
import { AddMedicalSummaryComponent } from './add-medical-summary/add-medical-summary.component';
import { PrescriptionListComponent } from './prescription-list/prescription-list.component';
import { AddPrescriptionComponent } from './add-prescription/add-prescription.component';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, SharedModule, NgbModule],
  declarations: [
    ConsultationComponent,
    AddParamedicalComponent,
    AddMedicalSummaryComponent,
    PrescriptionListComponent,
    AddPrescriptionComponent,
    AddDiagnosisModalComponent,
    AddSymptomsModalComponent
  ],
  exports: [
    ConsultationComponent,
    AddParamedicalComponent,
    AddMedicalSummaryComponent,
    PrescriptionListComponent,
    AddPrescriptionComponent,
    AddSymptomsModalComponent
  ],
  entryComponents: [
    AddParamedicalComponent,
    AddMedicalSummaryComponent,
    PrescriptionListComponent,
    AddPrescriptionComponent,
    AddDiagnosisModalComponent,
    AddSymptomsModalComponent
  ]
})
export class ComponentsModule {}
