import { PostService } from './../../../../core/services/post.service';
import { Component, OnInit } from '@angular/core';
import { DoctorDTO } from 'src/app/api/models';
import { Util } from 'src/app/core/util/util';
import { GetService } from 'src/app/core/services/get.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {
  doctor: DoctorDTO = {};

  password: string;

  constructor(private postService: PostService, private util: Util,
    private getService: GetService) {}

  ngOnInit() {
    this.getService.setResetFlag(true);
  }

  createAccount() {
    this.util.createLoader().then(loading => {
      loading.present();
      this.postService.addDoctor(this.doctor, this.password ,()=>{
        loading.dismiss();
        this.util.navigateRoot();
      } , (err)=>{
        this.util.createToast('Unable To create Account').then(toast=>{
          toast.present();
          loading.dismiss();
        });
      })
    });
  }
}
