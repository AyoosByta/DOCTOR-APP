import { Injectable } from '@angular/core';
import { CommandResourceService, QueryResourceService } from 'src/app/api/services';
import { ParamedicalExaminationRequest, ConsultationRequest, PrescriptionRequest } from 'src/app/api/models';
import { File, IWriteOptions } from '@ionic-native/file/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';


@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

  token;

  taskId;

  processInstanceId;

  constructor(
    private commandResourceService: CommandResourceService,
    private queryResourceService: QueryResourceService,
    private file: File,
    private documentViewer: DocumentViewer,
  ) { }


  startConsultation(token, success, error) {
    this.token = token;
    console.log('Getting ProcessInstanceId with token', token);
    this.commandResourceService
      .initiateUsingPOST({
        token
      })
      .subscribe(data => {
        this.processInstanceId = data;
        console.log('Got ProcessInstanceId with token', token + ' ', this.processInstanceId);
        this.queryResourceService
          .getTasksUsingGET({
            processInstanceId: data
          })
          .subscribe(value => {
            this.taskId = value.data[0].id;
            console.log('Got TaskId with processInstanceId', this.processInstanceId + ' ', this.taskId);
            success();
          }, error);
      }, error);
  }


  collectParamedicalInfo(value, success) {
    let status = { paramedRequired: 'no' };
    if (value === true) {
      status.paramedRequired = 'yes';
    }

    return this.commandResourceService.collectInformationsUsingPOST({
      taskId: this.taskId.toString(),
      defaultInfoRequest: status
    }).subscribe((data) => {
      console.log('Collect Informations Using ' + this.taskId, ' ', data);
      success();
    }, err => {

    });
  }

  saveParamedicalInfo(paramedicalInfo: ParamedicalExaminationRequest, success) {
    console.log('Getting New TaskId , Current ' + this.taskId);
    this.queryResourceService.getTasksUsingGET({
      processInstanceId: this.processInstanceId
    })
      .subscribe((data) => {
        this.taskId = data.data[0].id;
        console.log('Got TaskId with processInstanceId', this.processInstanceId + ' ', this.taskId);
        this.commandResourceService
          .collectParamedicalExaminationInformationsUsingPOST({
            taskId: this.taskId.toString(),
            paramedicalExaminationRequest: paramedicalInfo,
          })
          .subscribe(value => {
            success();
          },
            err => {

            });
      });
  }

  saveMedicalSummary(consultationInfo: ConsultationRequest, success) {
    this.queryResourceService.getTasksUsingGET({
      processInstanceId: this.processInstanceId
    })
      .subscribe((data) => {
        this.taskId = data.data[0].id;
        this.commandResourceService.collectConsultationInformationsUsingPOST(
          {
            taskId: this.taskId.toString(),
            consultationRequest: consultationInfo
          }
        )
          .subscribe(data => {
            success();
          });
      });
  }

  savePrescription(prescription: Array<PrescriptionRequest>, success) {
    this.queryResourceService.getTasksUsingGET({ processInstanceId: this.processInstanceId })
      .subscribe(data => {
        this.taskId = data.data[0].id;
        this.commandResourceService.collectPrescriptionInformationsUsingPOST(
          {
            taskId: this.taskId,
            prescriptionRequest: prescription
          })
          .subscribe((data) => {
            success();
            console.log('Completed', data);
          });

      });
  }


  downloadPrescription(fileName , success , error) {

    this.queryResourceService.getPrescriptionAsPDFUsingGET()
      .subscribe((str: any) => {

        console.log(str);

        let blob = str;
        // var blob = new Blob([arrBuffer], { type: 'application/pdf' });

        console.log('Blob**' + blob.length);
        this.file.createFile(this.file.externalCacheDirectory, fileName, true).then(() => {
          console.log('file created' + blob);
          this.file.writeFile(this.file.externalCacheDirectory, fileName, blob, { replace: true })
          .then((value) => {
              console.log('file writed' + value);
              this.documentViewer.viewDocument(this.file.externalCacheDirectory + fileName, 'application/pdf', {});
              success();
            })
            .catch(error);
        })
        .catch(error);

      },
      err => {
        error();
      });
  }
}
