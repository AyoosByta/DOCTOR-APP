import { KeycloakService } from './../../../../core/services/keycloak.service';
import { Component, OnInit } from '@angular/core';
import { Util } from 'src/app/core/util/util';
import { GetService } from 'src/app/core/services/get.service';
import { ResetService } from 'src/app/core/services/reset.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

  static _INVALID_PASSWORD_USERNAME = 'Invalid Username Or Password';

  username: string;
  password: string;

  constructor(private keycloakService: KeycloakService, private util: Util,
    private getService:GetService,
    private resetService: ResetService) {}

  ngOnInit() {
    this.getService.setResetFlag(true);
    this.isAuthenticated();
  }

  isAuthenticated() {
    this.util.createLoader().then(loading => {
      loading.present();
      this.keycloakService
        .isAuthenticated()
        .then(status => {
          if (status == true) {
            loading.dismiss();
            this.util.navigateRoot();
          }
          loading.dismiss();
        })
        .catch(err => {
          loading.dismiss();
        });
    });
  }

  authenticate() {
    this.util.createLoader().then(loading => {
      loading.present();
      this.keycloakService
        .authenticate(this.username, this.password)
        .then(data => {
          loading.dismiss();
          this.util.navigateRoot();
        })
        .catch(err => {
          console.error(err);
          this.util.createToast(LoginPage._INVALID_PASSWORD_USERNAME)
          .then(toast=>{toast.present();});
          loading.dismiss();
        });
    });
  }

  registerPage() {
    this.util.navigateRegister();
  }
}
