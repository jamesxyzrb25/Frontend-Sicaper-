import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserLogin } from './login';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { isError } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  user: UserLogin = new UserLogin();

  @ViewChild("formLogin", { static: false }) formLogin: NgForm;

  constructor(private router: Router,
              private authService: AuthService,
              private location: Location) { }

  public isError = false;

  ngOnInit(): void {
  }

  onLogin(){
    return this.authService
        .loginuser(this.user.user, this.user.password)
        .subscribe(data =>{
          console.log(data);
        },
        error => console.log(error)
        );
  }

  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }

  //login() {
    //this.router.navigate(['/usuario']);
  //}

}
