import { AddSingleSessionModalComponent } from './add-single-session-modal/add-single-session-modal.component';
import { AddSessionModalComponent } from './add-session-modal/add-session-modal.component';
import { SessionComponent } from './session/session.component';
import { GeneralSettingsComponent } from './general-settings/general-settings.component';
import { AddWorkplaceModalComponent } from './add-workplace-modal/add-workplace-modal.component';
import { AddQualificationModalComponent } from './add-qualification-modal/add-qualification-modal.component';
import { CustomInputComponent } from './../../../shared/custom-input/custom-input.component';
import { ImageSelectorComponent } from './../../../shared/image-selector/image-selector.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular/';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RatingComponent } from 'src/app/shared/rating/rating.component';
import { ProfileQualificationsComponent } from './profile-qualifications/profile-qualifications.component';
import { ProfileWorkplacesComponent } from './profile-workplaces/profile-workplaces.component';
import { NgbDatepicker, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomDatePickerComponent } from 'src/app/shared/custom-date-picker/custom-date-picker.component';
import { PaymentSettingsComponent } from './payment-settings/payment-settings.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedModule,
    NgbModule
 ],
  exports: [
    ProfileDetailsComponent , ProfileQualificationsComponent , ProfileWorkplacesComponent,
    AddQualificationModalComponent , AddWorkplaceModalComponent,
    GeneralSettingsComponent, PaymentSettingsComponent,
    SessionComponent , AddSessionModalComponent,AddSingleSessionModalComponent
  ],
  declarations: [
    ProfileDetailsComponent , ProfileQualificationsComponent , ProfileWorkplacesComponent,
    AddQualificationModalComponent , AddWorkplaceModalComponent,
    GeneralSettingsComponent, PaymentSettingsComponent,
    SessionComponent , AddSessionModalComponent,AddSingleSessionModalComponent
  ],
  entryComponents: [ ImageSelectorComponent , RatingComponent , CustomInputComponent , CustomDatePickerComponent ,
    AddSessionModalComponent,AddSingleSessionModalComponent ]
})
export class ComponentsModule { }
