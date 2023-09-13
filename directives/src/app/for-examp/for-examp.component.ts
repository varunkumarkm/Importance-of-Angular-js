import { Component } from '@angular/core';

@Component({
  selector: 'app-for-examp',
  templateUrl: './for-examp.component.html',
  styleUrls: ['./for-examp.component.css']
})
export class ForExampComponent {
   movies:any[];
   constructor(){
    this.movies = [
      {
        title:'king-kong',
        language:'english',
        releseYear:'2011'
      },
      {
        title:'jawan',
        language:'hindi',
        releseYear:'2023'
      },
      {
        title:'jailer',
        language:'tamil',
        releseYear:'2023'
      },
    ];
   }
}
