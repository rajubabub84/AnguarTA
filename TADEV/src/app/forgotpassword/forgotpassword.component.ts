import { Component, OnInit, ChangeDetectionStrategy,Inject } from '@angular/core';
import {ForgotpasswordService} from '../services/forgotpassword.service';
import{ Forgotpassword} from '../models/forgotpassword';
import {Forgotpasswordresponse} from '../models/forgotpasswordresponse';
import { Url } from 'url';
import { environment } from 'src/environments/environment';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  Email:string;
  Captcha:string;
  daialogMessage:string;
  forgotPassword:Forgotpassword;
  forgotpasswordresponse:Forgotpasswordresponse;
  public captchaval: string;
  constructor(private forgotPasswordService:ForgotpasswordService,private _snackBar:MatSnackBar,
    public dialog: MatDialog) {
  
   }

  ngOnInit() {
    this.captchaval= Captcha();
  }

  submitForgotPassword(){ 
   // this._snackBar.open("Email sent successfully");
    //console.log('form', f);
    //this.forgotPasswordService.submitForgotPassword(); 
    this.forgotPassword={
    missioncode:environment.Missioncode,
    countrycode:environment.Countrycode,
    email:this.Email,
    url:"http://localhost:4200/resetpassword?q={token}"
    };
    this.forgotPasswordService.submitForgotPassword(this.forgotPassword)
    .subscribe(response => {
      debugger;
      if(response !=null && response[0]==200)
      {
        debugger;
        this.daialogMessage="Password reset link sent to registered email";
        this.openDialog();
        console.log('success response',response);
      }
      else if(response!=null && response[0].code==418)
      {
        debugger;
        this.daialogMessage="EmailID does not exist";
        this.openDialog();
        console.log('success response',response);
      }
    }       
       ,
       error=>{
         debugger;
        this.daialogMessage="Something went wrong";
        this.openDialog();
         console.log('error response',error)
       }
    );
    }

    openDialog(): void {
     // this.daialogMessage="Password reset link sent to registered email";
      const dialogRef = this.dialog.open(ForgotpasswordDialog, {
        width: '500px',
        data: this.daialogMessage
      });
    }

    refreshCaptch() {
      debugger;
      this.captchaval = Captcha();
      return false;
    }
  
  }
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

@Component({
  selector: 'forgotpassword-dialog',
  templateUrl: 'forgotpassword-dialog.html',
})
export class ForgotpasswordDialog {

  constructor(private router: Router,
    public dialogRef: MatDialogRef<ForgotpasswordDialog>,
    @Inject(MAT_DIALOG_DATA) public data: string,) {}

  onNoClick(): void {
    this.router.navigate(['./login']);
    this.dialogRef.close();

    
  }

}
