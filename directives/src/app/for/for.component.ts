import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent {
  cources:string[];
  students:any[];
  color:string;
  fontSize:string;
  useTdata:boolean;
  classObj:any;

  constructor(){
    this.cources = ['java', 'angular', 'bootstrap', 'spring']
    this.students = [
      {
        id:'1',
        name:'varun',
        course:'java',
        testScore:'91'
      },
      {
        id:'2',
        name:'prashnth',
        course:'MySQL',
        testScore:'90'
      },
      {
        id:'3',
        name:'anil',
        course:'spring',
        testScore:'95'
      },
    ];
    this.color = 'yellow';
    this.fontSize = "40";
    this.useTdata = true;
    this.classObj = {
      tdata:this.useTdata
    }
  }
}
