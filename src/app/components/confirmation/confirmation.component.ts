import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from 'src/app/services/events/events.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { Handlers } from 'src/app/utils/handlers';
import { Shared } from 'src/app/utils/shared';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  @Input() params: any;
  orders: any[] = this.shared.orders_aggregate;
  trips!: any[];

  constructor(
    private route: ActivatedRoute,
    private handlers: Handlers,
    private events: EventsService,
    private router: Router,
    private shared: Shared,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    console.log(this.orders);
    console.log(this.params);
    this.createTrips();
  }

  navigate(route: string) {
    this.handlers.navigate(route);
  }

  createTrips() {
    const trips: any[] = [];
    let trip: any[] = [];
    this.orders.map((o, i) => {
      let index = i + 1;
      trip.push(o);
      if((index % 4 === 0)) {
        trips.push(trip);
        trip = [];
      }
    });
    this.trips = trips;
  }

  makePayment() {
    const data = {
      message: 'Trips Successfully booked',
      icon: 'assets/icons/check-success.svg',
      btn: 'Go to Orders',
    };
    
    // const data = {
    //   message: 'Payment failed Kindly try Top Up your wallet and retry',
    //   icon: 'assets/icons/check-failed.svg',
    //   btn: 'Return to Payment',
    // };

    this.modalService.PaymentStatus(data)
    .subscribe(
      (res: any) => {
        console.log(res);
        if(res && res.data) {
          this.navigate('/dashboard/my-trips');
        }
      },
      err => {
        console.log(err);
      }
    )
  }

}
