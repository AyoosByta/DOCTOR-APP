import * as tslib_1 from "tslib";
import { GetService } from './../../../../core/services/get.service';
import { Component } from '@angular/core';
import { Util } from 'src/app/core/util/util';
import { ResetService } from 'src/app/core/services/reset.service';
var DashboardPage = /** @class */ (function () {
    function DashboardPage(util, resetService, getService) {
        this.util = util;
        this.resetService = resetService;
        this.getService = getService;
        this.isReady = false;
        this.options = [
            { name: 'Sessions', icon: 'clock', route: 'session' },
            { name: 'Appointments', icon: 'calendar', route: '/user/appointment' }
        ];
        if (this.getService.getResetFlag() === true) {
            this.resetService.dataInitialize();
        }
    }
    DashboardPage.prototype.ngOnInit = function () {
    };
    DashboardPage.prototype.navigateUrl = function (routeName) {
        switch (routeName) {
            case 'session':
                this.util.navigateSessions();
                break;
            case 'appointment':
                this.util.navigateAppointments();
        }
    };
    DashboardPage = tslib_1.__decorate([
        Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.page.html',
            styleUrls: ['./dashboard.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Util,
            ResetService,
            GetService])
    ], DashboardPage);
    return DashboardPage;
}());
export { DashboardPage };
//# sourceMappingURL=dashboard.page.js.map