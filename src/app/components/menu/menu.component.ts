import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Config, Menu } from '../nav/types';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  // signle open mode
  options: Config = { multi: false };

  menus: Menu[] = [
    {
      name: 'Dashboard',
      icon: 'assets/icons/dashboard.svg',
      active: true,
      url: '/dashboard/home',
      submenu: [],
    },
    {
      name: 'Gateways',
      icon: 'assets/icons/wallet.svg',
      active: false,
      url: '/dashboard/gateways',
      submenu: []
    },
    {
      name: 'Devices',
      icon: 'assets/icons/profile.svg',
      active: false,
      url: '/dashboard/devices',
      submenu: []
    },
    {
      name: 'Gateway',
      icon: 'assets/icons/settings.svg',
      active: false,
      url: '/dashboard/gateway/:id',
      submenu: []
    }
  ];

  panelOpenState = false;
  @Output() public closeMenu:any = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  doCloseMenu(data: any):void {
    this.closeMenu.emit(data);
  }

}
