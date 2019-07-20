import * as tslib_1 from "tslib";
/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { map as __map, filter as __filter } from 'rxjs/operators';
/**
 * User Resource
 */
var UserResourceService = /** @class */ (function (_super) {
    tslib_1.__extends(UserResourceService, _super);
    function UserResourceService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * @param query query
     * @return OK
     */
    UserResourceService.prototype.searchUsingGETResponse = function (query) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        var req = new HttpRequest('GET', this.rootUrl + ("/api/_search/users/" + query), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param query query
     * @return OK
     */
    UserResourceService.prototype.searchUsingGET = function (query) {
        return this.searchUsingGETResponse(query).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @param params The `UserResourceService.GetAllUsersUsingGETParams` containing the following parameters:
     *
     * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     *
     * - `size`: Size of a page
     *
     * - `page`: Page number of the requested page
     *
     * @return OK
     */
    UserResourceService.prototype.getAllUsersUsingGETResponse = function (params) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        (params.sort || []).forEach(function (val) { if (val != null)
            __params = __params.append('sort', val.toString()); });
        if (params.size != null)
            __params = __params.set('size', params.size.toString());
        if (params.page != null)
            __params = __params.set('page', params.page.toString());
        var req = new HttpRequest('GET', this.rootUrl + "/api/users", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param params The `UserResourceService.GetAllUsersUsingGETParams` containing the following parameters:
     *
     * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     *
     * - `size`: Size of a page
     *
     * - `page`: Page number of the requested page
     *
     * @return OK
     */
    UserResourceService.prototype.getAllUsersUsingGET = function (params) {
        return this.getAllUsersUsingGETResponse(params).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @return OK
     */
    UserResourceService.prototype.getAuthoritiesUsingGETResponse = function () {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        var req = new HttpRequest('GET', this.rootUrl + "/api/users/authorities", __body, {
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
    UserResourceService.prototype.getAuthoritiesUsingGET = function () {
        return this.getAuthoritiesUsingGETResponse().pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @param login login
     * @return OK
     */
    UserResourceService.prototype.getUserUsingGETResponse = function (login) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        var req = new HttpRequest('GET', this.rootUrl + ("/api/users/" + login), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param login login
     * @return OK
     */
    UserResourceService.prototype.getUserUsingGET = function (login) {
        return this.getUserUsingGETResponse(login).pipe(__map(function (_r) { return _r.body; }));
    };
    UserResourceService.searchUsingGETPath = '/api/_search/users/{query}';
    UserResourceService.getAllUsersUsingGETPath = '/api/users';
    UserResourceService.getAuthoritiesUsingGETPath = '/api/users/authorities';
    UserResourceService.getUserUsingGETPath = '/api/users/{login}';
    UserResourceService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root',
        }),
        tslib_1.__metadata("design:paramtypes", [__Configuration,
            HttpClient])
    ], UserResourceService);
    return UserResourceService;
}(__BaseService));
export { UserResourceService };
//# sourceMappingURL=user-resource.service.js.map