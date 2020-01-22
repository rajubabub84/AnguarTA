import { Component, OnInit, ChangeDetectionStrategy,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Router} from '@angular/router';

@Component({
    selector: 'success-dialog',
    templateUrl: 'success-dialog.html',
    styleUrls: ['./success-dialog.component.scss']
  })
  export class SuccessDialog {
  
    constructor(private router: Router,
      public dialogRef: MatDialogRef<SuccessDialog>,
      @Inject(MAT_DIALOG_DATA) public data: string,) {}
  
    onNoClick(url:string): void {
      //this.router.navigate(['./login']);
      this.router.navigate([url]);
      this.dialogRef.close();
  
      
    }
  
  }