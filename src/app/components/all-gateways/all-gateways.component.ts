import { Component, OnInit } from '@angular/core';
import { Gateway } from 'src/app/models/Gateway';
import { GatewaysService } from 'src/app/services/gateways/gateways.service';
import { Handlers } from 'src/app/utils/handlers';


@Component({
  selector: 'app-all-gateways',
  templateUrl: './all-gateways.component.html',
  styleUrls: ['./all-gateways.component.scss']
})
export class AllGatewaysComponent implements OnInit {

  gateways: Gateway[] = [];
    constructor(private gatewayService: GatewaysService, public handlers: Handlers) { }

  ngOnInit(): void {
    this.getallGateways();

  }

 async getallGateways(){
  this.gateways = await this.gatewayService.getAllGateways();
  console.log(this.gateways);
  }

  gatewayDetails(request: any) {
      console.log(request)
      const params = { gateway_id: request.id }
      this.handlers.navigate('/dashboard/my-gateway/gateway-details', params);
  }

  getdeviceLength(devices: any){
    return devices.length
  }

}
