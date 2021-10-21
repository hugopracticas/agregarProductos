import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() control: FormControl;
  @Input() label: string;

  showErrors(){
    const { touched, dirty, errors } = this.control;
    return touched && dirty && errors;
  }

}
