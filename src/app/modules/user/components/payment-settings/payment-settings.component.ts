import { Util } from 'src/app/core/util/util';
import { GetService } from 'src/app/core/services/get.service';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/core/services/post.service';
import { PaymentSettingsDTO } from 'src/app/api/models';

@Component({
  selector: 'app-payment-settings',
  templateUrl: './payment-settings.component.html',
  styleUrls: ['./payment-settings.component.scss'],
})
export class PaymentSettingsComponent implements OnInit {


  paymentSettings: PaymentSettingsDTO = {
    currency: '',
    amount: 0
  };

  constructor(
    private modalController: ModalController,
    private getService: GetService,
    private postService: PostService,
    private util: Util
  ) { }


  ngOnInit() {
    this.getPaymentSettings();
  }

  dismiss() {
    this.modalController.dismiss();
  }

  updateSettings() {
    this.util.createLoader()
    .then(loader => {
      loader.present();
      this.postService.updatePaymentSettings(this.paymentSettings , () => {
        loader.dismiss();
      });
    });
  }

  getPaymentSettings() {
    this.util.createLoader()
    .then(loader => {
      loader.present();

      this.getService.getPaymentSettings()
      .subscribe(ps => {
        console.log('-----------', ps);
        this.paymentSettings = ps;
        loader.dismiss();
      },
      err => {
        loader.dismiss();
      });
    });
  }

}
