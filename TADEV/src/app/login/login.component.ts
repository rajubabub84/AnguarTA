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
  public user: ILogin = {
    username: "",
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
  refreshCaptch() {
    debugger;
<<<<<<< HEAD
    this.captchaval = this._captchaService.generateCaptcha();
=======
    this.captchaval = Captcha();
>>>>>>> 822f18f190ab00337ffdd161430b380cf24a47af
    return false;
  }

}
<<<<<<< HEAD

=======
function Captcha() {
  debugger
  var alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
  var i;
  for (i = 0; i < 6; i++) {
    var a = alpha[Math.floor(Math.random() * alpha.length)];
    var b = alpha[Math.floor(Math.random() * alpha.length)];
    var c = alpha[Math.floor(Math.random() * alpha.length)];
    var d = alpha[Math.floor(Math.random() * alpha.length)];
    var e = alpha[Math.floor(Math.random() * alpha.length)];
    var f = alpha[Math.floor(Math.random() * alpha.length)];
    var g = alpha[Math.floor(Math.random() * alpha.length)];
  }
  var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' ' + f + ' ' + g;
  return code;
}
>>>>>>> 822f18f190ab00337ffdd161430b380cf24a47af
