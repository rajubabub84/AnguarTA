import { Component, OnInit } from '@angular/core';
import { ILogin } from '../models/login'
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import {CaptchaService} from '../shared/captcha.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  public captchaval: string;
  public captchmatch: boolean=true;
  public errorDescription: string;
  public loading:Boolean = false;
  public isLoginError: any;

  public user: ILogin = {
    username: "",
    password: "",
    captcha:""
  };
  constructor(private _service: LoginService, private _router: Router,private _captchaService:CaptchaService ) { }

  ngOnInit() {
    localStorage.removeItem('userToken');
    this.captchaval = this._captchaService.generateCaptcha();
    localStorage.setItem('captcha', this.captchaval);
  }
  login(user): boolean {
    this.loading = true;
   let captcha = localStorage.getItem("captcha").replace(/\s/g, "");
    if(user.captcha!= captcha)
    {
      this.captchmatch =false;
      this.refreshCaptch();
      this.loading = false;
      return false;
    }
    this.captchmatch =true;
    this._service.userAuthentication(user).subscribe((data: any) => {
      debugger;
      if (data.isAuthenticated) {
        this.captchmatch =false;
        localStorage.setItem('userToken', data.accessToken);
        this.loading = false;
        this._router.navigate(['dashboard']);
      }
      else
      {
       this.errorDescription = data.error.description;
       this.refreshCaptch();
       this.loading = false;
        
      }
    },
      (error => {
        debugger
        this.loading = false;
        if (error == 'The request Unauthorized') { this.isLoginError = 'Invalid username or password' }
        // else{this._toastr.handleErrorToastr(error)}}))
      }))
  }
  refreshCaptch() {
    debugger;
    this.user.password= null;
    this.user.captcha =null;
    this.captchaval = this._captchaService.generateCaptcha();
    localStorage.setItem('captcha', this.captchaval);
    return false;

  }

}
