import { OAuthService, JwksValidationHandler, AuthConfig } from 'angular-oauth2-oidc';
import { filter } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Util } from '../core/util/util';


export const authConfig: AuthConfig = {
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


@Injectable()
export class AuthGuardConfig {

    constructor(
        private oauthService: OAuthService,
        private util: Util
    ) {
        this.configureWithNewConfigApi();
    }

    private configureWithNewConfigApi() {

        this.oauthService.configure(authConfig);
        this.oauthService.setStorage(localStorage);
        this.oauthService.tokenValidationHandler = new JwksValidationHandler();
        this.oauthService.loadDiscoveryDocumentAndTryLogin();


        // Optional
        this.oauthService.setupAutomaticSilentRefresh();

        this.oauthService.events.subscribe(e => {
          // tslint:disable-next-line:no-console
          console.debug('oauth/oidc event', e);
          if (e.type === 'silent_refresh_timeout') {
            this.util.navigateLogin();
          }
        });

        this.oauthService.events
          .pipe(filter(e => e.type === 'session_terminated'))
          .subscribe(e => {
            console.debug('Your session has been terminated!');
          });

        this.oauthService.events
          .pipe(filter(e => e.type === 'token_received'))
          .subscribe(e => {
            // this.oauthService.loadUserProfile();
          });
    }
}