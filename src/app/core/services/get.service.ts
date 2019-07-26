import { SessionInfoDTO } from 'src/app/api/models';
import { KeycloakService } from './keycloak.service';
import { DoctorService } from './doctor.service';
import { QualificationDTO } from './../../api/models/qualification-dto';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { DoctorDTO, WorkPlaceDTO } from 'src/app/api/models';
import { Storage } from '@ionic/storage';

// TODO: Session GET

@Injectable({
  providedIn: 'root'
})
export class GetService {
  constructor(
    private doctorService: DoctorService,
    private keycloakService: KeycloakService,
    private storage: Storage
  ) {
    console.log('GetSerice Instance Created');
    this.keycloakService.isAuthenticated().then(status => {
      // Sessions Fix providing a default value to the SessionsBehaviour
      this.sessionsMapMap.set(GetService._SESSIONS_KEY, new Map());

      console.log('Status ', status);

      if (status === true) {
        this.forceReset();
      }
    });
  }
  static _DOCTOR_KEY = 'doctor';
  static _QUALIFICATIONS_KEY = 'qualifications';
  static _WORKPLACES_KEY = 'workplaces';
  static _SESSIONS_KEY = 'sessions';

  static resetflag = false;

  private pageSession = 0;

  private doctor: DoctorDTO;
  private doctorBehaviour = new BehaviorSubject<DoctorDTO>(this.doctor);

  private qualifications: QualificationDTO[] = [];
  private qualifcationBehaviour = new BehaviorSubject<QualificationDTO[]>(
    this.qualifications
  );

  private workplaces: WorkPlaceDTO[] = [];
  private workplaceBehaviour = new BehaviorSubject<WorkPlaceDTO[]>(
    this.workplaces
  );

  private sessionsMapMap: Map<
    string,
    Map<string, SessionInfoDTO[]>
  > = new Map();
  private sessionsBehaviour = new BehaviorSubject<
    Map<string, Map<string, SessionInfoDTO[]>>
  >(this.sessionsMapMap);

  public forceReset() {
    this.initDoctor(true);
    this.initQualifications(true);
    this.initWorkplaces(true);
    this.initSessions(true);
  }

  public initDoctor(fromRestAPI?: boolean) {
    const func = (user: any) => {
      this.doctorService.getDoctorDetails(user.preferred_username).subscribe(
        doctor => {
          this.doctorBehaviour.next(doctor);
          this.storage.set(GetService._DOCTOR_KEY, doctor);
        },
        err => {
          // Forward to Error Page
        }
      );
    };

    if (fromRestAPI !== undefined && fromRestAPI === true) {
      this.keycloakService.getCurrentUserDetails().then(func);
    } else {
      this.storage.get(GetService._DOCTOR_KEY).then(data => {
        if (data == null) {
          this.keycloakService.getCurrentUserDetails().then(func);
        } else {
          this.doctorBehaviour.next(data);
        }
      });
    }
  }

  public initQualifications(fromRestAPI?: boolean) {
    const func = (user: any) => {
      this.doctorService
        .getDoctorQualifications(user.preferred_username)
        .subscribe(qualifications => {
          this.qualifcationBehaviour.next(qualifications);
          this.storage.set(GetService._QUALIFICATIONS_KEY, qualifications);
        });
    };

    if (fromRestAPI !== undefined && fromRestAPI === true) {
      this.keycloakService.getCurrentUserDetails().then(func);
    } else {
      this.storage.get(GetService._QUALIFICATIONS_KEY).then(data => {
        if (data == null) {
          this.keycloakService.getCurrentUserDetails().then(func);
        } else {
          this.qualifcationBehaviour.next(data);
        }
      });
    }
  }

  public initWorkplaces(fromRestAPI?: boolean) {
    const func = (user: any) => {
      this.doctorService
        .getDoctorWorkplaces(user.preferred_username)
        .subscribe(workplaces => {
          this.workplaceBehaviour.next(workplaces);
          this.storage.set(GetService._WORKPLACES_KEY, workplaces);
        });
    };

    if (fromRestAPI !== undefined && fromRestAPI === true) {
      this.keycloakService.getCurrentUserDetails().then(func);
    } else {
      this.storage.get(GetService._WORKPLACES_KEY).then(data => {
        if (data === null) {
          this.keycloakService.getCurrentUserDetails().then(func);
        } else {
          this.workplaceBehaviour.next(data);
        }
      });
    }
  }

  initSessions(fromRestAPI: boolean) {
    this.pageSession = 0;
    console.log('get service getting sesion');

    const localSessionMap: Map<string, SessionInfoDTO[]> = new Map();
    const localSessionsMapMap: Map<
      string,
      Map<string, SessionInfoDTO[]>
    > = new Map();
    localSessionsMapMap.set(GetService._SESSIONS_KEY ,localSessionMap);

    const sessionGetter = (user, i, workplace) => {
      this.doctorService
        .getDoctorSessions(user.preferred_username, workplace.id, i)
        .subscribe(sessions => {
          console.log(workplace.name, sessions);
          this.pageSession = sessions.totalPages;

          const sessionsArray = localSessionsMapMap.get(GetService._SESSIONS_KEY)

          let workplaceSessions = [];

          if (sessionsArray.get(workplace.name) !== undefined) {
            workplaceSessions = sessionsArray.get(workplace.name);
          }
          // console.log(i, workplaceSessions);
          sessions.content.forEach(session => {
            workplaceSessions.push(session);
          });
          sessionsArray.set(workplace.name , workplaceSessions);
          localSessionsMapMap.set(GetService._SESSIONS_KEY, sessionsArray);

          if (i <= this.pageSession) {
            i++;
            sessionGetter(user, i, workplace);
          } else {
            this.sessionsBehaviour.next(localSessionsMapMap);
          }
        });
    };

    const func = (user: any) => {
      this.doctorService
        .getDoctorWorkplaces(user.preferred_username)
        .subscribe(workplaces => {
          workplaces.forEach(workplace => {
            sessionGetter(user, 0, workplace);
          });
        });
    };

    if (fromRestAPI !== undefined && fromRestAPI === true) {
      this.keycloakService.getCurrentUserDetails().then(func);
    } else {
      this.storage.get(GetService._WORKPLACES_KEY).then(data => {
        if (data === null) {
          this.keycloakService.getCurrentUserDetails().then(func);
        } else {
          this.workplaceBehaviour.next(data);
        }
      });
    }
  }

  // Getters

  public getDoctor() {
    return this.doctorBehaviour;
  }

  public getQualifications() {
    return this.qualifcationBehaviour;
  }

  public getWorkplaces() {
    return this.workplaceBehaviour;
  }

  public getSessions() {
    return this.sessionsBehaviour;
  }

  public getResetFlag() {
    return GetService.resetflag;
  }

  // Setters

  public setResetFlag(flag: boolean) {
    GetService.resetflag = flag;
  }

  // Clear All Observables on logout
  // Sets the reset flag
  public clear() {
    this.doctorBehaviour.next(null);
    this.qualifcationBehaviour.next(null);
    this.workplaceBehaviour.next(null);
    GetService.resetflag = true;
  }
}
