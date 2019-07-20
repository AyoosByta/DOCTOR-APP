import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { MapsAPILoader, GoogleMapsAPIWrapper } from '@agm/core';
var LocationService = /** @class */ (function () {
    function LocationService(mapsAPILoader, mapsWrapper, geolocation) {
        var _this = this;
        this.mapsAPILoader = mapsAPILoader;
        this.mapsWrapper = mapsWrapper;
        this.geolocation = geolocation;
        console.log('Constror service location');
        this.mapsAPILoader.load().then(function () {
            _this.autoCompleteService = new google.maps.places.AutocompleteService();
        });
    }
    LocationService.prototype.calculateDistance = function (from, to) {
        var distance = google.maps.geometry.spherical.computeDistanceBetween(from, to);
        return distance;
    };
    LocationService.prototype.getCurrentLocation = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.currentLat = resp.coords.latitude;
            _this.currentLon = resp.coords.longitude;
        });
    };
    LocationService.prototype.getPredictions = function (searchTerm) {
        var _this = this;
        return Observable.create(function (observer) {
            _this.autoCompleteService.getPlacePredictions({ input: searchTerm }, function (data) {
                var previousData;
                if (data) {
                    previousData = data;
                    observer.next(data);
                    observer.complete();
                }
                if (!data) {
                    observer.next(previousData);
                    observer.complete();
                }
                else {
                    observer.error(status);
                }
            });
        });
    };
    LocationService.prototype.geocodeAddress = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.geocoder = new google.maps.Geocoder;
                        return [4 /*yield*/, this.geocoder];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LocationService.prototype.getGeoFromPlace = function (description, callback) {
        var geocoder = new google.maps.Geocoder;
        return geocoder.geocode({ address: description }, callback);
    };
    LocationService.prototype.ngOnInit = function () {
        this.getCurrentLocation();
    };
    LocationService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [MapsAPILoader, GoogleMapsAPIWrapper, Geolocation])
    ], LocationService);
    return LocationService;
}());
export { LocationService };
//# sourceMappingURL=location.service.js.map