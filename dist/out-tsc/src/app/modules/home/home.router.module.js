import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePage } from './tabs/home.page';
var routes = [
    {
        path: 'home',
        component: HomePage,
        children: [
            {
                path: 'dashboard',
                children: [
                    {
                        path: '',
                        loadChildren: '../home/pages/dashboard/dashboard.module#DashboardPageModule'
                    }
                ]
            },
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        loadChildren: '../user/pages/profile/profile.module#ProfilePageModule'
                    }
                ]
            },
            {
                path: 'appointment',
                children: [
                    {
                        path: '',
                        loadChildren: '../home/pages/appointment/appointment.module#AppointmentPageModule'
                    }
                ]
            }
        ],
    },
    {
        path: '',
        redirectTo: '/home/dashboard',
        pathMatch: 'full'
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forChild(routes)
            ],
            exports: [RouterModule]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());
export { HomeRoutingModule };
//# sourceMappingURL=home.router.module.js.map