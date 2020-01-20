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
  constructor(private forgotPasswordService:ForgotpasswordService,private _snackBar:MatSnackBar,
    public dialog: MatDialog) {
  
   }

  ngOnInit() {
  }

  submitForgotPassword(){ 
    this._snackBar.open("Email sent successfully");
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
       console.log('success response',response); },
       error=>{
         debugger;
         console.log('error response',error)
       }
    );
    }

    openDialog(): void {
      this.daialogMessage="Password reset link sent to registered email";
      const dialogRef = this.dialog.open(ForgotpasswordDialog, {
        width: '500px',
        data: this.daialogMessage
      });
    }
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
    this.router.navigate(['./resetpassword']);
    this.dialogRef.close();

    
  }

}
