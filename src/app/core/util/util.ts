import { Injectable } from '@angular/core';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable()
export class Util {

    constructor(
        private loadingController: LoadingController,
        private toastController: ToastController,
        private navController: NavController,
        private routes: Router
    ) {}

    async createLoader() {

        return await this.loadingController.create({
            spinner: 'bubbles'
        });
    }

    async createToast(msg: string) {
       return await this.toastController.create({
            message: msg ,
            duration: 2000,
            color: 'light',
            position: 'top',
            showCloseButton : true,
            keyboardClose: true,
            buttons: [
              {
                side: 'start',
                icon: 'warning',
              }]
          });
    }

    navigateRoot() {
        this.navController.navigateForward('');
    }

    navigateRegister() {
        this.navController.navigateForward('/authentication/register');
    }

    navigateLogin() {
        this.navController.navigateBack('/authentication/login');
    }

    navigateDashboard() {
        this.navController.navigateBack('/home/dashboard');
    }

    navigateProfile() {
        this.navController.navigateForward('/user/profile');
    }

    navigateAppointments() {
        this.navController.navigateForward('/home/appointment');
    }

    navigateConsultation(token) {
    }

    navigateSettings() {
        this.navController.navigateForward('/user/settings');
    }

    navigateSessions() {
        this.navController.navigateForward('/user/sessions');
    }
}
