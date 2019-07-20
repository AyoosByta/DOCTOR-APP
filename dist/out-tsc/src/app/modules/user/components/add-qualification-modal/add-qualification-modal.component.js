import * as tslib_1 from "tslib";
import { qualifications } from './../../../../core/mocks/qualification.list';
import { PostService } from 'src/app/core/services/post.service';
import { ModalController } from '@ionic/angular';
import { Component, Input } from '@angular/core';
var AddQualificationModalComponent = /** @class */ (function () {
    function AddQualificationModalComponent(modalController, postService) {
        this.modalController = modalController;
        this.postService = postService;
        this.firstTime = true;
        this.exclude = [];
        this.selected = [];
        this.suggestions = [];
        this.searchTerm = '';
    }
    AddQualificationModalComponent.prototype.ngOnInit = function () {
        this.search();
    };
    AddQualificationModalComponent.prototype.search = function () {
        this.firstTime = false;
        var searchTermtemp = this.searchTerm;
        this.suggestions = qualifications.filter(function (e) {
            return this.indexOf(e) < 0 && e.match(new RegExp(searchTermtemp, 'g'));
        }, this.exclude);
        console.log(this.suggestions);
    };
    AddQualificationModalComponent.prototype.select = function (qualification) {
        this.selected.push(qualification);
        this.exclude.push(qualification);
        this.search();
        console.log(this.selected.length);
    };
    AddQualificationModalComponent.prototype.remove = function (qualification) {
        this.selected = this.selected.filter(function (qualificationSelected) { return qualificationSelected !== qualification; });
        this.exclude = this.exclude.filter(function (qualificationExcluded) { return qualificationExcluded != qualification; });
        this.search();
    };
    AddQualificationModalComponent.prototype.cancel = function () {
        this.modalController.dismiss();
    };
    AddQualificationModalComponent.prototype.save = function () {
        var _this = this;
        this.selected.forEach(function (qualificationName) {
            _this.postService.addQualification(qualificationName, _this.did);
            _this.modalController.dismiss();
        });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], AddQualificationModalComponent.prototype, "exclude", void 0);
    AddQualificationModalComponent = tslib_1.__decorate([
        Component({
            selector: 'app-add-qualification-modal',
            templateUrl: './add-qualification-modal.component.html',
            styleUrls: ['./add-qualification-modal.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController,
            PostService])
    ], AddQualificationModalComponent);
    return AddQualificationModalComponent;
}());
export { AddQualificationModalComponent };
//# sourceMappingURL=add-qualification-modal.component.js.map