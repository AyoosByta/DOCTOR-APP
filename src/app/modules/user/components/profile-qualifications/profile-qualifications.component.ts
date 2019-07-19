import { AddQualificationModalComponent } from "./../add-qualification-modal/add-qualification-modal.component";
import { ModalController } from "@ionic/angular";
import { PostService } from "./../../../../core/services/post.service";
import { QualificationDTO } from "./../../../../api/models/qualification-dto";
import { DoctorDTO } from "src/app/api/models";
import { Component, OnInit } from "@angular/core";
import { GetService } from "src/app/core/services/get.service";

@Component({
  selector: "app-profile-qualifications",
  templateUrl: "./profile-qualifications.component.html",
  styleUrls: ["./profile-qualifications.component.scss"]
})
export class ProfileQualificationsComponent implements OnInit {

  doctor: DoctorDTO;

  qualifications: QualificationDTO[] = [];

  exclude: string[] = [];

  constructor(
    private getService: GetService,
    private postService: PostService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.getDoctor();
    this.getQualifications();
  }

  getQualifications() {
    this.getService.getQualifications().subscribe(qualifications => {
      this.qualifications = qualifications;
      if (qualifications != undefined) {
        qualifications.forEach(qualification => {
          this.exclude.push(qualification.qualification);
        });
      }
    });
  }

  getDoctor() {
    this.getService.getDoctor()
    .subscribe(doctor => {
      this.doctor = doctor;
    });
  }

  deleteQualification(id) {
    this.postService.deleteQualification(id);
  }

  async addQualificationModal() {
    const modal = await this.modalController.create({
      component: AddQualificationModalComponent,
      componentProps: { exclude: this.exclude , did: this.doctor.id}
    });
    modal.present();
  }
}
