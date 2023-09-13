import { Component } from '@angular/core';

@Component({
  selector: 'app-carseller',
  templateUrl: './carseller.component.html',
  styleUrls: ['./carseller.component.css']
})
export class CarsellerComponent {
  saleCar:string[];
  hide:boolean;

  constructor(){
    this.saleCar = ['Honda showroom', 'Nexa showroom', 'MG Hector showroom']
    this.hide = false;
  }
  public getSales():string[]{
    return this.saleCar;
  }
  public toggle(){
   this.hide =! this.hide
  }
}
