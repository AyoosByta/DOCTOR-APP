import * as tslib_1 from "tslib";
/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { map as __map, filter as __filter } from 'rxjs/operators';
/**
 * Query Resource
 */
var QueryResourceService = /** @class */ (function (_super) {
    tslib_1.__extends(QueryResourceService, _super);
    function QueryResourceService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * @param params The `QueryResourceService.FindSlotsUsingGETParams` containing the following parameters:
     *
     * - `doctorId`: doctorId
     *
     * - `date`: date
     *
     * @return OK
     */
    QueryResourceService.prototype.findSlotsUsingGETResponse = function (params) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        var req = new HttpRequest('GET', this.rootUrl + ("/api/queries/Dr-slots/" + params.date + "/" + params.doctorId), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param params The `QueryResourceService.FindSlotsUsingGETParams` containing the following parameters:
     *
     * - `doctorId`: doctorId
     *
     * - `date`: date
     *
     * @return OK
     */
    QueryResourceService.prototype.findSlotsUsingGET = function (params) {
        return this.findSlotsUsingGETResponse(params).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @param params The `QueryResourceService.GetAppointmentsByDoctorIdUsingGETParams` containing the following parameters:
     *
     * - `searchTerm`: searchTerm
     *
     * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     *
     * - `size`: Size of a page
     *
     * - `page`: Page number of the requested page
     *
     * @return OK
     */
    QueryResourceService.prototype.getAppointmentsByDoctorIdUsingGETResponse = function (params) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        (params.sort || []).forEach(function (val) { if (val != null)
            __params = __params.append('sort', val.toString()); });
        if (params.size != null)
            __params = __params.set('size', params.size.toString());
        if (params.page != null)
            __params = __params.set('page', params.page.toString());
        var req = new HttpRequest('GET', this.rootUrl + ("/api/queries/appointments/" + params.searchTerm), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param params The `QueryResourceService.GetAppointmentsByDoctorIdUsingGETParams` containing the following parameters:
     *
     * - `searchTerm`: searchTerm
     *
     * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     *
     * - `size`: Size of a page
     *
     * - `page`: Page number of the requested page
     *
     * @return OK
     */
    QueryResourceService.prototype.getAppointmentsByDoctorIdUsingGET = function (params) {
        return this.getAppointmentsByDoctorIdUsingGETResponse(params).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @param searchTerm searchTerm
     * @return OK
     */
    QueryResourceService.prototype.findContactInfoUsingGETResponse = function (searchTerm) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        var req = new HttpRequest('GET', this.rootUrl + ("/api/queries/contact-infos/" + searchTerm), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param searchTerm searchTerm
     * @return OK
     */
    QueryResourceService.prototype.findContactInfoUsingGET = function (searchTerm) {
        return this.findContactInfoUsingGETResponse(searchTerm).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @param searchTerm searchTerm
     * @return OK
     */
    QueryResourceService.prototype.findDoctorUsingGETResponse = function (searchTerm) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        var req = new HttpRequest('GET', this.rootUrl + ("/api/queries/doctor/" + searchTerm), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param searchTerm searchTerm
     * @return OK
     */
    QueryResourceService.prototype.findDoctorUsingGET = function (searchTerm) {
        return this.findDoctorUsingGETResponse(searchTerm).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @param doctorId doctorId
     * @return OK
     */
    QueryResourceService.prototype.findAllWorkPlacesByDoctorIdUsingGETResponse = function (doctorId) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        var req = new HttpRequest('GET', this.rootUrl + ("/api/queries/findworkplacesBydoctorId/" + doctorId), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param doctorId doctorId
     * @return OK
     */
    QueryResourceService.prototype.findAllWorkPlacesByDoctorIdUsingGET = function (doctorId) {
        return this.findAllWorkPlacesByDoctorIdUsingGETResponse(doctorId).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @param assignee assignee
     * @return OK
     */
    QueryResourceService.prototype.getOpenAppointmentsUsingGETResponse = function (assignee) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        if (assignee != null)
            __params = __params.set('assignee', assignee.toString());
        var req = new HttpRequest('GET', this.rootUrl + "/api/queries/open-appointments", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param assignee assignee
     * @return OK
     */
    QueryResourceService.prototype.getOpenAppointmentsUsingGET = function (assignee) {
        return this.getOpenAppointmentsUsingGETResponse(assignee).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @return OK
     */
    QueryResourceService.prototype.getPrescriptionAsPDFUsingGETResponse = function () {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        var req = new HttpRequest('GET', this.rootUrl + "/api/queries/prescription-as-pdf", __body, {
            headers: __headers,
            params: __params,
            responseType: 'text'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @return OK
     */
    QueryResourceService.prototype.getPrescriptionAsPDFUsingGET = function () {
        return this.getPrescriptionAsPDFUsingGETResponse().pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @param doctorId doctorId
     * @return OK
     */
    QueryResourceService.prototype.findAllQualificationByDoctorIdUsingGETResponse = function (doctorId) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        var req = new HttpRequest('GET', this.rootUrl + ("/api/queries/qualification/" + doctorId), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param doctorId doctorId
     * @return OK
     */
    QueryResourceService.prototype.findAllQualificationByDoctorIdUsingGET = function (doctorId) {
        return this.findAllQualificationByDoctorIdUsingGETResponse(doctorId).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @param params The `QueryResourceService.FindAllQualificationUsingGETParams` containing the following parameters:
     *
     * - `searchTerm`: searchTerm
     *
     * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     *
     * - `size`: Size of a page
     *
     * - `page`: Page number of the requested page
     *
     * @return OK
     */
    QueryResourceService.prototype.findAllQualificationUsingGETResponse = function (params) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        (params.sort || []).forEach(function (val) { if (val != null)
            __params = __params.append('sort', val.toString()); });
        if (params.size != null)
            __params = __params.set('size', params.size.toString());
        if (params.page != null)
            __params = __params.set('page', params.page.toString());
        var req = new HttpRequest('GET', this.rootUrl + ("/api/queries/qualifications/" + params.searchTerm), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param params The `QueryResourceService.FindAllQualificationUsingGETParams` containing the following parameters:
     *
     * - `searchTerm`: searchTerm
     *
     * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     *
     * - `size`: Size of a page
     *
     * - `page`: Page number of the requested page
     *
     * @return OK
     */
    QueryResourceService.prototype.findAllQualificationUsingGET = function (params) {
        return this.findAllQualificationUsingGETResponse(params).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @param params The `QueryResourceService.FindAllReviewUsingGETParams` containing the following parameters:
     *
     * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     *
     * - `size`: Size of a page
     *
     * - `page`: Page number of the requested page
     *
     * @return OK
     */
    QueryResourceService.prototype.findAllReviewUsingGETResponse = function (params) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        (params.sort || []).forEach(function (val) { if (val != null)
            __params = __params.append('sort', val.toString()); });
        if (params.size != null)
            __params = __params.set('size', params.size.toString());
        if (params.page != null)
            __params = __params.set('page', params.page.toString());
        var req = new HttpRequest('GET', this.rootUrl + "/api/queries/review", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param params The `QueryResourceService.FindAllReviewUsingGETParams` containing the following parameters:
     *
     * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     *
     * - `size`: Size of a page
     *
     * - `page`: Page number of the requested page
     *
     * @return OK
     */
    QueryResourceService.prototype.findAllReviewUsingGET = function (params) {
        return this.findAllReviewUsingGETResponse(params).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @param params The `QueryResourceService.FindAllSesionInfoByDoctorsWorkPlaceUsingGETParams` containing the following parameters:
     *
     * - `workPlaceId`: workPlaceId
     *
     * - `doctorId`: doctorId
     *
     * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     *
     * - `size`: Size of a page
     *
     * - `page`: Page number of the requested page
     *
     * @return OK
     */
    QueryResourceService.prototype.findAllSesionInfoByDoctorsWorkPlaceUsingGETResponse = function (params) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        (params.sort || []).forEach(function (val) { if (val != null)
            __params = __params.append('sort', val.toString()); });
        if (params.size != null)
            __params = __params.set('size', params.size.toString());
        if (params.page != null)
            __params = __params.set('page', params.page.toString());
        var req = new HttpRequest('GET', this.rootUrl + ("/api/queries/session-infos-doctorsworkplace/" + params.doctorId + "/" + params.workPlaceId), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param params The `QueryResourceService.FindAllSesionInfoByDoctorsWorkPlaceUsingGETParams` containing the following parameters:
     *
     * - `workPlaceId`: workPlaceId
     *
     * - `doctorId`: doctorId
     *
     * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     *
     * - `size`: Size of a page
     *
     * - `page`: Page number of the requested page
     *
     * @return OK
     */
    QueryResourceService.prototype.findAllSesionInfoByDoctorsWorkPlaceUsingGET = function (params) {
        return this.findAllSesionInfoByDoctorsWorkPlaceUsingGETResponse(params).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @param params The `QueryResourceService.FindAllSesionInfoUsingGETParams` containing the following parameters:
     *
     * - `searchTerm`: searchTerm
     *
     * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     *
     * - `size`: Size of a page
     *
     * - `page`: Page number of the requested page
     *
     * @return OK
     */
    QueryResourceService.prototype.findAllSesionInfoUsingGETResponse = function (params) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        (params.sort || []).forEach(function (val) { if (val != null)
            __params = __params.append('sort', val.toString()); });
        if (params.size != null)
            __params = __params.set('size', params.size.toString());
        if (params.page != null)
            __params = __params.set('page', params.page.toString());
        var req = new HttpRequest('GET', this.rootUrl + ("/api/queries/session-infos/" + params.searchTerm), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param params The `QueryResourceService.FindAllSesionInfoUsingGETParams` containing the following parameters:
     *
     * - `searchTerm`: searchTerm
     *
     * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     *
     * - `size`: Size of a page
     *
     * - `page`: Page number of the requested page
     *
     * @return OK
     */
    QueryResourceService.prototype.findAllSesionInfoUsingGET = function (params) {
        return this.findAllSesionInfoUsingGETResponse(params).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @param params The `QueryResourceService.FindAllSlotsUsingGETParams` containing the following parameters:
     *
     * - `searchTerm`: searchTerm
     *
     * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     *
     * - `size`: Size of a page
     *
     * - `page`: Page number of the requested page
     *
     * @return OK
     */
    QueryResourceService.prototype.findAllSlotsUsingGETResponse = function (params) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        (params.sort || []).forEach(function (val) { if (val != null)
            __params = __params.append('sort', val.toString()); });
        if (params.size != null)
            __params = __params.set('size', params.size.toString());
        if (params.page != null)
            __params = __params.set('page', params.page.toString());
        var req = new HttpRequest('GET', this.rootUrl + ("/api/queries/slots/" + params.searchTerm), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param params The `QueryResourceService.FindAllSlotsUsingGETParams` containing the following parameters:
     *
     * - `searchTerm`: searchTerm
     *
     * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     *
     * - `size`: Size of a page
     *
     * - `page`: Page number of the requested page
     *
     * @return OK
     */
    QueryResourceService.prototype.findAllSlotsUsingGET = function (params) {
        return this.findAllSlotsUsingGETResponse(params).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @param params The `QueryResourceService.GetTasksUsingGETParams` containing the following parameters:
     *
     * - `withoutTenantId`: If true, only returns tasks without a tenantId set. If false, the withoutTenantId parameter is ignored.
     *
     * - `withoutDueDate`: Only return tasks which don�t have a due date. The property is ignored if the value is false.
     *
     * - `unassigned`: unassigned
     *
     * - `tenantIdLike`: Only return tasks with a tenantId like the given value.
     *
     * - `tenantId`: Only return tasks with the given tenantId.
     *
     * - `taskDefinitionKeyLike`: taskDefinitionKeyLike
     *
     * - `taskDefinitionKey`: taskDefinitionKey
     *
     * - `processInstanceId`: processInstanceId
     *
     * - `processInstanceBusinessKeyLike`: processInstanceBusinessKeyLike
     *
     * - `processInstanceBusinessKey`: processInstanceBusinessKey
     *
     * - `processDefinitionNameLike`: Only return tasks which are part of a process instance which has a process definition with a name like the given value.
     *
     * - `processDefinitionName`: Only return tasks which are part of a process instance which has a process definition with the given name.
     *
     * - `processDefinitionKeyLike`: Only return tasks which are part of a process instance which has a process definition with a key like the given value.
     *
     * - `processDefinitionKey`: Only return tasks which are part of a process instance which has a process definition with the given key.
     *
     * - `processDefinitionId`: Only return tasks which are part of a process instance which has a process definition with the given id.
     *
     * - `priority`: priority
     *
     * - `ownerLike`: ownerLike
     *
     * - `owner`: owner
     *
     * - `nameLike`: nameLike
     *
     * - `name`: name
     *
     * - `minimumPriority`: minimumPriority
     *
     * - `maximumPriority`: maximumPriority
     *
     * - `involvedUser`: involvedUser
     *
     * - `includeTaskLocalVariables`: Indication to include task local variables in the result.
     *
     * - `includeProcessVariables`: Indication to include process variables in the result.
     *
     * - `executionId`: Only return tasks which are part of the execution with the given id.
     *
     * - `excludeSubTasks`: Only return tasks that are not a subtask of another task.
     *
     * - `dueOn`: Only return tasks which are due on the given date.
     *
     * - `dueBefore`: Only return tasks which are due before the given date.
     *
     * - `dueAfter`: Only return tasks which are due after the given date.
     *
     * - `description`: description
     *
     * - `delegationState`: delegationState
     *
     * - `createdOn`: Only return tasks which are created on the given date.
     *
     * - `createdBefore`: Only return tasks which are created before the given date.
     *
     * - `createdAfter`: Only return tasks which are created after the given date.
     *
     * - `category`: Select tasks with the given category. Note that this is the task category, not the category of the process definition (namespace within the BPMN Xml).
     *
     * - `candidateUser`: candidateUser
     *
     * - `candidateOrAssigned`: Select tasks that has been claimed or assigned to user or waiting to claim by user (candidate user or groups).
     *
     * - `candidateGroups`: candidateGroups
     *
     * - `candidateGroup`: candidateGroup
     *
     * - `assigneeLike`: assigneeLike
     *
     * - `assignee`: assignee
     *
     * - `active`: If true, only return tasks that are not suspended (either part of a process that is not suspended or not part of a process at all). If false, only tasks that are part of suspended process instances are returned.
     *
     * @return OK
     */
    QueryResourceService.prototype.getTasksUsingGETResponse = function (params) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        if (params.withoutTenantId != null)
            __params = __params.set('withoutTenantId', params.withoutTenantId.toString());
        if (params.withoutDueDate != null)
            __params = __params.set('withoutDueDate', params.withoutDueDate.toString());
        if (params.unassigned != null)
            __params = __params.set('unassigned', params.unassigned.toString());
        if (params.tenantIdLike != null)
            __params = __params.set('tenantIdLike', params.tenantIdLike.toString());
        if (params.tenantId != null)
            __params = __params.set('tenantId', params.tenantId.toString());
        if (params.taskDefinitionKeyLike != null)
            __params = __params.set('taskDefinitionKeyLike', params.taskDefinitionKeyLike.toString());
        if (params.taskDefinitionKey != null)
            __params = __params.set('taskDefinitionKey', params.taskDefinitionKey.toString());
        if (params.processInstanceId != null)
            __params = __params.set('processInstanceId', params.processInstanceId.toString());
        if (params.processInstanceBusinessKeyLike != null)
            __params = __params.set('processInstanceBusinessKeyLike', params.processInstanceBusinessKeyLike.toString());
        if (params.processInstanceBusinessKey != null)
            __params = __params.set('processInstanceBusinessKey', params.processInstanceBusinessKey.toString());
        if (params.processDefinitionNameLike != null)
            __params = __params.set('processDefinitionNameLike', params.processDefinitionNameLike.toString());
        if (params.processDefinitionName != null)
            __params = __params.set('processDefinitionName', params.processDefinitionName.toString());
        if (params.processDefinitionKeyLike != null)
            __params = __params.set('processDefinitionKeyLike', params.processDefinitionKeyLike.toString());
        if (params.processDefinitionKey != null)
            __params = __params.set('processDefinitionKey', params.processDefinitionKey.toString());
        if (params.processDefinitionId != null)
            __params = __params.set('processDefinitionId', params.processDefinitionId.toString());
        if (params.priority != null)
            __params = __params.set('priority', params.priority.toString());
        if (params.ownerLike != null)
            __params = __params.set('ownerLike', params.ownerLike.toString());
        if (params.owner != null)
            __params = __params.set('owner', params.owner.toString());
        if (params.nameLike != null)
            __params = __params.set('nameLike', params.nameLike.toString());
        if (params.name != null)
            __params = __params.set('name', params.name.toString());
        if (params.minimumPriority != null)
            __params = __params.set('minimumPriority', params.minimumPriority.toString());
        if (params.maximumPriority != null)
            __params = __params.set('maximumPriority', params.maximumPriority.toString());
        if (params.involvedUser != null)
            __params = __params.set('involvedUser', params.involvedUser.toString());
        if (params.includeTaskLocalVariables != null)
            __params = __params.set('includeTaskLocalVariables', params.includeTaskLocalVariables.toString());
        if (params.includeProcessVariables != null)
            __params = __params.set('includeProcessVariables', params.includeProcessVariables.toString());
        if (params.executionId != null)
            __params = __params.set('executionId', params.executionId.toString());
        if (params.excludeSubTasks != null)
            __params = __params.set('excludeSubTasks', params.excludeSubTasks.toString());
        if (params.dueOn != null)
            __params = __params.set('dueOn', params.dueOn.toString());
        if (params.dueBefore != null)
            __params = __params.set('dueBefore', params.dueBefore.toString());
        if (params.dueAfter != null)
            __params = __params.set('dueAfter', params.dueAfter.toString());
        if (params.description != null)
            __params = __params.set('description', params.description.toString());
        if (params.delegationState != null)
            __params = __params.set('delegationState', params.delegationState.toString());
        if (params.createdOn != null)
            __params = __params.set('createdOn', params.createdOn.toString());
        if (params.createdBefore != null)
            __params = __params.set('createdBefore', params.createdBefore.toString());
        if (params.createdAfter != null)
            __params = __params.set('createdAfter', params.createdAfter.toString());
        if (params.category != null)
            __params = __params.set('category', params.category.toString());
        if (params.candidateUser != null)
            __params = __params.set('candidateUser', params.candidateUser.toString());
        if (params.candidateOrAssigned != null)
            __params = __params.set('candidateOrAssigned', params.candidateOrAssigned.toString());
        if (params.candidateGroups != null)
            __params = __params.set('candidateGroups', params.candidateGroups.toString());
        if (params.candidateGroup != null)
            __params = __params.set('candidateGroup', params.candidateGroup.toString());
        if (params.assigneeLike != null)
            __params = __params.set('assigneeLike', params.assigneeLike.toString());
        if (params.assignee != null)
            __params = __params.set('assignee', params.assignee.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        var req = new HttpRequest('GET', this.rootUrl + "/api/queries/tasks", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param params The `QueryResourceService.GetTasksUsingGETParams` containing the following parameters:
     *
     * - `withoutTenantId`: If true, only returns tasks without a tenantId set. If false, the withoutTenantId parameter is ignored.
     *
     * - `withoutDueDate`: Only return tasks which don�t have a due date. The property is ignored if the value is false.
     *
     * - `unassigned`: unassigned
     *
     * - `tenantIdLike`: Only return tasks with a tenantId like the given value.
     *
     * - `tenantId`: Only return tasks with the given tenantId.
     *
     * - `taskDefinitionKeyLike`: taskDefinitionKeyLike
     *
     * - `taskDefinitionKey`: taskDefinitionKey
     *
     * - `processInstanceId`: processInstanceId
     *
     * - `processInstanceBusinessKeyLike`: processInstanceBusinessKeyLike
     *
     * - `processInstanceBusinessKey`: processInstanceBusinessKey
     *
     * - `processDefinitionNameLike`: Only return tasks which are part of a process instance which has a process definition with a name like the given value.
     *
     * - `processDefinitionName`: Only return tasks which are part of a process instance which has a process definition with the given name.
     *
     * - `processDefinitionKeyLike`: Only return tasks which are part of a process instance which has a process definition with a key like the given value.
     *
     * - `processDefinitionKey`: Only return tasks which are part of a process instance which has a process definition with the given key.
     *
     * - `processDefinitionId`: Only return tasks which are part of a process instance which has a process definition with the given id.
     *
     * - `priority`: priority
     *
     * - `ownerLike`: ownerLike
     *
     * - `owner`: owner
     *
     * - `nameLike`: nameLike
     *
     * - `name`: name
     *
     * - `minimumPriority`: minimumPriority
     *
     * - `maximumPriority`: maximumPriority
     *
     * - `involvedUser`: involvedUser
     *
     * - `includeTaskLocalVariables`: Indication to include task local variables in the result.
     *
     * - `includeProcessVariables`: Indication to include process variables in the result.
     *
     * - `executionId`: Only return tasks which are part of the execution with the given id.
     *
     * - `excludeSubTasks`: Only return tasks that are not a subtask of another task.
     *
     * - `dueOn`: Only return tasks which are due on the given date.
     *
     * - `dueBefore`: Only return tasks which are due before the given date.
     *
     * - `dueAfter`: Only return tasks which are due after the given date.
     *
     * - `description`: description
     *
     * - `delegationState`: delegationState
     *
     * - `createdOn`: Only return tasks which are created on the given date.
     *
     * - `createdBefore`: Only return tasks which are created before the given date.
     *
     * - `createdAfter`: Only return tasks which are created after the given date.
     *
     * - `category`: Select tasks with the given category. Note that this is the task category, not the category of the process definition (namespace within the BPMN Xml).
     *
     * - `candidateUser`: candidateUser
     *
     * - `candidateOrAssigned`: Select tasks that has been claimed or assigned to user or waiting to claim by user (candidate user or groups).
     *
     * - `candidateGroups`: candidateGroups
     *
     * - `candidateGroup`: candidateGroup
     *
     * - `assigneeLike`: assigneeLike
     *
     * - `assignee`: assignee
     *
     * - `active`: If true, only return tasks that are not suspended (either part of a process that is not suspended or not part of a process at all). If false, only tasks that are part of suspended process instances are returned.
     *
     * @return OK
     */
    QueryResourceService.prototype.getTasksUsingGET = function (params) {
        return this.getTasksUsingGETResponse(params).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @param params The `QueryResourceService.FindAllUnReservedSlotsUsingGETParams` containing the following parameters:
     *
     * - `sort`: sort
     *
     * - `size`: size
     *
     * - `page`: page
     *
     * @return OK
     */
    QueryResourceService.prototype.findAllUnReservedSlotsUsingGETResponse = function (params) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        (params.sort || []).forEach(function (val) { if (val != null)
            __params = __params.append('sort', val.toString()); });
        if (params.size != null)
            __params = __params.set('size', params.size.toString());
        if (params.page != null)
            __params = __params.set('page', params.page.toString());
        var req = new HttpRequest('GET', this.rootUrl + "/api/queries/unreserved-slots", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param params The `QueryResourceService.FindAllUnReservedSlotsUsingGETParams` containing the following parameters:
     *
     * - `sort`: sort
     *
     * - `size`: size
     *
     * - `page`: page
     *
     * @return OK
     */
    QueryResourceService.prototype.findAllUnReservedSlotsUsingGET = function (params) {
        return this.findAllUnReservedSlotsUsingGETResponse(params).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @param params The `QueryResourceService.FindWorkPlaceUsingGETParams` containing the following parameters:
     *
     * - `searchTerm`: searchTerm
     *
     * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     *
     * - `size`: Size of a page
     *
     * - `page`: Page number of the requested page
     *
     * @return OK
     */
    QueryResourceService.prototype.findWorkPlaceUsingGETResponse = function (params) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        (params.sort || []).forEach(function (val) { if (val != null)
            __params = __params.append('sort', val.toString()); });
        if (params.size != null)
            __params = __params.set('size', params.size.toString());
        if (params.page != null)
            __params = __params.set('page', params.page.toString());
        var req = new HttpRequest('GET', this.rootUrl + ("/api/queries/work-places/" + params.searchTerm), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param params The `QueryResourceService.FindWorkPlaceUsingGETParams` containing the following parameters:
     *
     * - `searchTerm`: searchTerm
     *
     * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     *
     * - `size`: Size of a page
     *
     * - `page`: Page number of the requested page
     *
     * @return OK
     */
    QueryResourceService.prototype.findWorkPlaceUsingGET = function (params) {
        return this.findWorkPlaceUsingGETResponse(params).pipe(__map(function (_r) { return _r.body; }));
    };
    QueryResourceService.findSlotsUsingGETPath = '/api/queries/Dr-slots/{date}/{doctorId}';
    QueryResourceService.getAppointmentsByDoctorIdUsingGETPath = '/api/queries/appointments/{searchTerm}';
    QueryResourceService.findContactInfoUsingGETPath = '/api/queries/contact-infos/{searchTerm}';
    QueryResourceService.findDoctorUsingGETPath = '/api/queries/doctor/{searchTerm}';
    QueryResourceService.findAllWorkPlacesByDoctorIdUsingGETPath = '/api/queries/findworkplacesBydoctorId/{doctorId}';
    QueryResourceService.getOpenAppointmentsUsingGETPath = '/api/queries/open-appointments';
    QueryResourceService.getPrescriptionAsPDFUsingGETPath = '/api/queries/prescription-as-pdf';
    QueryResourceService.findAllQualificationByDoctorIdUsingGETPath = '/api/queries/qualification/{doctorId}';
    QueryResourceService.findAllQualificationUsingGETPath = '/api/queries/qualifications/{searchTerm}';
    QueryResourceService.findAllReviewUsingGETPath = '/api/queries/review';
    QueryResourceService.findAllSesionInfoByDoctorsWorkPlaceUsingGETPath = '/api/queries/session-infos-doctorsworkplace/{doctorId}/{workPlaceId}';
    QueryResourceService.findAllSesionInfoUsingGETPath = '/api/queries/session-infos/{searchTerm}';
    QueryResourceService.findAllSlotsUsingGETPath = '/api/queries/slots/{searchTerm}';
    QueryResourceService.getTasksUsingGETPath = '/api/queries/tasks';
    QueryResourceService.findAllUnReservedSlotsUsingGETPath = '/api/queries/unreserved-slots';
    QueryResourceService.findWorkPlaceUsingGETPath = '/api/queries/work-places/{searchTerm}';
    QueryResourceService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root',
        }),
        tslib_1.__metadata("design:paramtypes", [__Configuration,
            HttpClient])
    ], QueryResourceService);
    return QueryResourceService;
}(__BaseService));
export { QueryResourceService };
//# sourceMappingURL=query-resource.service.js.map