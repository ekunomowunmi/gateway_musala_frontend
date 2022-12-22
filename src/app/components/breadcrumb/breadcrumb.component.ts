import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events/events.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  constructor(
    public events: EventsService
  ) { }

  ngOnInit(): void {
    console.log(this.events.breadcrumb);
  }

  ngAfterViewInit(): void {
    console.log(this.events.breadcrumb);
    
  }

}
