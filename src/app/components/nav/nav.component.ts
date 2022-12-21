import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventsService } from 'src/app/services/events/events.service';
import { Handlers } from 'src/app/utils/handlers';
import { Config, Menu } from './types';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() options!: any;
  @Input() menus!: Menu[];
  config!: Config;
  @Output() public closeMenu:any = new EventEmitter();

  constructor(
    public handlers: Handlers,
    public events: EventsService
  ) { }

  ngOnInit(): void {
    this.config = this.mergeConfig(this.options);
  }

  mergeConfig(options: Config) {
    const config = {
      // selector: '#accordion',
      multi: true
    };

    return { ...config, ...options };
  }

  toggle(index: number, menu: Menu) {
    if (!this.config.multi) {
      this.menus.filter(
        (menu, i) => i !== index && menu.active
      ).forEach(menu => menu.active = !menu.active);

      if(menu.submenu?.length === 0) {
        this.menus.map(m => {
          m.submenu?.map(s => {
            s.active = false;
          });
        });
      }
    }
    this.menus[index].active = !this.menus[index].active;
    this.closeMenu.emit(true);


    // if(!menu.active) {
    //   // submenu를
    //   if (!this.config.multi) {
    //     this.menus.filter(
    //       (menu, i) => i !== index && menu.active
    //     ).forEach(menu => menu.active = !menu.active);

    //     if(menu.submenu?.length === 0) {
    //       this.menus.map(m => {
    //         m.submenu?.map(s => {
    //           s.active = false;
    //         });
    //       });
    //     }
    //   }
    //   // Menu active를
    //   this.menus[index].active = !this.menus[index].active;
    // }
  }

  toggle2(menu: Menu, index: number, j: number) {
    this.menus.map((m, i) => {
      if(i === index) {
        menu.submenu?.filter(
          (submenu, k) => k !== j && submenu.active
        ).forEach(submenu => submenu.active = !submenu.active);
        
        m.submenu?.map((s, m) => {
          if(m === j) {
            s.active = !s.active;
          }
        });
      } else {
        m.submenu?.map(s => {
          s.active = false;
        })
      }
    });
  }

}
