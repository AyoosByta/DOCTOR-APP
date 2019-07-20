import * as tslib_1 from "tslib";
import { ResetService } from './services/reset.service';
import { Util } from './util/util';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { GoogleMapsAPIWrapper, AgmCoreModule } from '@agm/core';
import { AuthInterceptor } from './guards/auth-interceptor';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KeycloakService } from './services/keycloak.service';
import { DoctorService } from './services/doctor.service';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LocationService } from './services/location.service';
import { GetService } from './services/get.service';
import { PostService } from './services/post.service';
import { IonicStorageModule } from '@ionic/storage';
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule_1 = CoreModule;
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule_1,
            providers: [GetService, PostService, KeycloakService, DoctorService]
        };
    };
    var CoreModule_1;
    CoreModule = CoreModule_1 = tslib_1.__decorate([
        NgModule({
            imports: [
                IonicModule,
                CommonModule,
                FormsModule,
                IonicStorageModule.forRoot({
                    name: '__mydb',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                }),
                LoggerModule.forRoot({
                    level: NgxLoggerLevel.LOG,
                    serverLogLevel: NgxLoggerLevel.OFF
                }),
                AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyAUlvH09qvfqTyR6izVneDPXEzDyHcIB-0',
                    libraries: ['places', 'geometry']
                })
            ],
            declarations: [HeaderComponent],
            exports: [HeaderComponent],
            providers: [
                LocationService,
                Util,
                GoogleMapsAPIWrapper,
                ResetService,
                Geolocation,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: AuthInterceptor,
                    multi: true
                }
            ]
        })
    ], CoreModule);
    return CoreModule;
}());
export { CoreModule };
//# sourceMappingURL=core.module.js.map