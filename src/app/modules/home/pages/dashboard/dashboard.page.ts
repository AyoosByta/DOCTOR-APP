import { GetService } from './../../../../core/services/get.service';
import { Component, OnInit } from '@angular/core';
import { Util } from 'src/app/core/util/util';
import { ResetService } from 'src/app/core/services/reset.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  isReady = false;

  options = [
    {name: 'Sessions',icon: 'clock',route:'session'},
    {name: 'Appointments',icon: 'calendar',route:'appointment'}
  ]

  constructor(
    private util: Util,
    private resetService: ResetService,
    private getService: GetService
  ) { 
    if(this.getService.getResetFlag() === true) {
      this.resetService.dataInitialize();
    }
  }

  ngOnInit() {
  }

  navigateUrl(routeName) {

    switch(routeName) {
      case 'session':
          this.util.navigateSessions();
          break;
      
      case 'appointment':
        this.util.navigateAppointments();
    }
  }
}
