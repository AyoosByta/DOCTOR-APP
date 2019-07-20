import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
var routes = [
    {
        path: '',
        children: [
            {
                path: 'login',
                children: [
                    {
                        path: '',
                        loadChildren: '../authentication/pages/login/login.module#LoginPageModule'
                    }
                ]
            },
            {
                path: 'register',
                children: [
                    {
                        path: '',
                        loadChildren: '../authentication/pages/register/register.module#RegisterPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/authentication/login',
                pathMatch: 'full'
            }
        ],
    },
];
var AuthenticationPageRoutingModule = /** @class */ (function () {
    function AuthenticationPageRoutingModule() {
    }
    AuthenticationPageRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forChild(routes)
            ],
            exports: [RouterModule]
        })
    ], AuthenticationPageRoutingModule);
    return AuthenticationPageRoutingModule;
}());
export { AuthenticationPageRoutingModule };
//# sourceMappingURL=authentication.router.module.js.map