import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-field-builder',
  templateUrl: './field-builder.component.html',
  styleUrls: ['./field-builder.component.css']
})
export class FieldBuilderComponent implements OnInit {
  @Input() field:any;
  @Input() form:any
  @Input() order:any;
  constructor() { }

  ngOnInit() {
    console.log('ffff')
    console.log(this.field)
  }

}
