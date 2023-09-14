import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public personForm:FormGroup;
  public countries:string[]

  constructor(){
    this.countries = ['India','USA','Canada','Germany']
    this.personForm = new FormGroup({
      firstName:new FormControl('varun',[Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10)]),
      lastName:new FormControl(),
      email:new FormControl(),
      address:new FormGroup({
        street:new FormControl(),
        city:new FormControl(),
        country:new FormControl(),
      }),
      gender:new FormControl()

    });
  }

  public onSubmit(){
    console.log(this.personForm.value);
  }
}
