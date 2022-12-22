import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-checklist',
  templateUrl: './item-checklist.component.html',
  styleUrls: ['./item-checklist.component.scss']
})
export class ItemChecklistComponent implements OnInit {

  data: any;

  constructor(
    public dialogRef: MatDialogRef<ItemChecklistComponent>,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  modalResponse(val?: any){
		this.dialogRef.close({data: val});
	}

}
