import * as tslib_1 from "tslib";
import { GetService } from 'src/app/core/services/get.service';
import { Injectable } from '@angular/core';
var ResetService = /** @class */ (function () {
    function ResetService(getService) {
        this.getService = getService;
    }
    ResetService.prototype.dataInitialize = function () {
        this.getService.initDoctor();
        this.getService.initQualifications();
        this.getService.initWorkplaces();
        this.getService.setResetFlag(false);
    };
    ResetService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [GetService])
    ], ResetService);
    return ResetService;
}());
export { ResetService };
//# sourceMappingURL=reset.service.js.map