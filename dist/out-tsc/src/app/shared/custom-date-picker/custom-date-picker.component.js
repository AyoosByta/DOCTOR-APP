import * as tslib_1 from "tslib";
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, forwardRef, Input, Output, EventEmitter } from '@angular/core';
export var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return CustomDatePickerComponent; }),
    multi: true
};
var noop = function () {
};
var CustomDatePickerComponent = /** @class */ (function () {
    function CustomDatePickerComponent() {
        this.editMode = false;
        // The internal data model
        this.innerValue = '';
        // Placeholders for the callbacks which are later provided
        // by the Control Value Accessor
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        this.saveEvent = new EventEmitter();
    }
    ;
    CustomDatePickerComponent.prototype.save = function () {
        this.editMode = false;
        this.saveEvent.emit(this.value);
    };
    CustomDatePickerComponent.prototype.setFocus = function () {
        if (this.editMode === true) {
            this.save();
        }
        else {
            this.innerValue = this.defaultValue;
            this.editMode = true;
            document.getElementById('datePicker').click();
        }
    };
    CustomDatePickerComponent.prototype.close = function () {
        this.editMode = false;
    };
    Object.defineProperty(CustomDatePickerComponent.prototype, "value", {
        // get accessor
        get: function () {
            return this.innerValue;
        },
        // set accessor including call the onchange callback
        set: function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    // From ControlValueAccessor interface
    CustomDatePickerComponent.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    // From ControlValueAccessor interface
    CustomDatePickerComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    // From ControlValueAccessor interface
    CustomDatePickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    // Set touched on blur
    CustomDatePickerComponent.prototype.onBlur = function () {
        this.onTouchedCallback();
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], CustomDatePickerComponent.prototype, "placeholder", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], CustomDatePickerComponent.prototype, "labelName", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], CustomDatePickerComponent.prototype, "defaultValue", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], CustomDatePickerComponent.prototype, "saveEvent", void 0);
    CustomDatePickerComponent = tslib_1.__decorate([
        Component({
            selector: 'app-custom-date-picker',
            templateUrl: './custom-date-picker.component.html',
            styleUrls: ['./custom-date-picker.component.scss'],
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], CustomDatePickerComponent);
    return CustomDatePickerComponent;
}());
export { CustomDatePickerComponent };
//# sourceMappingURL=custom-date-picker.component.js.map