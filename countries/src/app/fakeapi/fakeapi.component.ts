import { Component, OnInit } from '@angular/core';
import { GetapiService } from '../services/getapi.service';

@Component({
  selector: 'app-fakeapi',
  templateUrl: './fakeapi.component.html',
  styleUrls: ['./fakeapi.component.css']
})
export class FakeapiComponent implements OnInit {

  public values:any;

   constructor(private _service:GetapiService){ }

    ngOnInit(){
      this._service.featchApis().subscribe(
        (response:any)=> {
          this.values = response;
        },
        (error:any)=> {
          console.error('URL is not valid, Please check the URL')
        }
      )
    }
   }

