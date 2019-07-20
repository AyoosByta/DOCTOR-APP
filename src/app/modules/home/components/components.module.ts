import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ConsultationComponent } from './consultation/consultation.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedModule,
    NgbModule
  ],
  declarations: [ConsultationComponent],
  exports: [ConsultationComponent]
})
export class ComponentsModule { }
