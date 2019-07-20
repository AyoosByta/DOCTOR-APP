import * as tslib_1 from "tslib";
import { GetService } from 'src/app/core/services/get.service';
import { Component } from '@angular/core';
import { Util } from 'src/app/core/util/util';
var SessionsPage = /** @class */ (function () {
    function SessionsPage(getService, util) {
        this.getService = getService;
        this.util = util;
        this.sessionsMap = new Map();
        this.workplaces = [];
        this.isReady = false;
    }
    SessionsPage.prototype.ngOnInit = function () {
        this.getWorkplaces();
        this.getSessions();
    };
    SessionsPage.prototype.getWorkplaces = function () {
        var _this = this;
        this.getService.getWorkplaces().subscribe(function (workplaces) {
            _this.workplaces = workplaces;
            _this.isReady = true;
        });
    };
    SessionsPage.prototype.getSessions = function () {
        var _this = this;
        this.getService.getSessions().subscribe(function (sessionsMap) {
            console.log('Got Sessions');
            if (sessionsMap.get('sessions') !== undefined) {
                _this.sessionsMap = sessionsMap.get('sessions');
            }
        });
    };
    // Navigations
    SessionsPage.prototype.navigateProfile = function () {
        this.util.navigateProfile();
    };
    SessionsPage.prototype.navigateDashboard = function () {
        this.util.navigateDashboard();
    };
    SessionsPage = tslib_1.__decorate([
        Component({
            selector: 'app-sessions',
            templateUrl: './sessions.page.html',
            styleUrls: ['./sessions.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [GetService, Util])
    ], SessionsPage);
    return SessionsPage;
}());
export { SessionsPage };
//# sourceMappingURL=sessions.page.js.map