import { Device } from './../../models/Device';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private gateways = [
    {
        "id": 1,
        "serialNumber": "abcdefg",
        "name": "Gateway1",
        "ipAddress": "192.168.0.1",
        "devices": [
            {
                "id": 123456789,
                "uid": 111,
                "vendor": "Adewunmi",
                "dateCreated": "09/09/2022",
                "status": "ONLINE",
                "gatewayId": 1
            },
            {
                "id": 234567891,
                "uid": 112,
                "vendor": "Adetola",
                "dateCreated": "08/09/2022",
                "status": "OFFLINE",
                "gatewayId": 1
            }
        ]
    },
    {
        "id": 2,
        "serialNumber": "hijklmn",
        "name": "Gateway2",
        "ipAddress": "192.168.0.2",
        "devices": [
            {
                "id": 345678912,
                "uid": 113,
                "vendor": "Adegoke",
                "dateCreated": "09/09/2022",
                "status": "ONLINE",
                "gatewayId": 2
            },
            {
                "id": 456789123,
                "uid": 114,
                "vendor": "Adegbenro",
                "dateCreated": "08/05/2022",
                "status": "ONLINE",
                "gatewayId": 2
            }
        ]
    }
]

  constructor() { }

  public getGateways(){
    return this.gateways
  }

  public getGateway(id: any){
    return this.gateways.filter(gateway => gateway.id == id)[0]
  }

  public getDevices(){
   const allDevices = this.gateways.map(gateway => gateway.devices);
   const flatDevices = this.flatten(allDevices);
   return flatDevices;
  }

  public flatten = (ary:any) => ary.reduce((a:any, b:any) => a.concat(Array.isArray(b) ? this.flatten(b) : b), [])

  

  public getDeviceByGateway(gatewayId: any){
    const devices = this.gateways.map(gateway => {
      gateway.devices.map(device => device.gatewayId == gatewayId);
    });
    const flatDevices = this.flatten(devices);
    return flatDevices;
   }

   public getDevice(id: any){
    const device = this.gateways.map(gateway => {
      gateway.devices.map(device => device.id == id);
    });
    return device;
   }

   public addDeviceToGate(gatewayId: any, device: any){
    const gateway = this.gateways.filter(gateway => gateway.id == gatewayId)[0];
    gateway.devices.push(device);
    
   }
}
