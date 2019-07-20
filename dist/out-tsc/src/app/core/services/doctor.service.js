import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { QueryResourceService, CommandResourceService } from 'src/app/api/services';
// TODO: Session Create/Retrieve/GET
var DoctorService = /** @class */ (function () {
    function DoctorService(queryResourceService, commandResourceService) {
        this.queryResourceService = queryResourceService;
        this.commandResourceService = commandResourceService;
    }
    // Create Methods
    DoctorService.prototype.createDoctor = function (doctor) {
        return this.commandResourceService.createDoctorUsingPOST(doctor);
    };
    DoctorService.prototype.createQualification = function (name, did) {
        var qualification = {};
        qualification.doctorId = did;
        qualification.qualification = name;
        return this.commandResourceService.createQualificationUsingPOST(qualification);
    };
    DoctorService.prototype.createWorkplace = function (name, location, locationName, did) {
        var workplace = {};
        workplace.doctorId = did;
        workplace.name = name;
        workplace.locationName = locationName;
        workplace.location = location;
        return this.commandResourceService.createWorkPlaceUsingPOST(workplace);
    };
    DoctorService.prototype.createSessions = function (fromTime, toTime, weekday, wid, monthList) {
        var sessionInfo = {};
        sessionInfo.fromTime = fromTime;
        sessionInfo.toTime = toTime;
        sessionInfo.weekDay = weekday;
        sessionInfo.workPlaceId = wid;
        return this.commandResourceService.createSessionInfoUsingPOST({
            monthList: [1, 2, 3],
            sessionInfoDTO: [sessionInfo]
        });
    };
    // Update methods
    DoctorService.prototype.updateDoctor = function (doctor) {
        return this.commandResourceService.updateDoctorUsingPUT(doctor);
    };
    DoctorService.prototype.updateWorkplace = function (workplace) {
        return this.commandResourceService.updateWorkPlaceUsingPUT(workplace);
    };
    // Delete Methods
    DoctorService.prototype.deleteQualification = function (id) {
        return this.commandResourceService.deleteQualificationUsingDELETE(id);
    };
    DoctorService.prototype.deleteWorkplace = function (id) {
        return this.commandResourceService.deleteWorkPlaceUsingDELETE(id);
    };
    // Get Methods
    DoctorService.prototype.getDoctorDetails = function (username) {
        return this.queryResourceService.findDoctorUsingGET(username);
    };
    DoctorService.prototype.getDoctorQualifications = function (username) {
        return this.queryResourceService.findAllQualificationUsingGET({
            searchTerm: username
        });
    };
    DoctorService.prototype.getDoctorWorkplaces = function (username) {
        return this.queryResourceService.findWorkPlaceUsingGET({
            searchTerm: username
        });
    };
    DoctorService.prototype.getDoctorSessions = function (username, wid) {
        return this.queryResourceService.findAllSesionInfoByDoctorsWorkPlaceUsingGET({
            doctorId: username,
            workPlaceId: wid
        });
    };
    DoctorService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [QueryResourceService,
            CommandResourceService])
    ], DoctorService);
    return DoctorService;
}());
export { DoctorService };
//# sourceMappingURL=doctor.service.js.map