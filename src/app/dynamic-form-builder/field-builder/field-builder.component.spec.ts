import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldBuilderComponent } from './field-builder.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('FieldBuilderComponent', () => {
  let component: FieldBuilderComponent;
  let fixture: ComponentFixture<FieldBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ FormsModule,
        ReactiveFormsModule],
      declarations: [ FieldBuilderComponent ],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
