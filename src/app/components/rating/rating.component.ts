import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  data: any;
  currentRate = 1;

  constructor(
    public dialogRef: MatDialogRef<RatingComponent>,
    private router: Router,
    config: NgbRatingConfig
  ) {
    config.max = 5;
  }

  ngOnInit(): void {
    console.log(this.data);
  }

  modalResponse(val?: any){
		this.dialogRef.close({data: val});
	}

  _rateChange(e: any) {
    console.log(e);
    console.log(this.currentRate);
  }

}
