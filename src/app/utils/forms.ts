import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MustMatch } from './password.validator';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FormsValidation {

    constructor(private formBuilder: FormBuilder) { }

    LoginForm() {
        const form = this.formBuilder.group({
            phone: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(225)])],
            password: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(225)])],
        });
        return form;
    }
}