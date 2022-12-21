import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
  }

  openMenu() {
    const app_menu = document.querySelector('.left-container');
    const cover_area = document.querySelector('.cover_area');
    cover_area?.classList.add('backdrop');
    app_menu?.classList.toggle('hamburger-menu');
  }

  closeMenu() {
    const app_menu = document.querySelector('.left-container');
    const cover_area = document.querySelector('.cover_area');
    cover_area?.classList.remove('backdrop');
    app_menu?.classList.toggle('hamburger-menu');
  }

  doCloseMenu(data: any):void {
    if(data) {
      this.closeMenu();
    }
  }

}
