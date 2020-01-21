import { Component, OnInit } from '@angular/core';
import{ILogin} from '../models/login'
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import {CaptchaService} from '../shared/captcha.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  public captchaval:string;
  public user:ILogin={
      username:"",
      password: "",
      missioncode: "UKVI",
      countrycode: "CIA"
  };
  constructor(private _service: LoginService, private _router: Router,private _captchaService:CaptchaService ) { }


  public isLoginError: any;
  ngOnInit() {
    this.captchaval = this._captchaService.generateCaptcha();
  }
  login(user): void {
    debugger;
    
   
    // this._service.userAuthentication(user).subscribe((data: any) => {
    //   debugger;
    //   if (data.isAuthenticated) {
    //     localStorage.setItem('userToken', data.accessToken);
    //     this._router.navigate(['dashboard']);
    //   }
    // },
    //   (error => {
    //     debugger
    //     // this.loading = false;
    //     if (error == 'The request Unauthorized') { this.isLoginError = 'Invalid username or password' }
    //     // else{this._toastr.handleErrorToastr(error)}}))
    //   }))
    this._router.navigate(['dashboard']);
  }
  refreshCaptch()
  {
    debugger;
    this.captchaval = this._captchaService.generateCaptcha();
    return false;
  }
  
}

