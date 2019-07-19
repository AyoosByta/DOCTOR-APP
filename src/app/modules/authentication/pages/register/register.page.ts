import { PostService } from './../../../../core/services/post.service';
import { Component, OnInit } from '@angular/core';
import { DoctorDTO } from 'src/app/api/models';
import { Util } from 'src/app/core/util/util';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {
  doctor: DoctorDTO = {};

  password: string;

  constructor(private postService: PostService, private util: Util) {}

  ngOnInit() {}

  createAccount() {
    this.util.createLoader().then(loading => {
      loading.present();
      this.postService.addDoctor(this.doctor, this.password)
      .then(doctor => {
        console.log(doctor);
        loading.dismiss();
        this.util.navigateRoot();
      })
      .catch(err => {
        this.util.createToast('Unable To create Account');
      });
    });
  }
}
