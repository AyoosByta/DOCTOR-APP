import { DoctorSettingsDTO } from './../../api/models/doctor-settings-dto';
import { QualificationDTO } from './../../api/models/qualification-dto';
import { WorkPlaceDTO, SessionInfoDTO, PaymentSettingsDTO } from 'src/app/api/models';
import { DoctorDTO } from './../../api/models/doctor-dto';
import { Injectable } from '@angular/core';
import { QueryResourceService , CommandResourceService} from 'src/app/api/services';

// TODO: Session Create/Retrieve/GET

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  constructor(
    private queryResourceService: QueryResourceService,
    private commandResourceService: CommandResourceService
  ) {}

  // Create Methods

  createDoctor(doctor: DoctorDTO) {
    return this.commandResourceService.createDoctorUsingPOST(doctor);
  }

  createQualification(name, did) {
    const qualification: QualificationDTO = {};
    qualification.doctorId = did;
    qualification.qualification = name;
    return this.commandResourceService.createQualificationUsingPOST(
      qualification
    );
  }

  createWorkplace(name, location, locationName, did) {
    const workplace: WorkPlaceDTO = {};
    workplace.doctorId = did;
    workplace.name = name;
    workplace.locationName = locationName;
    workplace.location = location;
    return this.commandResourceService.createWorkPlaceUsingPOST(workplace);
  }

  createSession(sessions: SessionInfoDTO[] , mnth: number[] , success , error) {
    this.commandResourceService.createSessionInfoUsingPOST({
          monthList: mnth,
          sessionInfoDTO: sessions
    }).subscribe(data => {
      success();
    },err=>{
      error();
    });
  }

  // Update methods

  updateDoctor(doctor: DoctorDTO) {
    return this.commandResourceService.updateDoctorUsingPUT(doctor);
  }

  updateWorkplace(workplace: WorkPlaceDTO) {
    return this.commandResourceService.updateWorkPlaceUsingPUT(workplace);
  }

  updateDoctorSettings(doctorSettingsDTO: DoctorSettingsDTO) {
    return this.commandResourceService.updateDoctorSettingUsingPUT(doctorSettingsDTO);
  }

  updatePaymentSettings(paymentSettings: PaymentSettingsDTO) {
    return this.commandResourceService.updatePaymentSettingUsingPUT(paymentSettings);
  }

  // Delete Methods

  deleteQualification(id) {
    return this.commandResourceService.deleteQualificationUsingDELETE(id);
  }

  deleteWorkplace(id) {
    return this.commandResourceService.deleteWorkPlaceUsingDELETE(id);
  }

  // Get Methods

  getDoctorDetails(username: string) {
    return this.queryResourceService.findDoctorUsingGET(username);
  }

  getDoctorQualifications(username: string) {
    return this.queryResourceService.findAllQualificationUsingGET({
      searchTerm: username
    });
  }

  getDoctorWorkplaces(username: string) {
    return this.queryResourceService.findWorkPlaceUsingGET({
      searchTerm: username
    });
  }

  getDoctorSessions(username: string , wid: number , pageNumber) {
    return this.queryResourceService.findAllSesionInfoByDoctorsWorkPlaceUsingGET({
      doctorId: username,
      workPlaceId: wid,
      page:pageNumber
    });
  }

  getDoctorSettings(uid: number) {
    return this.queryResourceService.findDoctorSettingsUsingGET(uid);
  }

  getPaymentSettings(uid: number) {
    return this.queryResourceService.findPaymentSettingsUsingGET(uid);
  }
}
