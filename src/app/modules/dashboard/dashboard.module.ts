import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Handlers } from 'src/app/utils/handlers';
import { ComponentsModule } from 'src/app/components/components.module';
import { Shared } from 'src/app/utils/shared';
import { Constants } from 'src/app/utils/constants';
import { FormsValidation } from 'src/app/utils/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatNativeDateModule, MatRippleModule } from "@angular/material/core";
import { ProfileComponent } from './profile/profile.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { GatewayDetailsComponent } from './gateways/gateway-details/gateway-details.component';
import { DevicesComponent } from './devices/devices.component';
import { GatewaysComponent } from './gateways/gateways.component';
import { NewDeviceComponent } from './devices/new-device/new-device.component';

@NgModule({
    declarations: [
        DashboardComponent,
        LandingPageComponent,
        ProfileComponent,
        ECommerceComponent,
        GatewaysComponent,
        GatewayDetailsComponent,
        DevicesComponent,
        NewDeviceComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        DashboardRoutingModule,
        FormsModule,
        MatCardModule,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatStepperModule,
        MatFormFieldModule,
        MatIconModule,
        NgbModule,
        MatDialogModule,
        MatSliderModule,
        NgSelectModule,
        NgxIntlTelInputModule,
        MatExpansionModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatRippleModule,
        ComponentsModule,
    ],
    providers: [Handlers, Shared, Constants, FormsValidation ]
})
export class DashboardModule { }
