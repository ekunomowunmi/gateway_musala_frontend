import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/models/Device';
import { GatewaysService } from 'src/app/services/gateways/gateways.service';
import { Handlers } from 'src/app/utils/handlers';

@Component({
  selector: 'app-new-device',
  templateUrl: './new-device.component.html',
  styleUrls: ['./new-device.component.scss']
})
export class NewDeviceComponent implements OnInit {
  status= ["ONLINE","OFFLINE"];
  selectedStatus = '';
  uid: any;
  vendor = ''
  btnText="Save";

  constructor(private gatewayService: GatewaysService,
    private handlers: Handlers ) { }

  ngOnInit(): void {
  }

  async saveDevice(){
    const device: Device = {
      status: this.selectedStatus,
      vendor: this.vendor,
      uid: this.uid,
      dateCreated: new Date(Date.now()).toLocaleDateString(),
      gatewayId: 1,
      id: Math.random()
    }

    await this.gatewayService.addDeviceByGatewayId(device,1);
    this.handlers.navigate('/dashboard/devices')
  }

}
