import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Util } from '../util/util';
import { GetService } from '../services/get.service';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(util, getService) {
        this.util = util;
        this.getService = getService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.getDoctor();
    };
    HeaderComponent.prototype.profilePage = function () {
        this.util.navigateProfile();
    };
    HeaderComponent.prototype.settingsPage = function () {
        this.util.navigateSettings();
    };
    HeaderComponent.prototype.getDoctor = function () {
        var _this = this;
        this.util.createLoader()
            .then(function (loading) {
            loading.present();
            _this.getService.getDoctor()
                .subscribe(function (doctor) {
                _this.doctor = doctor;
                loading.dismiss();
            });
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    HeaderComponent = tslib_1.__decorate([
        Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Util,
            GetService])
    ], HeaderComponent);
    return HeaderComponent;
}());
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map