import { Component, OnInit } from '@angular/core';
import { HelloServiceService } from 'src/app/services/hello-service.service';
import { CustomerServiceService } from 'src/app/services/customer-service.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-multiple-service',
  templateUrl: './multiple-service.component.html',
  styleUrls: ['./multiple-service.component.css']
})
export class MultipleServiceComponent implements OnInit {
  public helloResponse:any;
  public customerResponse:any;
 constructor(private _helloService:HelloServiceService,private _customerService:CustomerServiceService){ }

 ngOnInit(){
    forkJoin([this._helloService.helloService(), this._customerService.getCustomers()])
    .subscribe(response=>{
      this.helloResponse = response[0];
      this.customerResponse = response[0];
    })
 }
}
