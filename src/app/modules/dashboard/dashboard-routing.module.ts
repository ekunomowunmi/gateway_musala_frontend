import { GatewayDetailsComponent } from './gateways/gateway-details/gateway-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProfileComponent } from './profile/profile.component';
import { GatewaysComponent } from './gateways/gateways.component';
import { DevicesComponent } from './devices/devices.component';
import { NewDeviceComponent } from './devices/new-device/new-device.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: LandingPageComponent
            },
            {
                path: 'gateways',
                component: GatewaysComponent
            },
            {
                path: 'profile',
                component: ProfileComponent
            },
            {
                path: 'e-commerce',
                component: ECommerceComponent
            },
            {
              path: 'my-gateway/gateway-details',
              component: GatewayDetailsComponent
          },

            {
              path: 'devices',
              component: DevicesComponent
          },
          {
            path:'device/new',
            component: NewDeviceComponent
          },
            {
                path: '**',
                redirectTo: 'home'
            }
            // { path: 'home', component: LandingPageComponent },
        ]
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
