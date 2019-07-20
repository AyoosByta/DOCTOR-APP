import * as tslib_1 from "tslib";
import { Component, Input, EventEmitter, forwardRef, Output, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonInput } from '@ionic/angular';
export var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return CustomInputComponent; }),
    multi: true
};
var noop = function () {
};
var CustomInputComponent = /** @class */ (function () {
    function CustomInputComponent() {
        this.editMode = false;
        // The internal data model
        this.innerValue = '';
        this.oldValue = '';
        // Placeholders for the callbacks which are later provided
        // by the Control Value Accessor
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        this.saveEvent = new EventEmitter();
    }
    CustomInputComponent.prototype.save = function () {
        this.editMode = false;
        this.saveEvent.emit(this.value);
    };
    CustomInputComponent.prototype.setFocus = function () {
        if (this.editMode === true) {
            this.editMode = false;
            this.save();
        }
        else {
            this.oldValue = this.defaultValue;
            this.editMode = true;
            this.customInput.setFocus();
        }
    };
    CustomInputComponent.prototype.close = function () {
        this.value = this.oldValue;
        this.editMode = false;
    };
    Object.defineProperty(CustomInputComponent.prototype, "value", {
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
    CustomInputComponent.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    // From ControlValueAccessor interface
    CustomInputComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    // From ControlValueAccessor interface
    CustomInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    // Set touched on blur
    CustomInputComponent.prototype.onBlur = function () {
        this.onTouchedCallback();
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], CustomInputComponent.prototype, "placeholder", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], CustomInputComponent.prototype, "labelName", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], CustomInputComponent.prototype, "defaultValue", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], CustomInputComponent.prototype, "saveEvent", void 0);
    tslib_1.__decorate([
        ViewChild('customInput'),
        tslib_1.__metadata("design:type", IonInput)
    ], CustomInputComponent.prototype, "customInput", void 0);
    CustomInputComponent = tslib_1.__decorate([
        Component({
            selector: 'app-custom-input',
            templateUrl: './custom-input.component.html',
            styleUrls: ['./custom-input.component.scss'],
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], CustomInputComponent);
    return CustomInputComponent;
}());
export { CustomInputComponent };
//# sourceMappingURL=custom-input.component.js.map