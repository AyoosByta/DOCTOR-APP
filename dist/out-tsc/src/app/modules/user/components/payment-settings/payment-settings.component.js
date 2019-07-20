import * as tslib_1 from "tslib";
import { ModalController } from '@ionic/angular';
import { Component } from '@angular/core';
var PaymentSettingsComponent = /** @class */ (function () {
    function PaymentSettingsComponent(modalController) {
        this.modalController = modalController;
    }
    PaymentSettingsComponent.prototype.ngOnInit = function () { };
    PaymentSettingsComponent.prototype.back = function () {
        this.modalController.dismiss();
    };
    PaymentSettingsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-payment-settings',
            templateUrl: './payment-settings.component.html',
            styleUrls: ['./payment-settings.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController])
    ], PaymentSettingsComponent);
    return PaymentSettingsComponent;
}());
export { PaymentSettingsComponent };
//# sourceMappingURL=payment-settings.component.js.map