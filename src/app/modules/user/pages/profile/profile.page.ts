import { KeycloakService } from './../../../../core/services/keycloak.service';
import { filter } from 'rxjs/operators';
import { Util } from 'src/app/core/util/util';
import { Storage } from '@ionic/storage';
import { OAuthService } from 'angular-oauth2-oidc';

import { Component, OnInit } from '@angular/core';
import { GetService } from 'src/app/core/services/get.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private keycloakService: KeycloakService,
    private getService: GetService,
    private util: Util
  ) {}

  ngOnInit() {}

  logout() {
    this.keycloakService.logout();
    this.getService.clear();
  }
}
