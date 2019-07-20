import * as tslib_1 from "tslib";
/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { map as __map, filter as __filter } from 'rxjs/operators';
/**
 * Logout Resource
 */
var LogoutResourceService = /** @class */ (function (_super) {
    tslib_1.__extends(LogoutResourceService, _super);
    function LogoutResourceService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * @param params The `LogoutResourceService.LogoutUsingPOSTParams` containing the following parameters:
     *
     * - `principal`:
     *
     * - `details`:
     *
     * - `credentials`:
     *
     * - `authorities[0].authority`:
     *
     * - `authenticated`:
     *
     * @return OK
     */
    LogoutResourceService.prototype.logoutUsingPOSTResponse = function (params) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        if (params.principal != null)
            __params = __params.set('principal', params.principal.toString());
        if (params.details != null)
            __params = __params.set('details', params.details.toString());
        if (params.credentials != null)
            __params = __params.set('credentials', params.credentials.toString());
        if (params.authorities0Authority != null)
            __params = __params.set('authorities[0].authority', params.authorities0Authority.toString());
        if (params.authenticated != null)
            __params = __params.set('authenticated', params.authenticated.toString());
        var req = new HttpRequest('POST', this.rootUrl + "/api/logout", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param params The `LogoutResourceService.LogoutUsingPOSTParams` containing the following parameters:
     *
     * - `principal`:
     *
     * - `details`:
     *
     * - `credentials`:
     *
     * - `authorities[0].authority`:
     *
     * - `authenticated`:
     *
     * @return OK
     */
    LogoutResourceService.prototype.logoutUsingPOST = function (params) {
        return this.logoutUsingPOSTResponse(params).pipe(__map(function (_r) { return _r.body; }));
    };
    LogoutResourceService.logoutUsingPOSTPath = '/api/logout';
    LogoutResourceService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root',
        }),
        tslib_1.__metadata("design:paramtypes", [__Configuration,
            HttpClient])
    ], LogoutResourceService);
    return LogoutResourceService;
}(__BaseService));
export { LogoutResourceService };
//# sourceMappingURL=logout-resource.service.js.map