import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddOrderComponent } from 'src/app/components/add-order/add-order.component';
import { ItemChecklistComponent } from 'src/app/components/item-checklist/item-checklist.component';
import { PaymentStatusComponent } from 'src/app/components/payment-status/payment-status.component';
import { RatingComponent } from 'src/app/components/rating/rating.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private matDialog: MatDialog
  ) { }

  AddOrder(data: any){
		let dialogRef: MatDialogRef<AddOrderComponent>;
		dialogRef = this.matDialog.open(AddOrderComponent);
		dialogRef.componentInstance.data = data;
		dialogRef.updateSize('350px');
		dialogRef.addPanelClass(['add-order', 'animate__animated','animate__slideInLeft']);
		return dialogRef.afterClosed();
	}

  PaymentStatus(data: any){
		let dialogRef: MatDialogRef<PaymentStatusComponent>;
		dialogRef = this.matDialog.open(PaymentStatusComponent);
		dialogRef.componentInstance.data = data;
		dialogRef.updateSize('350px');
		dialogRef.addPanelClass(['add-order', 'animate__animated','animate__slideInLeft']);
		return dialogRef.afterClosed();
	}

  ItemChecklist(data: any){
		let dialogRef: MatDialogRef<ItemChecklistComponent>;
		dialogRef = this.matDialog.open(ItemChecklistComponent);
		dialogRef.componentInstance.data = data;
		dialogRef.updateSize('450px');
		dialogRef.addPanelClass(['add-order', 'animate__animated','animate__slideInLeft']);
		return dialogRef.afterClosed();
	}

  Rating(data: any){
		let dialogRef: MatDialogRef<RatingComponent>;
		dialogRef = this.matDialog.open(RatingComponent);
		dialogRef.componentInstance.data = data;
		dialogRef.updateSize('450px');
		dialogRef.addPanelClass(['add-order', 'animate__animated','animate__slideInLeft']);
		return dialogRef.afterClosed();
	}

}
