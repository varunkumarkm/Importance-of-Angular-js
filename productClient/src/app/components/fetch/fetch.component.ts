import { Component, OnInit } from '@angular/core';
import {ProductDataService} from '../../services/product-data.service'


@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent implements OnInit {
  public getProductResponse:any;
  public id:number;

  constructor(private _service:ProductDataService) { }

  ngOnInit() {
  }

  public getProduct(id:number){
    this._service.getProduct(id).subscribe(res=>{
      this.getProductResponse = res;
    })
  }

}
