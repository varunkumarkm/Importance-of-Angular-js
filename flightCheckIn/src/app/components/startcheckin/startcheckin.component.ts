import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CheckinService } from 'src/app/services/checkin.service';

@Component({
  selector: 'app-startcheckin',
  templateUrl: './startcheckin.component.html',
  styleUrls: ['./startcheckin.component.css']
})
export class StartcheckinComponent {

  reservationId:number=0;

  constructor(private service:CheckinService, private router:Router){ }

  public onClick(){
    this.service.getReservation(this.reservationId).subscribe(
      (response:any)=>{
        this.service.reservationData = response;
        this.router.navigate(['checkIn'])
      }
    )
  }
}
