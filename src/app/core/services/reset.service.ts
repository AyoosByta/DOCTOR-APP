import { GetService } from 'src/app/core/services/get.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class ResetService {

    constructor(private getService: GetService) {
    }

    dataInitialize() {
        this.getService.initDoctor(true);
        this.getService.initQualifications(true);
        this.getService.initWorkplaces(true);
        this.getService.setResetFlag(false);
    }
  }