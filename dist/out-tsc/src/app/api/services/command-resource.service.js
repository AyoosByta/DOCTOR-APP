import * as tslib_1 from "tslib";
/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { map as __map, filter as __filter } from 'rxjs/operators';
/**
 * Command Resource
 */
var CommandResourceService = /** @class */ (function (_super) {
    tslib_1.__extends(CommandResourceService, _super);
    function CommandResourceService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * @param params The `CommandResourceService.CollectConsultationInformationsUsingPOSTParams` containing the following parameters:
     *
     * - `taskId`: taskId
     *
     * - `consultationRequest`: consultationRequest
     */
    CommandResourceService.prototype.collectConsultationInformationsUsingPOSTResponse = function (params) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        __body = params.consultationRequest;
        var req = new HttpRequest('POST', this.rootUrl + ("/api/commands/collect-Consultation-Info/" + params.taskId), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param params The `CommandResourceService.CollectConsultationInformationsUsingPOSTParams` containing the following parameters:
     *
     * - `taskId`: taskId
     *
     * - `consultationRequest`: consultationRequest
     */
    CommandResourceService.prototype.collectConsultationInformationsUsingPOST = function (params) {
        return this.collectConsultationInformationsUsingPOSTResponse(params).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @param params The `CommandResourceService.CollectInformationsUsingPOSTParams` containing the following parameters:
     *
     * - `taskId`: taskId
     *
     * - `defaultInfoRequest`: defaultInfoRequest
     */
    CommandResourceService.prototype.collectInformationsUsingPOSTResponse = function (params) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        __body = params.defaultInfoRequest;
        var req = new HttpRequest('POST', this.rootUrl + ("/api/commands/collect-Default-info/" + params.taskId), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param params The `CommandResourceService.CollectInformationsUsingPOSTParams` containing the following parameters:
     *
     * - `taskId`: taskId
     *
     * - `defaultInfoRequest`: defaultInfoRequest
     */
    CommandResourceService.prototype.collectInformationsUsingPOST = function (params) {
        return this.collectInformationsUsingPOSTResponse(params).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @param params The `CommandResourceService.CollectParamedicalExaminationInformationsUsingPOSTParams` containing the following parameters:
     *
     * - `taskId`: taskId
     *
     * - `paramedicalExaminationRequest`: paramedicalExaminationRequest
     */
    CommandResourceService.prototype.collectParamedicalExaminationInformationsUsingPOSTResponse = function (params) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        __body = params.paramedicalExaminationRequest;
        var req = new HttpRequest('POST', this.rootUrl + ("/api/commands/collect-ParamedicalExamination-Info/" + params.taskId), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param params The `CommandResourceService.CollectParamedicalExaminationInformationsUsingPOSTParams` containing the following parameters:
     *
     * - `taskId`: taskId
     *
     * - `paramedicalExaminationRequest`: paramedicalExaminationRequest
     */
    CommandResourceService.prototype.collectParamedicalExaminationInformationsUsingPOST = function (params) {
        return this.collectParamedicalExaminationInformationsUsingPOSTResponse(params).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @param params The `CommandResourceService.CollectPrescriptionInformationsUsingPOSTParams` containing the following parameters:
     *
     * - `taskId`: taskId
     *
     * - `prescriptionRequest`: prescriptionRequest
     */
    CommandResourceService.prototype.collectPrescriptionInformationsUsingPOSTResponse = function (params) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        __body = params.prescriptionRequest;
        var req = new HttpRequest('POST', this.rootUrl + ("/api/commands/collect-Prescription-Info/" + params.taskId), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param params The `CommandResourceService.CollectPrescriptionInformationsUsingPOSTParams` containing the following parameters:
     *
     * - `taskId`: taskId
     *
     * - `prescriptionRequest`: prescriptionRequest
     */
    CommandResourceService.prototype.collectPrescriptionInformationsUsingPOST = function (params) {
        return this.collectPrescriptionInformationsUsingPOSTResponse(params).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @param contactInfoDTO contactInfoDTO
     * @return OK
     */
    CommandResourceService.prototype.createContactInfoUsingPOSTResponse = function (contactInfoDTO) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        __body = contactInfoDTO;
        var req = new HttpRequest('POST', this.rootUrl + "/api/commands/contact-infos", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param contactInfoDTO contactInfoDTO
     * @return OK
     */
    CommandResourceService.prototype.createContactInfoUsingPOST = function (contactInfoDTO) {
        return this.createContactInfoUsingPOSTResponse(contactInfoDTO).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @param contactInfoDTO contactInfoDTO
     * @return OK
     */
    CommandResourceService.prototype.updateContactInfoUsingPUTResponse = function (contactInfoDTO) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        __body = contactInfoDTO;
        var req = new HttpRequest('PUT', this.rootUrl + "/api/commands/contact-infos", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param contactInfoDTO contactInfoDTO
     * @return OK
     */
    CommandResourceService.prototype.updateContactInfoUsingPUT = function (contactInfoDTO) {
        return this.updateContactInfoUsingPUTResponse(contactInfoDTO).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @param id id
     */
    CommandResourceService.prototype.deleteContactInfoUsingDELETEResponse = function (id) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        var req = new HttpRequest('DELETE', this.rootUrl + ("/api/commands/contact-infos/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param id id
     */
    CommandResourceService.prototype.deleteContactInfoUsingDELETE = function (id) {
        return this.deleteContactInfoUsingDELETEResponse(id).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @return OK
     */
    CommandResourceService.prototype.testUsingPOSTResponse = function () {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        var req = new HttpRequest('POST', this.rootUrl + "/api/commands/doc", __body, {
            headers: __headers,
            params: __params,
            responseType: 'text'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @return OK
     */
    CommandResourceService.prototype.testUsingPOST = function () {
        return this.testUsingPOSTResponse().pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @param doctorSettingsDTO doctorSettingsDTO
     * @return OK
     */
    CommandResourceService.prototype.createDoctorSettingUsingPOSTResponse = function (doctorSettingsDTO) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        __body = doctorSettingsDTO;
        var req = new HttpRequest('POST', this.rootUrl + "/api/commands/doctorSettings", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param doctorSettingsDTO doctorSettingsDTO
     * @return OK
     */
    CommandResourceService.prototype.createDoctorSettingUsingPOST = function (doctorSettingsDTO) {
        return this.createDoctorSettingUsingPOSTResponse(doctorSettingsDTO).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @param doctorDTO doctorDTO
     * @return OK
     */
    CommandResourceService.prototype.createDoctorUsingPOSTResponse = function (doctorDTO) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        __body = doctorDTO;
        var req = new HttpRequest('POST', this.rootUrl + "/api/commands/doctors", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param doctorDTO doctorDTO
     * @return OK
     */
    CommandResourceService.prototype.createDoctorUsingPOST = function (doctorDTO) {
        return this.createDoctorUsingPOSTResponse(doctorDTO).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @param doctorDTO doctorDTO
     * @return OK
     */
    CommandResourceService.prototype.updateDoctorUsingPUTResponse = function (doctorDTO) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        __body = doctorDTO;
        var req = new HttpRequest('PUT', this.rootUrl + "/api/commands/doctors", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param doctorDTO doctorDTO
     * @return OK
     */
    CommandResourceService.prototype.updateDoctorUsingPUT = function (doctorDTO) {
        return this.updateDoctorUsingPUTResponse(doctorDTO).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @param medicalSummaryRequest medicalSummaryRequest
     * @return OK
     */
    CommandResourceService.prototype.initiateUsingPOSTResponse = function (medicalSummaryRequest) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        __body = medicalSummaryRequest;
        var req = new HttpRequest('POST', this.rootUrl + "/api/commands/initiate-Consultation", __body, {
            headers: __headers,
            params: __params,
            responseType: 'text'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param medicalSummaryRequest medicalSummaryRequest
     * @return OK
     */
    CommandResourceService.prototype.initiateUsingPOST = function (medicalSummaryRequest) {
        return this.initiateUsingPOSTResponse(medicalSummaryRequest).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @param paymentSettingsDTO paymentSettingsDTO
     * @return OK
     */
    CommandResourceService.prototype.createPaymentSettingUsingPOSTResponse = function (paymentSettingsDTO) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        __body = paymentSettingsDTO;
        var req = new HttpRequest('POST', this.rootUrl + "/api/commands/paymentSettings", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param paymentSettingsDTO paymentSettingsDTO
     * @return OK
     */
    CommandResourceService.prototype.createPaymentSettingUsingPOST = function (paymentSettingsDTO) {
        return this.createPaymentSettingUsingPOSTResponse(paymentSettingsDTO).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @param params The `CommandResourceService.GetProcessAppointmentRequestUsingPOSTParams` containing the following parameters:
     *
     * - `taskId`: taskId
     *
     * - `appointmentConfirmationResponse`: appointmentConfirmationResponse
     *
     * @return OK
     */
    CommandResourceService.prototype.getProcessAppointmentRequestUsingPOSTResponse = function (params) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        __body = params.appointmentConfirmationResponse;
        var req = new HttpRequest('POST', this.rootUrl + ("/api/commands/processAppointmentRequest/" + params.taskId), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param params The `CommandResourceService.GetProcessAppointmentRequestUsingPOSTParams` containing the following parameters:
     *
     * - `taskId`: taskId
     *
     * - `appointmentConfirmationResponse`: appointmentConfirmationResponse
     *
     * @return OK
     */
    CommandResourceService.prototype.getProcessAppointmentRequestUsingPOST = function (params) {
        return this.getProcessAppointmentRequestUsingPOSTResponse(params).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @param qualificationDTO qualificationDTO
     * @return OK
     */
    CommandResourceService.prototype.createQualificationUsingPOSTResponse = function (qualificationDTO) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        __body = qualificationDTO;
        var req = new HttpRequest('POST', this.rootUrl + "/api/commands/qualifications", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param qualificationDTO qualificationDTO
     * @return OK
     */
    CommandResourceService.prototype.createQualificationUsingPOST = function (qualificationDTO) {
        return this.createQualificationUsingPOSTResponse(qualificationDTO).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @param qualificationDTO qualificationDTO
     * @return OK
     */
    CommandResourceService.prototype.updateQualificationUsingPUTResponse = function (qualificationDTO) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        __body = qualificationDTO;
        var req = new HttpRequest('PUT', this.rootUrl + "/api/commands/qualifications", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param qualificationDTO qualificationDTO
     * @return OK
     */
    CommandResourceService.prototype.updateQualificationUsingPUT = function (qualificationDTO) {
        return this.updateQualificationUsingPUTResponse(qualificationDTO).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @param id id
     */
    CommandResourceService.prototype.deleteQualificationUsingDELETEResponse = function (id) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        var req = new HttpRequest('DELETE', this.rootUrl + ("/api/commands/qualifications/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param id id
     */
    CommandResourceService.prototype.deleteQualificationUsingDELETE = function (id) {
        return this.deleteQualificationUsingDELETEResponse(id).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @param params The `CommandResourceService.CreateSessionInfoUsingPOSTParams` containing the following parameters:
     *
     * - `sessionInfoDTO`: sessionInfoDTO
     *
     * - `monthList`: monthList
     *
     * @return OK
     */
    CommandResourceService.prototype.createSessionInfoUsingPOSTResponse = function (params) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        __body = params.sessionInfoDTO;
        (params.monthList || []).forEach(function (val) { if (val != null)
            __params = __params.append('monthList', val.toString()); });
        var req = new HttpRequest('POST', this.rootUrl + "/api/commands/sessionInfo", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param params The `CommandResourceService.CreateSessionInfoUsingPOSTParams` containing the following parameters:
     *
     * - `sessionInfoDTO`: sessionInfoDTO
     *
     * - `monthList`: monthList
     *
     * @return OK
     */
    CommandResourceService.prototype.createSessionInfoUsingPOST = function (params) {
        return this.createSessionInfoUsingPOSTResponse(params).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @param file file
     * @return OK
     */
    CommandResourceService.prototype.uploadPrescriptionUsingPOSTResponse = function (file) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        __headers.append('Content-Type', 'multipart/form-data');
        var __formData = new FormData();
        __body = __formData;
        if (file !== null && typeof file !== "undefined") {
            __formData.append('file', file);
        }
        var req = new HttpRequest('POST', this.rootUrl + "/api/commands/upload-File", __body, {
            headers: __headers,
            params: __params,
            responseType: 'text'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param file file
     * @return OK
     */
    CommandResourceService.prototype.uploadPrescriptionUsingPOST = function (file) {
        return this.uploadPrescriptionUsingPOSTResponse(file).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @param workPlaceDTO workPlaceDTO
     * @return OK
     */
    CommandResourceService.prototype.createWorkPlaceUsingPOSTResponse = function (workPlaceDTO) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        __body = workPlaceDTO;
        var req = new HttpRequest('POST', this.rootUrl + "/api/commands/work-places", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param workPlaceDTO workPlaceDTO
     * @return OK
     */
    CommandResourceService.prototype.createWorkPlaceUsingPOST = function (workPlaceDTO) {
        return this.createWorkPlaceUsingPOSTResponse(workPlaceDTO).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @param workPlaceDTO workPlaceDTO
     * @return OK
     */
    CommandResourceService.prototype.updateWorkPlaceUsingPUTResponse = function (workPlaceDTO) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        __body = workPlaceDTO;
        var req = new HttpRequest('PUT', this.rootUrl + "/api/commands/work-places", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param workPlaceDTO workPlaceDTO
     * @return OK
     */
    CommandResourceService.prototype.updateWorkPlaceUsingPUT = function (workPlaceDTO) {
        return this.updateWorkPlaceUsingPUTResponse(workPlaceDTO).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @param id id
     */
    CommandResourceService.prototype.deleteWorkPlaceUsingDELETEResponse = function (id) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        var req = new HttpRequest('DELETE', this.rootUrl + "/api/commands/work-places", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param id id
     */
    CommandResourceService.prototype.deleteWorkPlaceUsingDELETE = function (id) {
        return this.deleteWorkPlaceUsingDELETEResponse(id).pipe(__map(function (_r) { return _r.body; }));
    };
    CommandResourceService.collectConsultationInformationsUsingPOSTPath = '/api/commands/collect-Consultation-Info/{taskId}';
    CommandResourceService.collectInformationsUsingPOSTPath = '/api/commands/collect-Default-info/{taskId}';
    CommandResourceService.collectParamedicalExaminationInformationsUsingPOSTPath = '/api/commands/collect-ParamedicalExamination-Info/{taskId}';
    CommandResourceService.collectPrescriptionInformationsUsingPOSTPath = '/api/commands/collect-Prescription-Info/{taskId}';
    CommandResourceService.createContactInfoUsingPOSTPath = '/api/commands/contact-infos';
    CommandResourceService.updateContactInfoUsingPUTPath = '/api/commands/contact-infos';
    CommandResourceService.deleteContactInfoUsingDELETEPath = '/api/commands/contact-infos/{id}';
    CommandResourceService.testUsingPOSTPath = '/api/commands/doc';
    CommandResourceService.createDoctorSettingUsingPOSTPath = '/api/commands/doctorSettings';
    CommandResourceService.createDoctorUsingPOSTPath = '/api/commands/doctors';
    CommandResourceService.updateDoctorUsingPUTPath = '/api/commands/doctors';
    CommandResourceService.initiateUsingPOSTPath = '/api/commands/initiate-Consultation';
    CommandResourceService.createPaymentSettingUsingPOSTPath = '/api/commands/paymentSettings';
    CommandResourceService.getProcessAppointmentRequestUsingPOSTPath = '/api/commands/processAppointmentRequest/{taskId}';
    CommandResourceService.createQualificationUsingPOSTPath = '/api/commands/qualifications';
    CommandResourceService.updateQualificationUsingPUTPath = '/api/commands/qualifications';
    CommandResourceService.deleteQualificationUsingDELETEPath = '/api/commands/qualifications/{id}';
    CommandResourceService.createSessionInfoUsingPOSTPath = '/api/commands/sessionInfo';
    CommandResourceService.uploadPrescriptionUsingPOSTPath = '/api/commands/upload-File';
    CommandResourceService.createWorkPlaceUsingPOSTPath = '/api/commands/work-places';
    CommandResourceService.updateWorkPlaceUsingPUTPath = '/api/commands/work-places';
    CommandResourceService.deleteWorkPlaceUsingDELETEPath = '/api/commands/work-places';
    CommandResourceService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root',
        }),
        tslib_1.__metadata("design:paramtypes", [__Configuration,
            HttpClient])
    ], CommandResourceService);
    return CommandResourceService;
}(__BaseService));
export { CommandResourceService };
//# sourceMappingURL=command-resource.service.js.map