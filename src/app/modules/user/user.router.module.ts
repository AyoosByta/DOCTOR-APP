import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: '../user/pages/profile/profile.module#ProfilePageModule'
          },
        ]
      },
      {
        path: 'settings',
        loadChildren: '../user/pages/settings/settings.module#SettingsPageModule' 
      },
      {
        path: 'sessions',
        loadChildren: '../user/pages/sessions/sessions.module#SessionsPageModule' 
      },
      {
        path: '',
        redirectTo: '/user/profile',
        pathMatch: 'full'
      }
    ],
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule {}
