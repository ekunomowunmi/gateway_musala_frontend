import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-status',
  templateUrl: './payment-status.component.html',
  styleUrls: ['./payment-status.component.scss']
})
export class PaymentStatusComponent implements OnInit {

  data: any;

  constructor(
    public dialogRef: MatDialogRef<PaymentStatusComponent>,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  modalResponse(val?: any){
		this.dialogRef.close({data: val});
	}

}
