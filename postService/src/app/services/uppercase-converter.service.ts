import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UppercaseConverterService {

  constructor(private _httpClient:HttpClient) { }

  public toUpperCase(obj:any){

   return this._httpClient.post('https://fakestoreapi.com/products',obj)
  }
}
