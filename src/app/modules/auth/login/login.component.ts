import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/utils/constants';
import { Handlers } from 'src/app/utils/handlers';
import { Shared } from 'src/app/utils/shared';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public currentRoutePath!: any;
  public _path!: any;
  input_type: string = 'password';
  btnText: string = 'Sign In';

  constructor(
    public handlers: Handlers,
    public shared: Shared,
    public constants: Constants,
  ) { }

  ngOnInit(): void {
  }
  
  init() {
    
  }

  go(route:any, mode:any) {

  }

  changeInputType() {
    if(this.input_type === 'password') {
      this.input_type = 'text';
    } else {
      this.input_type = 'password';
    }
  }

  login() {
    console.log("hey")
    this.handlers.navigate('/dashboard');
  }

  register() {
    this.handlers.navigate('/auth/register');
  }
}
