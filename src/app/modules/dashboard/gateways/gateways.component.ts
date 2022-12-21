import { EventsService } from './../../../services/events/events.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gateways',
  templateUrl: './gateways.component.html',
  styleUrls: ['./gateways.component.scss']
})
export class GatewaysComponent implements OnInit {

  date!: any;

  constructor(
    private events: EventsService
  ) { }

  ngOnInit(): void {
    this.events.breadcrumb = ['Dashboard'];
  }

  dateChange(e: any) {

  }
}
