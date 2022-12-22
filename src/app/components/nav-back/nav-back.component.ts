import { Component, Input, OnInit } from '@angular/core';
import { Handlers } from 'src/app/utils/handlers';

@Component({
  selector: 'app-nav-back',
  templateUrl: './nav-back.component.html',
  styleUrls: ['./nav-back.component.scss']
})
export class NavBackComponent implements OnInit {

  @Input() route!: string;
  @Input() params!: string;

  constructor(
    private handlers: Handlers
  ) { }

  ngOnInit(): void {
  }

  navBack(route?: string, params?: any) {
    // if(route) {
    //   this.handlers.navigate(route, params);
    // } else {
    //   this.handlers.navBack();
    // }
    this.handlers.navBack();
  }

}
