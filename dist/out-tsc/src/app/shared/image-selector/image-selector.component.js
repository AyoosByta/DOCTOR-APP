import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';
import { ModalController } from '@ionic/angular';
var ImageSelectorComponent = /** @class */ (function () {
    function ImageSelectorComponent(camera, modalController) {
        this.camera = camera;
        this.modalController = modalController;
        this.fileUrl = './assets/picture.svg';
    }
    ImageSelectorComponent.prototype.ngOnInit = function () {
    };
    ImageSelectorComponent.prototype.startFileUploadHtmlDialog = function () {
        document.getElementById('fileUpload').click();
    };
    ImageSelectorComponent.prototype.startCamera = function () {
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            var base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    ImageSelectorComponent.prototype.onSelectFile = function (event) {
        var _this = this;
        this.fileToUpload = event.target.files.item(0);
        var freader = new FileReader();
        freader.onload = function (ev) {
            _this.fileUrl = ev.target.result;
            _this.dismiss();
        };
        freader.readAsDataURL(this.fileToUpload);
    };
    ImageSelectorComponent.prototype.dismiss = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.dismiss({
                            imageBase64: this.fileUrl.substring(this.fileUrl.indexOf(',') + 1),
                            imageType: this.fileToUpload.type
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ImageSelectorComponent = tslib_1.__decorate([
        Component({
            selector: 'app-image-selector',
            templateUrl: './image-selector.component.html',
            styleUrls: ['./image-selector.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Camera,
            ModalController])
    ], ImageSelectorComponent);
    return ImageSelectorComponent;
}());
export { ImageSelectorComponent };
//# sourceMappingURL=image-selector.component.js.map