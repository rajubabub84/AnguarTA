import { Component, OnInit, ChangeDetectionStrategy,Inject } from '@angular/core';
import {ForgotpasswordService} from '../services/forgotpassword.service';
import{ Forgotpassword} from '../models/forgotpassword';
import {Forgotpasswordresponse} from '../models/forgotpasswordresponse';
import { Url } from 'url';
import { environment } from 'src/environments/environment';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Router} from '@angular/router';
import{CaptchaService} from '../shared/captcha.service';
import { ErrorDialog } from '../shared/error-dialog.component';
import {SuccessDialog} from '../shared/success-dialog.component';
import {DialogData} from '../models/dialogdata';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  Email:string;
  Captcha:string;
  dialogMessage:string;
  forgotPassword:Forgotpassword;
  forgotpasswordresponse:Forgotpasswordresponse;
  public captchaval: string;
  captchaMatch:boolean=true;
  dialogData:DialogData;
  loadSpinner:boolean=false;
  constructor(private forgotPasswordService:ForgotpasswordService,private _snackBar:MatSnackBar,
    public dialog: MatDialog, private _captchaService: CaptchaService) {
  
   }

  ngOnInit() {
    this.captchaval= this._captchaService.generateCaptcha();
    localStorage.setItem("forgotpasswordCaptcha",this.captchaval);

  }

  submitForgotPassword(){ 
   // this._snackBar.open("Email sent successfully");
    //console.log('form', f);
    //this.forgotPasswordService.submitForgotPassword(); 
    
    let captchaTrimmed = localStorage.getItem("forgotpasswordCaptcha").replace(/\s/g, "");
    if(captchaTrimmed != this.Captcha)
    {
      this.captchaMatch=false;
      return false;
    }
    else
    {
      this.captchaMatch=true;
    }    
    this.forgotPassword={
    missioncode:environment.Missioncode,
    countrycode:environment.Countrycode,
    email:this.Email,
    url:"http://localhost:4200/resetpassword?q={token}"
    };
    this.loadSpinner=true;
    this.forgotPasswordService.submitForgotPassword(this.forgotPassword)
    .subscribe(response => {
      debugger;
      this.loadSpinner=false;
      if(response !=null && response[0]==200)
      {
        debugger;
        this.dialogMessage="Password reset link sent to registered email";
        this.openDialog(true);
        console.log('success response',response);
      }
      else if(response!=null && response[0].code==418)
      {
        debugger;
        this.dialogMessage="EmailID does not exist";
        this.openDialog(false);
        console.log('success response',response);
        this.refreshCaptch();  
              
      }
    }       
       ,
       error=>{
         debugger;
         this.loadSpinner=false;
        this.dialogMessage="Something went wrong";
        this.openDialog(false);
         console.log('error response',error)
         this.refreshCaptch();
       }
    );
    }

    openDialog(success:boolean): void {
     // this.daialogMessage="Password reset link sent to registered email";
      if(success)
      {
        this.dialogData={
          daialogMessage:this.dialogMessage,
          redirectUrl:"./login"
         
        };
        const dialogRef = this.dialog.open(SuccessDialog, {
          width: '500px',
          data: this.dialogData,
        });
      }
      else{
        this.dialogData={
          daialogMessage:this.dialogMessage,
          redirectUrl:""
         
        };
        const dialogRef = this.dialog.open(ErrorDialog, {
          width: '500px',
          data: this.dialogData
        });

      }      
    }

    refreshCaptch() {
     // this.Captcha=null;
      this.captchaval= this._captchaService.generateCaptcha();
      localStorage.setItem("forgotpasswordCaptcha",this.captchaval);
      return false;
    }
  
  }

// @Component({
//   selector: 'forgotpassword-dialog',
//   templateUrl: 'forgotpassword-dialog.html',
// })
// export class ForgotpasswordDialog {

//   constructor(private router: Router,
//     public dialogRef: MatDialogRef<ForgotpasswordDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: string,) {}

//   onNoClick(): void {
//     this.router.navigate(['./login']);
//     this.dialogRef.close();

    
//   }

// }
