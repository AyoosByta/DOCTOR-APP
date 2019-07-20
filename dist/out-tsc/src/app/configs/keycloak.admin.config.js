import * as tslib_1 from "tslib";
import { KeycloakAdminClient } from 'keycloak-admin/lib/client';
import { Injectable } from '@angular/core';
var KeycloakAdminConfig = /** @class */ (function () {
    function KeycloakAdminConfig() {
        this.kcAdminClient = new KeycloakAdminClient();
        this.kcAdminClient.setConfig({
            baseUrl: 'http://35.196.86.249:8080/auth'
        });
        this.configureKeycloakAdmin();
    }
    KeycloakAdminConfig.prototype.refreshClient = function () {
        return this.configureKeycloakAdmin();
    };
    KeycloakAdminConfig.prototype.configureKeycloakAdmin = function () {
        return this.kcAdminClient.auth({
            username: 'admin',
            password: 'karma123',
            grantType: 'password',
            clientId: 'admin-cli',
        });
    };
    KeycloakAdminConfig = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], KeycloakAdminConfig);
    return KeycloakAdminConfig;
}());
export { KeycloakAdminConfig };
//# sourceMappingURL=keycloak.admin.config.js.map