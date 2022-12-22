import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/utils/constants';
import { Handlers } from 'src/app/utils/handlers';
import { Shared } from 'src/app/utils/shared';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public currentRoutePath!: any;
  public _path!: any;
  input_type_1: string = 'password';
  input_type_2: string = 'password';
  btnText: string = 'Next';

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

  changeInputType(pass_count: number) {
    if(pass_count === 0) {
      if(this.input_type_1 === 'password') {
        this.input_type_1 = 'text';
      } else {
        this.input_type_1 = 'password';
      }
    } else {
      if(this.input_type_2 === 'password') {
        this.input_type_2 = 'text';
      } else {
        this.input_type_2 = 'password';
      }
    }
  }

  next() {
    this.handlers.navigate('/auth/verify-otp');
  }

}
