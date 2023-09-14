import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetapiService {

  constructor(private _httpclient:HttpClient) { }

  public featchApis():any {
    return this._httpclient.get('https://jsonplaceholder.typicode.com/posts/1/comments');
  }
}
