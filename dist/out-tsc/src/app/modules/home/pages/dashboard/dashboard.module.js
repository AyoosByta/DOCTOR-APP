import * as tslib_1 from "tslib";
import { HeaderComponent } from './../../../../core/header/header.component';
import { CoreModule } from './../../../../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DashboardPage } from './dashboard.page';
var routes = [
    {
        path: '',
        component: DashboardPage
    }
];
var DashboardPageModule = /** @class */ (function () {
    function DashboardPageModule() {
    }
    DashboardPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                CoreModule
            ],
            declarations: [DashboardPage],
            entryComponents: [HeaderComponent]
        })
    ], DashboardPageModule);
    return DashboardPageModule;
}());
export { DashboardPageModule };
//# sourceMappingURL=dashboard.module.js.map