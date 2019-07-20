import * as tslib_1 from "tslib";
import { SessionComponent } from './../../components/session/session.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SessionsPage } from './sessions.page';
import { ComponentsModule } from '../../components/components.module';
var routes = [
    {
        path: '',
        component: SessionsPage
    }
];
var SessionsPageModule = /** @class */ (function () {
    function SessionsPageModule() {
    }
    SessionsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ComponentsModule,
                RouterModule.forChild(routes)
            ],
            declarations: [SessionsPage],
            entryComponents: [SessionComponent]
        })
    ], SessionsPageModule);
    return SessionsPageModule;
}());
export { SessionsPageModule };
//# sourceMappingURL=sessions.module.js.map