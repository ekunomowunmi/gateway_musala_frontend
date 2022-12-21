import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from 'src/app/services/events/events.service';
import { Handlers } from 'src/app/utils/handlers';
import { Shared } from 'src/app/utils/shared';

@Component({
  selector: 'app-aggregate',
  templateUrl: './aggregate.component.html',
  styleUrls: ['./aggregate.component.scss']
})
export class AggregateComponent implements OnInit {

  @Input() params: any;
  order_count: number = 5;
  orders: any[] = this.shared.orders_aggregate;

  constructor(
    private route: ActivatedRoute,
    private handlers: Handlers,
    private events: EventsService,
    private router: Router,
    private shared: Shared
  ) { }

  ngOnInit(): void {
  }

  navigate() {
    this.handlers.navigate('/dashboard/book-trip/order-confirmation', this.params);
  }

}
