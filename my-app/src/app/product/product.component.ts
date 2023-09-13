import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class productComponent  {

  products:any[];
   constructor(){
    this.products = [
      {
        id:"1",
        name:"lenevo laptops"
      },
      {
        id:"2",
        name:"Mac book laptop"
      },
      {
        id:"3",
        name:"hp laptop"
      }
    ];
   }
   public getProducts(){
    return this.products;
   }
}
