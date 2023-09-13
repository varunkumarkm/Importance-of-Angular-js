import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HelloServiceService {

  constructor(private _httpClient:HttpClient) { }

  public helloService():any{
    return this._httpClient.get('https://jsonplaceholder.typicode.com/posts/1')
  }
}
