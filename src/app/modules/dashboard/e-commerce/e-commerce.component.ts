import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from 'src/app/services/events/events.service';

@Component({
  selector: 'app-e-commerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.scss']
})
export class ECommerceComponent implements OnInit {

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
