import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/models/Device';
import { GatewaysService } from 'src/app/services/gateways/gateways.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

   devices: Device[] = []

  constructor(private gatewayService: GatewaysService) { }

  ngOnInit(): void {
    this.getDevices();
  }

  async getDevices(){
    this.devices =  await this.gatewayService.getAllDevices();
  }

}
