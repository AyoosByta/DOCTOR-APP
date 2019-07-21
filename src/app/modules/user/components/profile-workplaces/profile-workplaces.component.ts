import { AddWorkplaceModalComponent } from './../add-workplace-modal/add-workplace-modal.component';
import { ModalController } from '@ionic/angular';
import { GetService } from 'src/app/core/services/get.service';
import { DoctorDTO, WorkPlaceDTO } from 'src/app/api/models';
import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-profile-workplaces',
  templateUrl: './profile-workplaces.component.html',
  styleUrls: ['./profile-workplaces.component.scss'],
})
export class ProfileWorkplacesComponent implements OnInit {

  exclude: string[] = [];

  doctor: DoctorDTO;

  workplaces: WorkPlaceDTO[];

  constructor(
    private modalController: ModalController,
    private getService: GetService,
    private postService: PostService
  ) { }

  ngOnInit() {
    this.getDoctor();
    this.getWorkplaces();
  }

  getDoctor() {
    this.getService.getDoctor()
    .subscribe(doctor => {
      this.doctor = doctor;
    });
  }

  getWorkplaces() {
    this.getService.getWorkplaces()
    .subscribe(workplaces => {
      this.workplaces = workplaces;

      if (this.workplaces !== undefined) {
        workplaces.forEach(workplace => {
          this.exclude.push(workplace.name);
        });
      }
    });
  }

  deleteWorkplace(id: number) {
    this.postService.deleteWorkplace(id);
  }

  async addWorkplaceModal() {
    const modal = await this.modalController.create({
      component: AddWorkplaceModalComponent,
      componentProps: { exclude: this.exclude , did: this.doctor.id}
    });
    modal.present();
  }

  async updateWorkplaceModal(workPlaceUpdate) {
    const modal = await this.modalController.create({
      component: AddWorkplaceModalComponent,
      componentProps: { exclude: this.exclude , workPlace: workPlaceUpdate, updateMode: true}
    });
    modal.present();
  }
}
