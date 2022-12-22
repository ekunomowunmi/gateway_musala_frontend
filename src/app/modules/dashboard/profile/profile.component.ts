import { Component, OnInit } from '@angular/core';
import { Shared } from 'src/app/utils/shared';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  date!: any;
  branches: any[] = this.shared.branches;

  constructor(
    private shared: Shared
  ) { }

  ngOnInit(): void {
  }

  dateChange(e: any) {

  }

}
