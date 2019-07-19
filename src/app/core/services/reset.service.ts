import { GetService } from 'src/app/core/services/get.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class ResetService {

    constructor(private getService: GetService) {
    }

    dataInitialize() {
        this.getService.initDoctor();
        this.getService.initQualifications();
        this.getService.initWorkplaces();
        this.getService.setResetFlag(false);
    }
  }