import * as tslib_1 from "tslib";
import { DAY_FULL_NAME } from './../../../../core/mocks/day.list';
import { AddSessionModalComponent } from './../add-session-modal/add-session-modal.component';
import { ModalController } from '@ionic/angular';
import { Component, Input } from '@angular/core';
import { DAY } from 'src/app/core/mocks/day.list';
var SessionComponent = /** @class */ (function () {
    function SessionComponent(modalController) {
        this.modalController = modalController;
        this.sessions = [];
        this.currentDayListSessions = [];
        this.currentDay = '';
        this.currentDayFullName = '';
        this.dayNames = DAY;
    }
    SessionComponent.prototype.ngOnInit = function () { };
    SessionComponent.prototype.ngOnChanges = function (changes) {
        this.showSessionForDay('Sun');
    };
    SessionComponent.prototype.showSessionForDay = function (day) {
        var _this = this;
        this.currentDayListSessions = [];
        this.currentDay = day;
        this.currentDayFullName = DAY_FULL_NAME[DAY.indexOf(day)];
        var dayNumber = this.dayNames.indexOf(day) + 1;
        if (this.sessions !== undefined) {
            this.sessions.forEach(function (session) {
                if (session.weekDay === dayNumber) {
                    _this.currentDayListSessions.push(session);
                }
            });
        }
    };
    SessionComponent.prototype.addSessionsModal = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: AddSessionModalComponent,
                            componentProps: {}
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], SessionComponent.prototype, "workplace", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], SessionComponent.prototype, "sessions", void 0);
    SessionComponent = tslib_1.__decorate([
        Component({
            selector: 'app-session',
            templateUrl: './session.component.html',
            styleUrls: ['./session.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController])
    ], SessionComponent);
    return SessionComponent;
}());
export { SessionComponent };
//# sourceMappingURL=session.component.js.map