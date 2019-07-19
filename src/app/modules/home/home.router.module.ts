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
        children: [
          {
            path: '',
            loadChildren: '../home/pages/dashboard/dashboard.module#DashboardPageModule'
          }
        ]
      },

      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: '../user/pages/profile/profile.module#ProfilePageModule'
          }
        ]
      },
      {
        path: 'appointments',
        children: [
          {
            path: '',
            loadChildren: '../user/pages/profile/profile.module#ProfilePageModule'
          }
        ]
      }
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
