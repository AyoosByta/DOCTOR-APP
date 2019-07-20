import * as tslib_1 from "tslib";
import { KeycloakService } from './keycloak.service';
import { DoctorService } from './doctor.service';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
// TODO: Session GET
var GetService = /** @class */ (function () {
    function GetService(doctorService, keycloakService, storage) {
        var _this = this;
        this.doctorService = doctorService;
        this.keycloakService = keycloakService;
        this.storage = storage;
        this.doctorBehaviour = new BehaviorSubject(this.doctor);
        this.qualifications = [];
        this.qualifcationBehaviour = new BehaviorSubject(this.qualifications);
        this.workplaces = [];
        this.workplaceBehaviour = new BehaviorSubject(this.workplaces);
        this.sessionsMapMap = new Map();
        this.sessionsBehaviour = new BehaviorSubject(this.sessionsMapMap);
        console.log('GetSerice Instance Created');
        this.keycloakService.isAuthenticated().then(function (status) {
            // Sessions Fix providing a default value to the SessionsBehaviour
            _this.sessionsMapMap.set(GetService_1._SESSIONS_KEY, new Map());
            if (status === true) {
                console.log('Status ', status);
                _this.initDoctor(true);
                _this.initQualifications(true);
                _this.initWorkplaces(true);
                _this.initSessions(true);
            }
        });
    }
    GetService_1 = GetService;
    GetService.prototype.initDoctor = function (fromRestAPI) {
        var _this = this;
        var func = function (user) {
            _this.doctorService
                .getDoctorDetails(user.preferred_username)
                .subscribe(function (doctor) {
                _this.doctorBehaviour.next(doctor);
                _this.storage.set(GetService_1._DOCTOR_KEY, doctor);
            });
        };
        if (fromRestAPI !== undefined && fromRestAPI === true) {
            this.keycloakService.getCurrentUserDetails().then(func);
        }
        else {
            this.storage.get(GetService_1._DOCTOR_KEY).then(function (data) {
                if (data == null) {
                    _this.keycloakService.getCurrentUserDetails().then(func);
                }
                else {
                    _this.doctorBehaviour.next(data);
                }
            });
        }
    };
    GetService.prototype.initQualifications = function (fromRestAPI) {
        var _this = this;
        var func = function (user) {
            _this.doctorService
                .getDoctorQualifications(user.preferred_username)
                .subscribe(function (qualifications) {
                _this.qualifcationBehaviour.next(qualifications);
                _this.storage.set(GetService_1._QUALIFICATIONS_KEY, qualifications);
            });
        };
        if (fromRestAPI !== undefined && fromRestAPI === true) {
            this.keycloakService.getCurrentUserDetails().then(func);
        }
        else {
            this.storage.get(GetService_1._QUALIFICATIONS_KEY).then(function (data) {
                if (data == null) {
                    _this.keycloakService.getCurrentUserDetails().then(func);
                }
                else {
                    _this.qualifcationBehaviour.next(data);
                }
            });
        }
    };
    GetService.prototype.initWorkplaces = function (fromRestAPI) {
        var _this = this;
        var func = function (user) {
            _this.doctorService
                .getDoctorWorkplaces(user.preferred_username)
                .subscribe(function (workplaces) {
                _this.workplaceBehaviour.next(workplaces);
                _this.storage.set(GetService_1._WORKPLACES_KEY, workplaces);
            });
        };
        if (fromRestAPI !== undefined && fromRestAPI === true) {
            this.keycloakService.getCurrentUserDetails().then(func);
        }
        else {
            this.storage.get(GetService_1._WORKPLACES_KEY).then(function (data) {
                if (data === null) {
                    _this.keycloakService.getCurrentUserDetails().then(func);
                }
                else {
                    _this.workplaceBehaviour.next(data);
                }
            });
        }
    };
    GetService.prototype.initSessions = function (fromRestAPI) {
        var _this = this;
        var localSessionMap = new Map();
        var localSessionsMapMap = new Map();
        var func = function (user) {
            _this.doctorService
                .getDoctorWorkplaces(user.preferred_username)
                .subscribe(function (workplaces) {
                workplaces.forEach(function (workplace) {
                    _this.doctorService
                        .getDoctorSessions(user.preferred_username, workplace.id)
                        .subscribe(function (sessions) {
                        console.log(sessions);
                        localSessionMap.set(workplace.name, sessions);
                    });
                });
                localSessionsMapMap.set(GetService_1._SESSIONS_KEY, localSessionMap);
                _this.sessionsBehaviour.next(localSessionsMapMap);
            });
        };
        if (fromRestAPI !== undefined && fromRestAPI === true) {
            this.keycloakService.getCurrentUserDetails().then(func);
        }
        else {
            this.storage.get(GetService_1._WORKPLACES_KEY).then(function (data) {
                if (data === null) {
                    _this.keycloakService.getCurrentUserDetails().then(func);
                }
                else {
                    _this.workplaceBehaviour.next(data);
                }
            });
        }
    };
    // Getters
    GetService.prototype.getDoctor = function () {
        return this.doctorBehaviour;
    };
    GetService.prototype.getQualifications = function () {
        return this.qualifcationBehaviour;
    };
    GetService.prototype.getWorkplaces = function () {
        return this.workplaceBehaviour;
    };
    GetService.prototype.getSessions = function () {
        return this.sessionsBehaviour;
    };
    GetService.prototype.getResetFlag = function () {
        return GetService_1.resetflag;
    };
    // Setters
    GetService.prototype.setResetFlag = function (flag) {
        GetService_1.resetflag = flag;
    };
    // Clear All Observables on logout
    // Sets the reset flag
    GetService.prototype.clear = function () {
        this.doctorBehaviour.next(null);
        this.qualifcationBehaviour.next(null);
        this.workplaceBehaviour.next(null);
        GetService_1.resetflag = true;
    };
    var GetService_1;
    GetService._DOCTOR_KEY = 'doctor';
    GetService._QUALIFICATIONS_KEY = 'qualifications';
    GetService._WORKPLACES_KEY = 'workplaces';
    GetService._SESSIONS_KEY = 'sessions';
    GetService.resetflag = false;
    GetService = GetService_1 = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [DoctorService,
            KeycloakService,
            Storage])
    ], GetService);
    return GetService;
}());
export { GetService };
//# sourceMappingURL=get.service.js.map