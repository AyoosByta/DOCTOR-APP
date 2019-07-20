import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
var ExpandableComponent = /** @class */ (function () {
    function ExpandableComponent() {
        this.showContent = false;
        this.iconAdd = new EventEmitter();
    }
    ExpandableComponent.prototype.ngOnInit = function () { };
    ExpandableComponent.prototype.iconClicked = function () {
        this.iconAdd.emit();
    };
    ExpandableComponent.prototype.toggleContent = function () {
        this.showContent = !this.showContent;
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], ExpandableComponent.prototype, "arr", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], ExpandableComponent.prototype, "header", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], ExpandableComponent.prototype, "errMsg", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], ExpandableComponent.prototype, "iconAdd", void 0);
    ExpandableComponent = tslib_1.__decorate([
        Component({
            selector: 'app-expandable',
            templateUrl: './expandable.component.html',
            styleUrls: ['./expandable.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ExpandableComponent);
    return ExpandableComponent;
}());
export { ExpandableComponent };
//# sourceMappingURL=expandable.component.js.map