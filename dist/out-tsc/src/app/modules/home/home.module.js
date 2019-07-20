import * as tslib_1 from "tslib";
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home.router.module';
import { HomePage } from './tabs/home.page';
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib_1.__decorate([
        NgModule({
            imports: [
                IonicModule,
                CommonModule,
                FormsModule,
                HomeRoutingModule,
            ],
            declarations: [HomePage]
        })
    ], HomeModule);
    return HomeModule;
}());
export { HomeModule };
//# sourceMappingURL=home.module.js.map