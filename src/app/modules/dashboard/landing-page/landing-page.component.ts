import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from 'src/app/services/events/events.service';
import { GatewaysService } from 'src/app/services/gateways/gateways.service';
import { Handlers } from 'src/app/utils/handlers';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  date!: any;
  gatewaysLength: number = 0;
  deviceLength: number = 0;

  constructor(
    private events: EventsService,
    private gatewayService: GatewaysService,
    private handlers: Handlers,

  ) { }

  ngOnInit(): void {
    this.events.breadcrumb = ['Dashboard'];
    this.getLengths();
  }

  dateChange(e: any) {

  }

  gotoGateways(){
    this.handlers.navigate('/dashboard/gateways');
  }

  gotoDevices(){
    this.handlers.navigate('/dashboard/devices');
  }

  async getLengths(){
    this.gatewaysLength =  (await this.gatewayService.getAllGateways()).length;
    this.deviceLength = (await this.gatewayService.getAllDevices()).length
    }

}
