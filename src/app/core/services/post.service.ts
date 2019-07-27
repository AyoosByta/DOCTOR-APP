import { DoctorSettingsDTO } from './../../api/models/doctor-settings-dto';
import { OAuthService } from 'angular-oauth2-oidc';
import UserRepresentation from 'keycloak-admin/lib/defs/userRepresentation';
import { GetService } from './get.service';
import { DoctorDTO, WorkPlaceDTO, SessionInfoDTO, PaymentSettingsDTO } from 'src/app/api/models';
import { KeycloakService } from './keycloak.service';
import { DoctorService } from './doctor.service';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

// TODO: Session POST/UPDATE

@Injectable({
  providedIn: 'root'
})
export class PostService {

  static _DOCTOR_KEY = 'doctor';
  static _QUALIFICATIONS_KEY = 'qualifications';
  static _WORKPLACES_KEY = 'workplaces';

  constructor(
    private doctorService: DoctorService,
    private keycloakService: KeycloakService,
    private getService: GetService,
  ) { }

  // Create Methods

  public addDoctor(doctor: DoctorDTO , password , success, error) {
    let user: UserRepresentation = {};
    user.email = doctor.email;
    user.firstName = doctor.firstName.split(' ')[0];
    user.lastName = user.firstName.split(' ')[1];
    user.username = doctor.doctorId;
    return this.keycloakService.createAccount(user, password,
      ()=>{
        this.keycloakService.authenticate(doctor.doctorId , password)
        .then(data => {
          return this.doctorService.createDoctor(doctor).toPromise()
          .then(data => {
            success();
            console.log(data);
          })
          .catch(err =>{
            this.keycloakService.logout(false);
            error();
          });
        });
      },error)
    .catch(()=>{error();});
  }

  public addQualification(name: string , did: number) {
    this.doctorService.createQualification(name , did)
    .subscribe(qualificationResult => {
      this.getService.initQualifications(true);
    });
  }

  public addWorkplace(name: string , location: string , locationName: string , did: number) {
    this.doctorService.createWorkplace(name , location , locationName , did)
    .subscribe(workplaceResult => {
      this.getService.initWorkplaces(true);
    });
  }


  public addSessions(sessions: SessionInfoDTO[] , mnthList: number[] , success , error) {
    this.doctorService.createSession(sessions , mnthList , ()=>{
      this.getService.initSessions(true);
      success();
    },error);
  }

  // Update Methods

  public async updateDoctor(doctor: DoctorDTO) {
    return await this.keycloakService.getCurrentUserDetails()
    .then((user: any) => {
      user.name = doctor.firstName;
      user.email = doctor.email;
      return this.keycloakService.updateCurrentUserDetails(user)
      .then(data => {
        return this.doctorService.updateDoctor(doctor)
        .subscribe(doctorResult => {
          this.getService.initDoctor(true);
        });
      });
    });
  }

  public updateWorkplace(workplace: WorkPlaceDTO) {
    this.doctorService.updateWorkplace(workplace)
    .subscribe(workplaceResult => {
      this.getService.initWorkplaces(true);
    });
  }


  public updateDoctorSettings(doctorSettings: DoctorSettingsDTO , success) {
    this.doctorService.updateDoctorSettings(doctorSettings)
    .subscribe(result=> {
      success();
      this.getService.initDoctorSettings(true);
    });
  }

  public updatePaymentSettings(paymentSettings: PaymentSettingsDTO , success) {
    this.doctorService.updatePaymentSettings(paymentSettings)
    .subscribe(result=> {
      success();
      this.getService.initPaymentSettings(true);
    });
  }

  //Delete Methods

  public deleteQualification(id: number) {
    this.doctorService.deleteQualification(id)
    .subscribe(() => {
      this.getService.initQualifications(true);
    })
  }

  public deleteWorkplace(id) {
    this.doctorService.deleteWorkplace(id)
    .subscribe(() => {
      this.getService.initWorkplaces(true);
    })
  }


}
