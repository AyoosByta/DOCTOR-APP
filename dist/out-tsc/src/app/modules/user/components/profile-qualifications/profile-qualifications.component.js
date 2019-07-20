import * as tslib_1 from "tslib";
import { AddQualificationModalComponent } from "./../add-qualification-modal/add-qualification-modal.component";
import { ModalController } from "@ionic/angular";
import { PostService } from "./../../../../core/services/post.service";
import { Component } from "@angular/core";
import { GetService } from "src/app/core/services/get.service";
var ProfileQualificationsComponent = /** @class */ (function () {
    function ProfileQualificationsComponent(getService, postService, modalController) {
        this.getService = getService;
        this.postService = postService;
        this.modalController = modalController;
        this.qualifications = [];
        this.exclude = [];
    }
    ProfileQualificationsComponent.prototype.ngOnInit = function () {
        this.getDoctor();
        this.getQualifications();
    };
    ProfileQualificationsComponent.prototype.getQualifications = function () {
        var _this = this;
        this.getService.getQualifications().subscribe(function (qualifications) {
            _this.qualifications = qualifications;
            if (qualifications != undefined) {
                qualifications.forEach(function (qualification) {
                    _this.exclude.push(qualification.qualification);
                });
            }
        });
    };
    ProfileQualificationsComponent.prototype.getDoctor = function () {
        var _this = this;
        this.getService.getDoctor()
            .subscribe(function (doctor) {
            _this.doctor = doctor;
        });
    };
    ProfileQualificationsComponent.prototype.deleteQualification = function (id) {
        this.postService.deleteQualification(id);
    };
    ProfileQualificationsComponent.prototype.addQualificationModal = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: AddQualificationModalComponent,
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
    ProfileQualificationsComponent = tslib_1.__decorate([
        Component({
            selector: "app-profile-qualifications",
            templateUrl: "./profile-qualifications.component.html",
            styleUrls: ["./profile-qualifications.component.scss"]
        }),
        tslib_1.__metadata("design:paramtypes", [GetService,
            PostService,
            ModalController])
    ], ProfileQualificationsComponent);
    return ProfileQualificationsComponent;
}());
export { ProfileQualificationsComponent };
//# sourceMappingURL=profile-qualifications.component.js.map