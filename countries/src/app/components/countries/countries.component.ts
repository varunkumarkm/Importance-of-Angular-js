import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  public data:any; 

  constructor(private _service: CountriesService) { }

  ngOnInit() {
    this._service.getApis().subscribe(
       (response:any)=>{
        this.data = response;
      },
      (error:any)=>{
         console.error('Api link is giving an error, Please check the URL');
      }
    );
  }
}
