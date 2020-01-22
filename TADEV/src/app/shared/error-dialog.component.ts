import { Component, OnInit, ChangeDetectionStrategy,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Router} from '@angular/router';

@Component({
    selector: 'error-dialog',
    templateUrl: 'error-dialog.html',
    styleUrls: ['./error-dialog.component.scss']
  })
  export class ErrorDialog {
  
    constructor(private router: Router,
      public dialogRef: MatDialogRef<ErrorDialog>,
      @Inject(MAT_DIALOG_DATA) public data: string,) {}
  
    onNoClick(url:string): void {
      //this.router.navigate(['./login']);
      this.dialogRef.close();
  
      
    }
  
  }