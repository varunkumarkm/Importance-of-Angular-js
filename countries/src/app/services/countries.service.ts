import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private _httpClient:HttpClient) { }

  public getApis():any {
    return this._httpClient.get('https://jsonplaceholder.typicode.com/posts')
  }
}
