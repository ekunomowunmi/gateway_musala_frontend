import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gateway } from 'src/app/models/Gateway';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GatewaysService {
  public baseUrl = "http://localhost:3000/api";

  constructor(private httpClient: HttpClient, private dataService: DataService) { }

  // async getAllGateways(): Promise<any[]>{
  //  return await new Promise((resolve, reject) => {
  //   this.httpClient.get(`${this.baseUrl}/gateways`)
  //   .subscribe({
  //     next: async(data: any) =>{
  //       resolve(data)
  //     },
  //     error: (error: any) => {
  //       reject(error);
  //     },
  //     complete: () => console.warn('complete')
  //   })
  //  })
  // }
    async getAllGateways(): Promise<any[]>{
   return await new Promise((resolve, reject) => {
    return of(this.dataService.getGateways()).subscribe({
      next: async(data: any) =>{
        resolve(data)
      },
      error: (error: any) => {
        reject(error);
      },
      complete: () => console.warn('complete')
    })
   })
  }

  async getGatewayById(id:any): Promise<any>{
    return await new Promise((resolve, reject) => {
      return of(this.dataService.getGateway(id)).subscribe({
       next: async(data: any) =>{
         resolve(data)
       },
       error: (error: any) => {
         reject(error);
       },
       complete: () => console.warn('complete')
     })
    })
   }

   async getAllDevices(): Promise<any[]>{
    return await new Promise((resolve, reject) => {
      return of(this.dataService.getDevices()).subscribe({
        next: async(data: any) =>{
          resolve(data)
        },
        error: (error: any) => {
          reject(error);
        },
        complete: () => console.warn('complete')
      })
     })
   }

   async getDeviceById(id:any): Promise<any>{
    return await new Promise((resolve, reject) => {
      return of(this.dataService.getDevice(id)).subscribe({
       next: async(data: any) =>{
         resolve(data)
       },
       error: (error: any) => {
         reject(error);
       },
       complete: () => console.warn('complete')
     })
    })
   }

   async getDeviceByGatewayId(id:any): Promise<any>{
    return await new Promise((resolve, reject) => {
      return of(this.dataService.getDeviceByGateway(id)).subscribe({
       next: async(data: any) =>{
         resolve(data)
       },
       error: (error: any) => {
         reject(error);
       },
       complete: () => console.warn('complete')
     })
    })
   }

   async addDeviceByGatewayId(device:any,gatewayId:any): Promise<any>{
    return await new Promise((resolve, reject) => {
      return of(this.dataService.addDeviceToGate(gatewayId,device)).subscribe({
       next: async(data: any) =>{
         resolve(data)
       },
       error: (error: any) => {
         reject(error);
       },
       complete: () => console.warn('complete')
     })
    })
   }


}
