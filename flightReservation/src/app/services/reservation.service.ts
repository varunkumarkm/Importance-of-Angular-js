import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

   flightUrl:any = "http://localhost:8080/flightservices/flights"
   reservationUrl:any = "http://localhost:8080/flightservices/reservations"
   data:any;

  constructor(private _httpClient:HttpClient) { }

  public getFlights(criteria:any):any{
    return this._httpClient.get(this.flightUrl+"?from="+criteria.from+"&to="+criteria.to+"&departureDate="+criteria.departureDate);
  }

  public getFlight(id:number):any {
    return this._httpClient.get(this.flightUrl+"/"+id);
  }

  public saveReservation(reservation:any):any {
    return this._httpClient.post(this.reservationUrl,reservation);
  }
}
