import * as tslib_1 from "tslib";
/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { map as __map, filter as __filter } from 'rxjs/operators';
/**
 * Auth Info Resource
 */
var AuthInfoResourceService = /** @class */ (function (_super) {
    tslib_1.__extends(AuthInfoResourceService, _super);
    function AuthInfoResourceService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * @return OK
     */
    AuthInfoResourceService.prototype.getAuthInfoUsingGETResponse = function () {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        var req = new HttpRequest('GET', this.rootUrl + "/api/auth-info", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @return OK
     */
    AuthInfoResourceService.prototype.getAuthInfoUsingGET = function () {
        return this.getAuthInfoUsingGETResponse().pipe(__map(function (_r) { return _r.body; }));
    };
    AuthInfoResourceService.getAuthInfoUsingGETPath = '/api/auth-info';
    AuthInfoResourceService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root',
        }),
        tslib_1.__metadata("design:paramtypes", [__Configuration,
            HttpClient])
    ], AuthInfoResourceService);
    return AuthInfoResourceService;
}(__BaseService));
export { AuthInfoResourceService };
//# sourceMappingURL=auth-info-resource.service.js.map