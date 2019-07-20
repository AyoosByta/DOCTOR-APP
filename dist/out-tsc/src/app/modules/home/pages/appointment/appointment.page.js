import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var AppointmentPage = /** @class */ (function () {
    function AppointmentPage() {
        this.appointments = [{ name: 'Patient 1', bookingTime: '12:30', age: 23 }];
    }
    AppointmentPage.prototype.ngOnInit = function () {
    };
    AppointmentPage = tslib_1.__decorate([
        Component({
            selector: 'app-appointment',
            templateUrl: './appointment.page.html',
            styleUrls: ['./appointment.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AppointmentPage);
    return AppointmentPage;
}());
export { AppointmentPage };
//# sourceMappingURL=appointment.page.js.map