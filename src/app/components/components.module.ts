import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button'
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MainBtnComponent } from './main-btn/main-btn.component'
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { AuthBackComponent } from './auth-back/auth-back.component';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ProfileBtnComponent } from './profile-btn/profile-btn.component';
import { SearchComponent } from './search/search.component';
import { ListFilterPipe } from '../pipes/list-filter/list-filter.pipe';
import { PopoverModule } from "ngx-smart-popover";
import { NavBackComponent } from './nav-back/nav-back.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule, NgxMatNativeDateModule } from '@angular-material-components/datetime-picker';
import { AggregateComponent } from './aggregate/aggregate.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { PaymentStatusComponent } from './payment-status/payment-status.component';
import { ItemChecklistComponent } from './item-checklist/item-checklist.component';
import { RatingComponent } from './rating/rating.component';
import { WalletFilterPipe } from '../pipes/wallet-filter/wallet-filter.pipe';
import { PopupModule } from '@progress/kendo-angular-popup';
import { NotificationComponent } from './notification/notification.component';
import { FilterComponent } from './filter/filter.component';
import { AllGatewaysComponent } from './all-gateways/all-gateways.component';
import { ArrayLengthPipe } from '../pipes/array-length.pipe';
import { AddDeviceComponent } from './add-device/add-device.component';

@NgModule({
  exports: [
    MainBtnComponent,
    AuthBackComponent,
    NavComponent,
    MenuComponent,
    BreadcrumbComponent,
    ProfileBtnComponent,
    SearchComponent,
    AllGatewaysComponent,
    ListFilterPipe,
    WalletFilterPipe,
    ArrayLengthPipe,
    NavBackComponent,
    AggregateComponent,
    ConfirmationComponent,
    AddOrderComponent,
    PaymentStatusComponent,
    ItemChecklistComponent,
    RatingComponent,
    NotificationComponent,
    FilterComponent,
  ],
  declarations: [
    MainBtnComponent,
    AuthBackComponent,
    NavComponent,
    MenuComponent,
    BreadcrumbComponent,
    ProfileBtnComponent,
    SearchComponent,
    AllGatewaysComponent,
    ListFilterPipe,
    WalletFilterPipe,
    ArrayLengthPipe,
    NavBackComponent,
    AggregateComponent,
    ConfirmationComponent,
    AddOrderComponent,
    PaymentStatusComponent,
    ItemChecklistComponent,
    RatingComponent,
    NotificationComponent,
    FilterComponent,
    AllGatewaysComponent,
    AddDeviceComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    MatDialogModule,
    MatButtonModule,
    MatSliderModule,
    NgSelectModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatRippleModule,
    MatStepperModule,
    PopoverModule,
    MatDatepickerModule,
    NgxIntlTelInputModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    PopupModule,
  ]
})
export class ComponentsModule { }
