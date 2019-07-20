import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppointmentPage } from './appointment.page';
var routes = [
    {
        path: '',
        component: AppointmentPage
    }
];
var AppointmentPageModule = /** @class */ (function () {
    function AppointmentPageModule() {
    }
    AppointmentPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [AppointmentPage]
        })
    ], AppointmentPageModule);
    return AppointmentPageModule;
}());
export { AppointmentPageModule };
//# sourceMappingURL=appointment.module.js.map