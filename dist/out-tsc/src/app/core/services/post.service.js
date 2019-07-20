import * as tslib_1 from "tslib";
import { GetService } from './get.service';
import { KeycloakService } from './keycloak.service';
import { DoctorService } from './doctor.service';
import { Injectable } from '@angular/core';
// TODO: Session POST/UPDATE
var PostService = /** @class */ (function () {
    function PostService(doctorService, keycloakService, getService) {
        this.doctorService = doctorService;
        this.keycloakService = keycloakService;
        this.getService = getService;
    }
    // Create Methods
    PostService.prototype.addDoctor = function (doctor, password) {
        var _this = this;
        var user = {};
        user.email = doctor.email;
        user.firstName = doctor.firstName.split(' ')[0];
        user.lastName = user.firstName.split(' ')[1];
        user.username = doctor.doctorId;
        return this.keycloakService.createAccount(user, password, function () {
            _this.keycloakService.authenticate(doctor.doctorId, password)
                .then(function (data) {
                return _this.doctorService.createDoctor(doctor).toPromise()
                    .then(function (data) {
                    console.log(data);
                });
            });
        })
            .catch(function (err) { return console.log(err); });
    };
    PostService.prototype.addQualification = function (name, did) {
        var _this = this;
        this.doctorService.createQualification(name, did)
            .subscribe(function (qualificationResult) {
            _this.getService.initQualifications(true);
        });
    };
    PostService.prototype.addWorkplace = function (name, location, locationName, did) {
        var _this = this;
        this.doctorService.createWorkplace(name, location, locationName, did)
            .subscribe(function (workplaceResult) {
            _this.getService.initWorkplaces(true);
        });
    };
    PostService.prototype.addSessions = function (fromTime, toTime, weekday, wid, monthList) {
        var _this = this;
        this.doctorService.createSessions(fromTime, toTime, weekday, wid, monthList)
            .subscribe(function (sessions) {
            _this.getService.initSessions(true);
        });
    };
    // Update Methods
    PostService.prototype.updateDoctor = function (doctor) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.keycloakService.getCurrentUserDetails()
                            .then(function (user) {
                            user.name = doctor.firstName;
                            user.email = doctor.email;
                            return _this.keycloakService.updateCurrentUserDetails(user)
                                .then(function (data) {
                                return _this.doctorService.updateDoctor(doctor)
                                    .subscribe(function (doctorResult) {
                                    _this.getService.initDoctor(true);
                                });
                            });
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PostService.prototype.updateWorkplace = function (workplace) {
        var _this = this;
        this.doctorService.updateWorkplace(workplace)
            .subscribe(function (workplaceResult) {
            _this.getService.initWorkplaces(true);
        });
    };
    //Delete Methods
    PostService.prototype.deleteQualification = function (id) {
        var _this = this;
        this.doctorService.deleteQualification(id)
            .subscribe(function () {
            _this.getService.initQualifications(true);
        });
    };
    PostService.prototype.deleteWorkplace = function (id) {
        var _this = this;
        this.doctorService.deleteWorkplace(id)
            .subscribe(function () {
            _this.getService.initWorkplaces(true);
        });
    };
    PostService._DOCTOR_KEY = 'doctor';
    PostService._QUALIFICATIONS_KEY = 'qualifications';
    PostService._WORKPLACES_KEY = 'workplaces';
    PostService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [DoctorService,
            KeycloakService,
            GetService])
    ], PostService);
    return PostService;
}());
export { PostService };
//# sourceMappingURL=post.service.js.map