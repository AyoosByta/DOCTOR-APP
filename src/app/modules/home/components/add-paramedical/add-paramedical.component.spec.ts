import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParamedicalComponent } from './add-paramedical.component';

describe('AddParamedicalComponent', () => {
  let component: AddParamedicalComponent;
  let fixture: ComponentFixture<AddParamedicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddParamedicalComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddParamedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
