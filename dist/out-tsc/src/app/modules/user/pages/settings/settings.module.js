import * as tslib_1 from "tslib";
import { ComponentsModule } from './../../components/components.module';
import { GeneralSettingsComponent } from './../../components/general-settings/general-settings.component';
import { PaymentSettingsComponent } from './../../components/payment-settings/payment-settings.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SettingsPage } from './settings.page';
var routes = [
    {
        path: '',
        component: SettingsPage
    }
];
var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ComponentsModule,
                RouterModule.forChild(routes)
            ],
            declarations: [SettingsPage],
            entryComponents: [GeneralSettingsComponent, PaymentSettingsComponent]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());
export { SettingsPageModule };
//# sourceMappingURL=settings.module.js.map