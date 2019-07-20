import * as tslib_1 from "tslib";
import { KeycloakService } from './../../../../core/services/keycloak.service';
import { Util } from 'src/app/core/util/util';
import { Component } from '@angular/core';
import { GetService } from 'src/app/core/services/get.service';
var ProfilePage = /** @class */ (function () {
    function ProfilePage(keycloakService, getService, util) {
        this.keycloakService = keycloakService;
        this.getService = getService;
        this.util = util;
    }
    ProfilePage.prototype.ngOnInit = function () { };
    ProfilePage.prototype.logout = function () {
        this.keycloakService.logout();
        this.getService.clear();
    };
    ProfilePage = tslib_1.__decorate([
        Component({
            selector: 'app-profile',
            templateUrl: './profile.page.html',
            styleUrls: ['./profile.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [KeycloakService,
            GetService,
            Util])
    ], ProfilePage);
    return ProfilePage;
}());
export { ProfilePage };
//# sourceMappingURL=profile.page.js.map