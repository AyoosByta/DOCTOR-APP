import { ComponentsModule } from './../../components/components.module';
import { GeneralSettingsComponent } from './../../components/general-settings/general-settings.component';
import { PaymentSettingsComponent } from './../../components/payment-settings/payment-settings.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SettingsPage } from './settings.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SettingsPage],
  entryComponents: [GeneralSettingsComponent, PaymentSettingsComponent]
})
export class SettingsPageModule {}
