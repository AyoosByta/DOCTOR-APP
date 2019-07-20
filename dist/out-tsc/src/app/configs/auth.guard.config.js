import * as tslib_1 from "tslib";
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { Injectable } from '@angular/core';
export var authConfig = {
    issuer: 'http://35.196.86.249:8080/auth/realms/ayoos',
    redirectUri: window.location.origin,
    clientId: 'account',
    scope: 'openid profile email voucher offline_access',
    dummyClientSecret: '622ccedd-b819-4512-8e43-ee9837088a48',
    tokenEndpoint: 'http://35.196.86.249:8080/auth/realms/ayoos/protocol/openid-connect/token',
    userinfoEndpoint: 'http://35.196.86.249:8080/auth/realms/ayoos/protocol/openid-connect/userinfo',
    oidc: false,
    requireHttps: false
};
var AuthGuardConfig = /** @class */ (function () {
    function AuthGuardConfig(oauthService) {
        this.oauthService = oauthService;
        this.configureWithNewConfigApi();
    }
    AuthGuardConfig.prototype.configureWithNewConfigApi = function () {
        this.oauthService.configure(authConfig);
        this.oauthService.setStorage(localStorage);
        this.oauthService.tokenValidationHandler = new JwksValidationHandler();
        this.oauthService.loadDiscoveryDocumentAndTryLogin();
        // Optional
        this.oauthService.setupAutomaticSilentRefresh();
        // this.oauthService.events.subscribe(e => {
        //   // tslint:disable-next-line:no-console
        //   console.debug('oauth/oidc event', e);
        // });
        // this.oauthService.events
        //   .pipe(filter(e => e.type === 'session_terminated'))
        //   .subscribe(e => {
        //     console.debug('Your session has been terminated!');
        //   });
        // this.oauthService.events
        //   .pipe(filter(e => e.type === 'token_received'))
        //   .subscribe(e => {
        //     // this.oauthService.loadUserProfile();
        //   });
    };
    AuthGuardConfig = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [OAuthService])
    ], AuthGuardConfig);
    return AuthGuardConfig;
}());
export { AuthGuardConfig };
//# sourceMappingURL=auth.guard.config.js.map