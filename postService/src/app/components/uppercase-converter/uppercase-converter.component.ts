import { Component } from '@angular/core';
import { UppercaseConverterService } from 'src/app/services/uppercase-converter.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-uppercase-converter',
  templateUrl: './uppercase-converter.component.html',
  styleUrls: ['./uppercase-converter.component.css']
})
export class UppercaseConverterComponent  {
   public result:any;
   public my_message:any;
   
     constructor(private _service:UppercaseConverterService){}
  public convert(obj:any) {
     this._service.toUpperCase(obj).subscribe(
      res=>this.result=res,
      (error:HttpErrorResponse) => {
        console.error(error); 
      });
  }
}
