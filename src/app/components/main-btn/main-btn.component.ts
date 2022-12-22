import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-btn',
  templateUrl: './main-btn.component.html',
  styleUrls: ['./main-btn.component.scss']
})
export class MainBtnComponent implements OnInit {

  @Input() btnText!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
