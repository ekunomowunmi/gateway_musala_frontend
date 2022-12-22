import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Gateway } from 'src/app/models/Gateway';
import { GatewaysService } from 'src/app/services/gateways/gateways.service';
import { Handlers } from 'src/app/utils/handlers';

@Component({
  selector: 'app-gateway-details',
  templateUrl: './gateway-details.component.html',
  styleUrls: ['./gateway-details.component.scss']
})
export class GatewayDetailsComponent implements OnInit {

  params: any;
  gateway!: Gateway;
  newDeviceText = "Add New Device";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private handlers: Handlers,
    private gatewayService: GatewaysService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      if(!params || (params && !params.gateway_id)) {
        this.handlers.navigate('/dashboard/gateways')
      } else {
        this.params = params;
        this.getGateway();
        console.log(this.params)
      }
    });
  }

  async getGateway(){
    this.gateway = await this.gatewayService.getGatewayById(this.params.gateway_id);

  }

  addDeviceToGateway(){
    this.handlers.navigate('/dashboard/device/new')

  }


}
