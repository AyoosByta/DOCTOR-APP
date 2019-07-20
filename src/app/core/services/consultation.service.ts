import { Injectable } from '@angular/core';
import { CommandResourceService, QueryResourceService } from 'src/app/api/services';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

  token;

  taskId;

  processInstanceId;

  constructor(
    private commandResourceService: CommandResourceService,
    private queryResourceService: QueryResourceService
  ) { }


  startConsultation(token) {
    this.token = token;
    console.log('Getting ProcessInstanceId with token', token);
    this.commandResourceService
    .initiateUsingPOST({
      token: token
    })
    .subscribe(data => {
      this.processInstanceId = data;
      console.log('Got ProcessInstanceId with token', token + ' ' , this.processInstanceId);
      this.queryResourceService
        .getTasksUsingGET({
          processInstanceId: data
        })
        .subscribe(value => {
          this.taskId = value.data[0].id;
          console.log('Got TaskId with processInstanceId',this.processInstanceId+' ' , this.taskId);

        });
    });
  }


  collectParamedicalInfo(value) {
    var status = {paramedRequired: 'no'};
    if(value === true) {
      status.paramedRequired = 'yes';
    }
  }
}
