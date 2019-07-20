import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './tabs/home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'dashboard',
        loadChildren: '../home/pages/dashboard/dashboard.module#DashboardPageModule'
      },
      {
        path: 'appointment',
        loadChildren: '../home/pages/appointment/appointment.module#AppointmentPageModule'
      },

      // Links to Outside Modules
      {
        path: 'profile',
        loadChildren: '../user/pages/profile/profile.module#ProfilePageModule'
      },
    ],
  },

  {
    path: '',
    redirectTo: '/home/dashboard',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
