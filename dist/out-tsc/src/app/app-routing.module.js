import * as tslib_1 from "tslib";
import { AuthGuardService } from './core/guards/auth-guard.service';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
var routes = [
    { path: '', loadChildren: './modules/home/home.module#HomeModule', canActivate: [AuthGuardService] },
    { path: 'authentication', loadChildren: './modules/authentication/authentication.module#AuthenticationModule' },
    { path: 'user', loadChildren: './modules/user/user.module#UserModule', canActivate: [AuthGuardService] },
    { path: 'appointment', loadChildren: './modules/home/pages/appointment/appointment.module#AppointmentPageModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map