import { qualifications } from './../../../../core/mocks/qualification.list';
import { LocationService } from './../../../../core/services/location.service';
import { PostService } from 'src/app/core/services/post.service';
import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-qualification-modal',
  templateUrl: './add-qualification-modal.component.html',
  styleUrls: ['./add-qualification-modal.component.scss']
})
export class AddQualificationModalComponent implements OnInit {

  firstTime = true;

  @Input() exclude: string[] = [];

  did: number;

  selected: string[] = [];

  suggestions: string[] = [];

  searchTerm: string = '';

  constructor(
    private modalController: ModalController,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.search();
  }

  search() {
    this.firstTime = false;
    const searchTermtemp = this.searchTerm;
    this.suggestions = qualifications.filter(function(e) {
      return this.indexOf(e) < 0 && e.match(new RegExp(searchTermtemp , 'g'));
    }, this.exclude);
    console.log(this.suggestions);
  }

  select(qualification) {
    this.selected.push(qualification);
    this.exclude.push(qualification);
    this.search();

    console.log(this.selected.length);
  }

  remove(qualification) {
    this.selected = this.selected.filter(
      qualificationSelected => qualificationSelected !== qualification);
    this.exclude = this.exclude.filter(
      qualificationExcluded => qualificationExcluded != qualification);
    this.search();
  }

  cancel() {
    this.modalController.dismiss();
  }

  save() {
    this.selected.forEach(qualificationName => {
      this.postService.addQualification(qualificationName , this.did)
      this.modalController.dismiss();
    })
  }
}
