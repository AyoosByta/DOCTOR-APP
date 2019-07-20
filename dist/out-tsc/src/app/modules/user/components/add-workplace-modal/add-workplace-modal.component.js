import * as tslib_1 from "tslib";
import { ModalController } from '@ionic/angular';
import { LocationService } from './../../../../core/services/location.service';
import { Component } from '@angular/core';
import { PostService } from 'src/app/core/services/post.service';
var AddWorkplaceModalComponent = /** @class */ (function () {
    function AddWorkplaceModalComponent(modalController, postService, locationService) {
        this.modalController = modalController;
        this.postService = postService;
        this.locationService = locationService;
        this.excludes = [];
        this.searchLocation = '';
        this.searchClinic = '';
        this.locationSuggetions = [];
        this.firstTime = true;
        this.workPlace = {};
        this.updateMode = false;
        this.nameUpdatedStatus = false;
    }
    AddWorkplaceModalComponent.prototype.ngOnInit = function () {
        if (this.updateMode === true) {
            this.searchClinic = this.workPlace.name;
            this.searchLocation = this.workPlace.locationName;
            this.selectedLocation = {};
        }
    };
    AddWorkplaceModalComponent.prototype.search = function () {
        var _this = this;
        this.firstTime = false;
        this.locationService.getPredictions(this.searchLocation)
            .subscribe(function (locationData) {
            _this.locationSuggetions = locationData;
        });
        this.remove();
    };
    AddWorkplaceModalComponent.prototype.save = function () {
        var _this = this;
        if (this.updateMode === false) {
            console.log('Adding Wokplace');
            this.locationService.getGeoFromPlace(this.selectedLocation.description, function (results, status) {
                var latitude = results[0].geometry.location.lat();
                var longitude = results[0].geometry.location.lng();
                var latLong = latitude + ',' + longitude;
                _this.postService.addWorkplace(_this.searchClinic, latLong, _this.searchLocation, _this.did);
                _this.modalController.dismiss();
            });
        }
        else {
            console.log('Updating Wokplace');
            var description = this.selectedLocation.description;
            if (this.selectedLocation === undefined) {
                description = this.workPlace.locationName;
            }
            console.log(description);
            this.locationService.getGeoFromPlace(description, function (results, status) {
                var latitude = results[0].geometry.location.lat();
                var longitude = results[0].geometry.location.lng();
                var latLong = latitude + ',' + longitude;
                _this.workPlace.name = _this.searchClinic;
                _this.workPlace.location = latLong;
                _this.workPlace.locationName = _this.searchLocation;
                _this.postService.updateWorkplace(_this.workPlace);
                _this.modalController.dismiss();
            });
        }
    };
    AddWorkplaceModalComponent.prototype.select = function (locationData) {
        this.selectedLocation = locationData;
        this.searchLocation = locationData.description;
        console.log(this.searchLocation);
    };
    AddWorkplaceModalComponent.prototype.nameUpdated = function () {
        this.nameUpdatedStatus = true;
    };
    AddWorkplaceModalComponent.prototype.remove = function () {
        console.log('removed');
        this.selectedLocation = undefined;
    };
    AddWorkplaceModalComponent.prototype.cancel = function () {
        this.modalController.dismiss();
    };
    AddWorkplaceModalComponent = tslib_1.__decorate([
        Component({
            selector: 'app-add-workplace-modal',
            templateUrl: './add-workplace-modal.component.html',
            styleUrls: ['./add-workplace-modal.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController,
            PostService,
            LocationService])
    ], AddWorkplaceModalComponent);
    return AddWorkplaceModalComponent;
}());
export { AddWorkplaceModalComponent };
//# sourceMappingURL=add-workplace-modal.component.js.map