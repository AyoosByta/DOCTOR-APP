import { AddWorkplaceModalComponent } from './../../components/add-workplace-modal/add-workplace-modal.component';
import { SessionComponent } from './../../components/session/session.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SessionsPage } from './sessions.page';
import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: SessionsPage
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
  declarations: [SessionsPage],
  entryComponents: [SessionComponent,AddWorkplaceModalComponent]
})
export class SessionsPageModule {}
