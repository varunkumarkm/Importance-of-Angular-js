import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckinService } from 'src/app/services/checkin.service';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit {
  noOfbags: number = 0;
  data: any;

  constructor(private service: CheckinService, private router: Router) {}

  ngOnInit(): void {
    this.data = this.service.reservationData;
    if (!this.data) {
      console.error('Reservation data is not available.');
    }
  }

  public checkIn() {
    if (!this.data) {
      console.error('Reservation data is not available.');
      return;
    }

    let request = {
      "id": this.data.id,
      "checkIn": true,
      numberOfBags: this.noOfbags
    }
    this.service.checkIn(request).subscribe(
      (response: any) => {
        this.router.navigate(['/confirm'])
      });
  }
}
