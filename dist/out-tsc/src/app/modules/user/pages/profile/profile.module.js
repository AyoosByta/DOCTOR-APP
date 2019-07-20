import * as tslib_1 from "tslib";
import { AddWorkplaceModalComponent } from './../../components/add-workplace-modal/add-workplace-modal.component';
import { AddQualificationModalComponent } from './../../components/add-qualification-modal/add-qualification-modal.component';
import { ProfileDetailsComponent } from './../../components/profile-details/profile-details.component';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProfilePage } from './profile.page';
import { CoreModule } from 'src/app/core/core.module';
var routes = [
    {
        path: '',
        component: ProfilePage
    }
];
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                CoreModule,
                ComponentsModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ProfilePage],
            entryComponents: [ProfileDetailsComponent, AddQualificationModalComponent, AddWorkplaceModalComponent]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());
export { ProfilePageModule };
//# sourceMappingURL=profile.module.js.map