import * as tslib_1 from "tslib";
import { PaymentSettingsComponent } from './../../components/payment-settings/payment-settings.component';
import { GeneralSettingsComponent } from './../../components/general-settings/general-settings.component';
import { ModalController } from '@ionic/angular';
import { Component } from '@angular/core';
var SettingsPage = /** @class */ (function () {
    function SettingsPage(modalController) {
        this.modalController = modalController;
    }
    SettingsPage.prototype.ngOnInit = function () {
    };
    SettingsPage.prototype.generalSetting = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: GeneralSettingsComponent
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage.prototype.paymentSetting = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: PaymentSettingsComponent
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage = tslib_1.__decorate([
        Component({
            selector: 'app-settings',
            templateUrl: './settings.page.html',
            styleUrls: ['./settings.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController])
    ], SettingsPage);
    return SettingsPage;
}());
export { SettingsPage };
//# sourceMappingURL=settings.page.js.map