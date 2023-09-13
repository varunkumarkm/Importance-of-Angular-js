import { Component } from '@angular/core';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent {
  sellers:string[];
  hide:boolean;

  constructor(){
    this.sellers = ['BestBuy', 'Amazon', 'flipcart']
    this.hide = true;
  }
  getSellers():string[]{
    return this.sellers;
  }
  toggle(){
    return this.hide!=this.hide
  }
}

