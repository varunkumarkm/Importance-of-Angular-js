import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-examp',
  templateUrl: './switch-examp.component.html',
  styleUrls: ['./switch-examp.component.css']
})
export class SwitchExampComponent {
     atm:string;
     constructor(){
      this.atm = 'Withdrawl';
     }
}
