import { Component, OnInit } from '@angular/core';
import { Handlers } from 'src/app/utils/handlers';

@Component({
  selector: 'app-auth-back',
  templateUrl: './auth-back.component.html',
  styleUrls: ['./auth-back.component.scss']
})
export class AuthBackComponent implements OnInit {

  constructor(
    private handlers: Handlers
  ) { }

  ngOnInit(): void {
  }

  back() {
    this.handlers.navBack();
  }

}
