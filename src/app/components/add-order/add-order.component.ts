import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent implements OnInit {

  data: any;

  constructor(
    public dialogRef: MatDialogRef<AddOrderComponent>,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  modalResponse(val?: any){
		this.dialogRef.close({data: val});
	}

}
