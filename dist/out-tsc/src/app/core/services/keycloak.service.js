import * as tslib_1 from "tslib";
import { KeycloakAdminConfig } from './../../configs/keycloak.admin.config';
import { OAuthService } from 'angular-oauth2-oidc';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Util } from '../util/util';
var KeycloakService = /** @class */ (function () {
    function KeycloakService(oauthService, keycloakConfig, storage, util) {
        this.oauthService = oauthService;
        this.keycloakConfig = keycloakConfig;
        this.storage = storage;
        this.util = util;
        this.realm = 'ayoos';
        this.keycloakAdmin = this.keycloakConfig.kcAdminClient;
    }
    KeycloakService.prototype.createAccount = function (user, password, success) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.keycloakConfig.refreshClient().then(function () {
                        _this.keycloakAdmin = _this.keycloakConfig.kcAdminClient;
                        user.realm = _this.realm;
                        user.credentials = [{ type: 'password', value: password }];
                        user.attributes = map;
                        user.enabled = true;
                        console.log(user);
                        return _this.keycloakAdmin.users.create(user)
                            .then(function (res) {
                            console.log('Account Created', res);
                            success();
                            _this.util.navigateDashboard();
                        })
                            .catch(function (err) {
                            console.log(err);
                        });
                    })];
            });
        });
    };
    KeycloakService.prototype.isAuthenticated = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.oauthService.hasValidAccessToken()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    KeycloakService.prototype.authenticate = function (username, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.oauthService.fetchTokenUsingPasswordFlowAndLoadUserProfile(username, password, new HttpHeaders())];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    KeycloakService.prototype.getCurrentUserDetails = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.oauthService.loadUserProfile()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    KeycloakService.prototype.updateCurrentUserDetails = function (keycloakUser) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.keycloakConfig.refreshClient().then(function () {
                            _this.keycloakAdmin.users.update({
                                id: keycloakUser.sub,
                                realm: _this.realm
                            }, {
                                firstName: keycloakUser.name.split(' ')[0],
                                lastName: keycloakUser.name.split(' ')[1],
                                email: keycloakUser.email
                            });
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    KeycloakService.prototype.logout = function () {
        this.oauthService.logOut();
        this.util.navigateLogin();
        this.storage.clear();
    };
    KeycloakService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [OAuthService,
            KeycloakAdminConfig,
            Storage,
            Util])
    ], KeycloakService);
    return KeycloakService;
}());
export { KeycloakService };
//# sourceMappingURL=keycloak.service.js.map