import { Component } from '@angular/core';

@Component({
  selector: 'app-showroom-cars',
  templateUrl: './showroom-cars.component.html',
  styleUrls: ['./showroom-cars.component.css']
})
export class ShowroomCarsComponent {
 
  cars:any[]
  constructor(){
    this.cars = [
      {
        id:'1',
        name:'honda verna',
        model:'2018',
      },
      {
        id:'2',
        name:'MG hector',
        model:'2017',
      },
      {
        id:'3',
        name:'nexa baleno',
        model:'2020',
      }
    ];
  }
  public getCars(){
    return this.cars;
  }
}
