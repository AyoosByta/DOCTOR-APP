import * as tslib_1 from "tslib";
import { AddWorkplaceModalComponent } from './../add-workplace-modal/add-workplace-modal.component';
import { ModalController } from '@ionic/angular';
import { GetService } from 'src/app/core/services/get.service';
import { Component } from '@angular/core';
import { PostService } from 'src/app/core/services/post.service';
var ProfileWorkplacesComponent = /** @class */ (function () {
    function ProfileWorkplacesComponent(modalController, getService, postService) {
        this.modalController = modalController;
        this.getService = getService;
        this.postService = postService;
        this.exclude = [];
    }
    ProfileWorkplacesComponent.prototype.ngOnInit = function () {
        this.getDoctor();
        this.getWorkplaces();
    };
    ProfileWorkplacesComponent.prototype.getDoctor = function () {
        var _this = this;
        this.getService.getDoctor()
            .subscribe(function (doctor) {
            _this.doctor = doctor;
        });
    };
    ProfileWorkplacesComponent.prototype.getWorkplaces = function () {
        var _this = this;
        this.getService.getWorkplaces()
            .subscribe(function (workplaces) {
            _this.workplaces = workplaces;
        });
    };
    ProfileWorkplacesComponent.prototype.deleteWorkplace = function (id) {
        this.postService.deleteWorkplace(id);
    };
    ProfileWorkplacesComponent.prototype.addWorkplaceModal = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: AddWorkplaceModalComponent,
                            componentProps: { exclude: this.exclude, did: this.doctor.id }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileWorkplacesComponent.prototype.updateWorkplaceModal = function (workPlaceUpdate) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: AddWorkplaceModalComponent,
                            componentProps: { exclude: this.exclude, workPlace: workPlaceUpdate, updateMode: true }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileWorkplacesComponent = tslib_1.__decorate([
        Component({
            selector: 'app-profile-workplaces',
            templateUrl: './profile-workplaces.component.html',
            styleUrls: ['./profile-workplaces.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController,
            GetService,
            PostService])
    ], ProfileWorkplacesComponent);
    return ProfileWorkplacesComponent;
}());
export { ProfileWorkplacesComponent };
//# sourceMappingURL=profile-workplaces.component.js.map