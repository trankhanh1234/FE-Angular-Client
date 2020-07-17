import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      password: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      username: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
  }, );
  }
  get f(){
    return this.registerForm.controls;
  }

  Login(f){

  }

}
