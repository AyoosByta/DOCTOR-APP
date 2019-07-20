import * as tslib_1 from "tslib";
import { KeycloakAdminConfig } from './keycloak.admin.config';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuardConfig } from './auth.guard.config';
var ConfigsModule = /** @class */ (function () {
    function ConfigsModule(authGuardConfig, keyCloakConfig) {
        this.authGuardConfig = authGuardConfig;
        this.keyCloakConfig = keyCloakConfig;
    }
    ConfigsModule = tslib_1.__decorate([
        NgModule({
            declarations: [],
            imports: [
                CommonModule
            ],
            providers: [AuthGuardConfig, KeycloakAdminConfig],
        }),
        tslib_1.__metadata("design:paramtypes", [AuthGuardConfig,
            KeycloakAdminConfig])
    ], ConfigsModule);
    return ConfigsModule;
}());
export { ConfigsModule };
//# sourceMappingURL=configs.module.js.map