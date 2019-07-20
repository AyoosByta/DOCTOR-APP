import * as tslib_1 from "tslib";
import { CustomDatePickerComponent } from './custom-date-picker/custom-date-picker.component';
import { ExpandableComponent } from './expandable/expandable.component';
import { Camera } from '@ionic-native/camera/ngx';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ImageSelectorComponent } from './image-selector/image-selector.component';
import { RatingComponent } from './rating/rating.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule
            ],
            declarations: [
                ImageSelectorComponent,
                RatingComponent,
                CustomInputComponent,
                CustomDatePickerComponent,
                ExpandableComponent
            ],
            exports: [
                ImageSelectorComponent,
                RatingComponent,
                CustomInputComponent,
                CustomDatePickerComponent,
                ExpandableComponent
            ],
            providers: [
                Camera
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
export { SharedModule };
//# sourceMappingURL=shared.module.js.map