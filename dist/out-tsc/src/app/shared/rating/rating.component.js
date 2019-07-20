import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
var Colors;
(function (Colors) {
    Colors["GREY"] = "#E0E0E0";
    Colors["GREEN"] = "#76FF03";
    Colors["YELLOW"] = "#FFCA28";
    Colors["RED"] = "#DD2C00";
})(Colors || (Colors = {}));
;
var RatingComponent = /** @class */ (function () {
    function RatingComponent() {
        this.ratingChange = new EventEmitter();
    }
    RatingComponent.prototype.ngOnInit = function () { };
    RatingComponent.prototype.rate = function (index) {
        this.rating = index;
        this.ratingChange.emit(this.rating);
    };
    RatingComponent.prototype.getColor = function (index) {
        if (this.isAboveRating(index)) {
            return Colors.GREY;
        }
        switch (this.rating) {
            case 1:
            case 2:
                return Colors.RED;
            case 3:
                return Colors.YELLOW;
            case 4:
            case 5:
                return Colors.GREEN;
            default:
                return Colors.GREY;
        }
    };
    RatingComponent.prototype.isAboveRating = function (index) {
        return index > this.rating;
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], RatingComponent.prototype, "rating", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], RatingComponent.prototype, "ratingChange", void 0);
    RatingComponent = tslib_1.__decorate([
        Component({
            selector: 'app-rating',
            templateUrl: './rating.component.html',
            styleUrls: ['./rating.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], RatingComponent);
    return RatingComponent;
}());
export { RatingComponent };
//# sourceMappingURL=rating.component.js.map