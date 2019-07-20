import * as tslib_1 from "tslib";
import { ModalController } from '@ionic/angular';
import { ImageSelectorComponent } from './../../../../shared/image-selector/image-selector.component';
import { GetService } from './../../../../core/services/get.service';
import { Component } from '@angular/core';
import { PostService } from 'src/app/core/services/post.service';
import * as moment from 'moment';
var ProfileDetailsComponent = /** @class */ (function () {
    function ProfileDetailsComponent(getService, postService, modalController) {
        this.getService = getService;
        this.postService = postService;
        this.modalController = modalController;
    }
    ProfileDetailsComponent.prototype.ngOnInit = function () {
        this.getDoctor();
    };
    ProfileDetailsComponent.prototype.getDoctor = function () {
        var _this = this;
        this.getService.getDoctor().subscribe(function (doctor) {
            _this.doctor = doctor;
            if (doctor) {
                var date = new Date(_this.doctor.practiceSince);
                _this.inputSupportedDate = moment(date).format('YYYY-MM-DD');
            }
        });
    };
    ProfileDetailsComponent.prototype.updateDoctor = function () {
        console.log('Updating Doctor', this.doctor);
        this.doctor.practiceSince = moment
            .parseZone(this.inputSupportedDate)
            .format()
            .toString();
        this.postService.updateDoctor(this.doctor).then(function (data) {
            console.log(data);
        });
    };
    ProfileDetailsComponent.prototype.selectImage = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: ImageSelectorComponent,
                            cssClass: 'half-height'
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            _this.doctor.image = data.data.imageBase64;
                            _this.doctor.imageContentType = data.data.imageType;
                            _this.postService.updateDoctor(_this.doctor);
                        });
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileDetailsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-profile-details',
            templateUrl: './profile-details.component.html',
            styleUrls: ['./profile-details.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [GetService,
            PostService,
            ModalController])
    ], ProfileDetailsComponent);
    return ProfileDetailsComponent;
}());
export { ProfileDetailsComponent };
//# sourceMappingURL=profile-details.component.js.map