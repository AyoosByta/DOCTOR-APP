import * as tslib_1 from "tslib";
import { ModalController } from '@ionic/angular';
import { Component } from '@angular/core';
var GeneralSettingsComponent = /** @class */ (function () {
    function GeneralSettingsComponent(modalController) {
        this.modalController = modalController;
    }
    GeneralSettingsComponent.prototype.ngOnInit = function () { };
    GeneralSettingsComponent.prototype.back = function () {
        this.modalController.dismiss();
    };
    GeneralSettingsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-general-settings',
            templateUrl: './general-settings.component.html',
            styleUrls: ['./general-settings.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController])
    ], GeneralSettingsComponent);
    return GeneralSettingsComponent;
}());
export { GeneralSettingsComponent };
//# sourceMappingURL=general-settings.component.js.map