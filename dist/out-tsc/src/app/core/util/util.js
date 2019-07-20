import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
var Util = /** @class */ (function () {
    function Util(loadingController, toastController, navController, routes) {
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.navController = navController;
        this.routes = routes;
    }
    Util.prototype.createLoader = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            spinner: 'bubbles'
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Util.prototype.createToast = function (msg) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            duration: 2000,
                            color: 'dark',
                            position: 'middle',
                            showCloseButton: true,
                            keyboardClose: true,
                            buttons: [
                                {
                                    side: 'start',
                                    icon: 'warning',
                                }
                            ]
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Util.prototype.navigateRoot = function () {
        this.navController.navigateForward('');
    };
    Util.prototype.navigateRegister = function () {
        this.navController.navigateForward('/authentication/register');
    };
    Util.prototype.navigateLogin = function () {
        this.navController.navigateBack('/authentication/login');
    };
    Util.prototype.navigateDashboard = function () {
        this.navController.navigateBack('/home/dashboard');
    };
    Util.prototype.navigateProfile = function () {
        this.navController.navigateForward('/user/profile');
    };
    Util.prototype.navigateAppointments = function () {
        this.navController.navigateForward('/home/appointments');
    };
    Util.prototype.navigateConsultation = function () {
    };
    Util.prototype.navigateSettings = function () {
        this.navController.navigateForward('/user/settings');
    };
    Util.prototype.navigateSessions = function () {
        this.navController.navigateForward('/user/sessions');
    };
    Util = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [LoadingController,
            ToastController,
            NavController,
            Router])
    ], Util);
    return Util;
}());
export { Util };
//# sourceMappingURL=util.js.map