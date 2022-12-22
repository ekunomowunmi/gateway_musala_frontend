import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { Handlers } from 'src/app/utils/handlers';
import { Shared } from 'src/app/utils/shared';
import { ComponentsModule } from 'src/app/components/components.module';
import { MatRippleModule } from '@angular/material/core';
import { RegisterComponent } from './register/register.component';
import { SuccessComponent } from './success/success.component';
import { NgOtpInputModule } from  'ng-otp-input';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


@NgModule({
  declarations: [AuthComponent, LoginComponent, RegisterComponent, SuccessComponent, ForgotPasswordComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgOtpInputModule,
    AuthRoutingModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatRippleModule,
    ComponentsModule
  ],
  providers: [Handlers, Shared]
})
export class AuthModule { }
