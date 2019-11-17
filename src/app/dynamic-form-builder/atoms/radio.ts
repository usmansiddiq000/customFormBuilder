import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'radio',
    template: `
      <div [formGroup]="form">
        <div class="form-check" *ngFor="let opt of field.options">
         <label>
        <input type="radio" value={{opt.key}} formControlName={{field.name}}>
          <span> {{opt.label}}</span>
        </label>
        </div>
      </div> 
    `
})
export class RadioComponent implements OnInit {
    @Input() field:any = {};
    @Input() form:FormGroup;
    ngOnInit() {
      console.log(this.form)
      console.log(this.field)
    }
}