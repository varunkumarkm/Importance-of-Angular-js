import { Component } from '@angular/core';

@Component({
  selector: 'app-if-examp',
  templateUrl: './if-examp.component.html',
  styleUrls: ['./if-examp.component.css']
})
export class IfExampComponent {
   x:number;
   y:number;
   constructor(){
    this.x = 10;
    this.y = 20;
   }
}
