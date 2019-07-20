import * as tslib_1 from "tslib";
import { PostService } from './../../../../core/services/post.service';
import { Component } from '@angular/core';
import { Util } from 'src/app/core/util/util';
var RegisterPage = /** @class */ (function () {
    function RegisterPage(postService, util) {
        this.postService = postService;
        this.util = util;
        this.doctor = {};
    }
    RegisterPage.prototype.ngOnInit = function () { };
    RegisterPage.prototype.createAccount = function () {
        var _this = this;
        this.util.createLoader().then(function (loading) {
            loading.present();
            _this.postService.addDoctor(_this.doctor, _this.password)
                .then(function (doctor) {
                console.log(doctor);
                loading.dismiss();
                _this.util.navigateRoot();
            })
                .catch(function (err) {
                _this.util.createToast('Unable To create Account');
            });
        });
    };
    RegisterPage = tslib_1.__decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.page.html',
            styleUrls: ['./register.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [PostService, Util])
    ], RegisterPage);
    return RegisterPage;
}());
export { RegisterPage };
//# sourceMappingURL=register.page.js.map