import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
var routes = [
    {
        path: '',
        children: [
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        loadChildren: '../user/pages/profile/profile.module#ProfilePageModule'
                    },
                ]
            },
            {
                path: 'settings',
                loadChildren: '../user/pages/settings/settings.module#SettingsPageModule'
            },
            {
                path: 'sessions',
                loadChildren: '../user/pages/sessions/sessions.module#SessionsPageModule'
            },
            {
                path: '',
                redirectTo: '/user/profile',
                pathMatch: 'full'
            }
        ],
    },
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forChild(routes)
            ],
            exports: [RouterModule]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());
export { UserRoutingModule };
//# sourceMappingURL=user.router.module.js.map