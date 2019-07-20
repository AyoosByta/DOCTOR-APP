import * as tslib_1 from "tslib";
import { KeycloakService } from './../../../../core/services/keycloak.service';
import { Component } from '@angular/core';
import { Util } from 'src/app/core/util/util';
import { GetService } from 'src/app/core/services/get.service';
var LoginPage = /** @class */ (function () {
    function LoginPage(keycloakService, util, getService) {
        this.keycloakService = keycloakService;
        this.util = util;
        this.getService = getService;
    }
    LoginPage_1 = LoginPage;
    LoginPage.prototype.ngOnInit = function () {
        this.getService.setResetFlag(true);
        this.isAuthenticated();
    };
    LoginPage.prototype.isAuthenticated = function () {
        var _this = this;
        this.util.createLoader().then(function (loading) {
            loading.present();
            _this.keycloakService
                .isAuthenticated()
                .then(function (status) {
                if (status == true) {
                    loading.dismiss();
                    _this.util.navigateRoot();
                }
                loading.dismiss();
            })
                .catch(function (err) {
                loading.dismiss();
            });
        });
    };
    LoginPage.prototype.authenticate = function () {
        var _this = this;
        this.util.createLoader().then(function (loading) {
            loading.present();
            _this.keycloakService
                .authenticate(_this.username, _this.password)
                .then(function (data) {
                loading.dismiss();
                _this.util.navigateRoot();
            })
                .catch(function (err) {
                console.error(err);
                _this.util.createToast(LoginPage_1._INVALID_PASSWORD_USERNAME);
                loading.dismiss();
            });
        });
    };
    LoginPage.prototype.registerPage = function () {
        this.util.navigateRegister();
    };
    var LoginPage_1;
    LoginPage._INVALID_PASSWORD_USERNAME = 'Invalid Username Or Password';
    LoginPage = LoginPage_1 = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [KeycloakService, Util,
            GetService])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map