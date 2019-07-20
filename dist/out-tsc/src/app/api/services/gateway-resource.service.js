import * as tslib_1 from "tslib";
/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { map as __map, filter as __filter } from 'rxjs/operators';
/**
 * Gateway Resource
 */
var GatewayResourceService = /** @class */ (function (_super) {
    tslib_1.__extends(GatewayResourceService, _super);
    function GatewayResourceService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * @return OK
     */
    GatewayResourceService.prototype.activeRoutesUsingGETResponse = function () {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        var req = new HttpRequest('GET', this.rootUrl + "/api/gateway/routes", __body, {
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
    GatewayResourceService.prototype.activeRoutesUsingGET = function () {
        return this.activeRoutesUsingGETResponse().pipe(__map(function (_r) { return _r.body; }));
    };
    GatewayResourceService.activeRoutesUsingGETPath = '/api/gateway/routes';
    GatewayResourceService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root',
        }),
        tslib_1.__metadata("design:paramtypes", [__Configuration,
            HttpClient])
    ], GatewayResourceService);
    return GatewayResourceService;
}(__BaseService));
export { GatewayResourceService };
//# sourceMappingURL=gateway-resource.service.js.map