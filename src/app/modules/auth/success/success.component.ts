import { Component, OnInit } from '@angular/core';
import { Handlers } from '../../../utils/handlers';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {
  btnText: string = 'Sign In';

  constructor(
    public handlers: Handlers,
  ) { }

  ngOnInit(): void {
  }

  next() {
    this.handlers.navigate('/auth/login');
  }

}
