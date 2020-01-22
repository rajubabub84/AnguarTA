// import { Component, OnInit } from '@angular/core';
// import { Subscription } from 'rxjs';


 
// import { applicant} from '../../shared/applicant';

// @Component({
//   selector: 'app-applicant',
//   templateUrl: './applicant.component.html',
//   styleUrls: ['./applicant.component.scss']
// })
// export class ApplicantComponent implements OnInit {
  
//   public applicantDetasils:applicant;

//   constructor() { }

//   ngOnInit() {

//     this.applicantDetasils=new applicant();  
//     this.applicantDetasils.referenceNUmber="1234";  
//   }

// }

import { Component, Input, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable }    from 'rxjs/Observable';
import { debug } from 'util';
import { RegistrationService} from '../services/registration.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
// import {registrationapiresponse } from '../shared/error';
import{Register} from '../models/register';
import {MustMatch} from '../shared/must-match.validator';
import {CaptchaService} from '../shared/captcha.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formGroup: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';
  register:Register;

  public captchaval: string;
  // registrationapiresponse:registrationapiresponse;
  isSubmitted = false;
  hide = true;
  catchComparision=true;

  constructor(private formBuilder: FormBuilder,private registrationService: RegistrationService,private _captchaService:CaptchaService) { }

  ngOnInit() {
    this.createForm();
    this.setChangeValidate();
    this.captchaval = this._captchaService.generateCaptcha();
    localStorage.setItem('CapthaRandomVal', this.captchaval);
    // this.registrationapiresponse=new  registrationapiresponse();
    //this.onSubmit(this.post);
    // this.register=new Register();
  }

  createForm() {
    debugger;
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.formGroup = this.formBuilder.group({
      'missioncode':null,
      'countrycode':null,
      'email': [null, [Validators.required, Validators.pattern(emailregex)], this.checkInUseEmail],
      'name': [null, Validators.required],
      'password': [null, [Validators.required, this.checkPassword]],
      'reenterpassword': [null, Validators.required],
      'captcha':[null, Validators.required],
      // 'description': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      'validate': ''
    }, {
      validator: MustMatch('password', 'reenterpassword')
  });
  }

  setChangeValidate() {
    this.formGroup.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate == '1') {
          this.formGroup.get('name').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = "You need to specify at least 3 characters";
        } else {
          this.formGroup.get('name').setValidators(Validators.required);
        }
        this.formGroup.get('name').updateValueAndValidity();
      }
    )
  }

  get name() {
    return this.formGroup.get('name') as FormControl
  }

  get f() { return this.formGroup.controls; }

  checkPassword(control) {
    let enteredPassword = control.value
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
  }

  checkInUseEmail(control) {
    // mimic http database access
    let db = ['tony@gmail.com'];
    return new Observable(observer => {
      setTimeout(() => {
        let result = (db.indexOf(control.value) !== -1) ? { 'alreadyInUse': true } : null;
        observer.next(result);
        observer.complete();
      }, 4000)
    })
  }

  getErrorEmail() {
    return this.formGroup.get('email').hasError('required') ? 'Field is required' :
      this.formGroup.get('email').hasError('pattern') ? 'Not a valid emailaddress' :
        this.formGroup.get('email').hasError('alreadyInUse') ? 'This emailaddress is already in use' : '';
  }

  getErrorPassword() {
    return this.formGroup.get('password').hasError('required') ? 'Field is required (at least eight characters, one uppercase letter and one number)' :
      this.formGroup.get('password').hasError('requirements') ? 'Password needs to be at least eight characters, one uppercase letter and one number' : '';
  }

  getReEnterErrorPassword() {
    return this.formGroup.get('password').hasError('required') ? 'Field is required (at least eight characters, one uppercase letter and one number)' :
      this.formGroup.get('password').hasError('requirements') ? 'Password needs to be at least eight characters, one uppercase letter and one number' : '';
  }

  getErrorCaptcha() {
    debugger;
    if(this.formGroup.get('captcha').hasError('required'))
    this.catchComparision=true;
    return this.formGroup.get('captcha').hasError('required') ? 'Field is required':"" ;
      
  }

  onSubmit(post) {
   
    debugger;
    //this.post = post;
    let captcha = localStorage.getItem("CapthaRandomVal").replace(/\s/g, "");
    let enteredCatcha= this.formGroup.get('captcha').value;
   if(captcha==enteredCatcha)
   {
     this.catchComparision=true;

   }
   else{
    this.catchComparision=false;
   }

   if( this.catchComparision==true)
   {
     console.log("suceess");
     this.isSubmitted = true;
  
    this.register={
      missioncode:"ukvi",
      countrycode:"cia",
      emailid:post.email,
      firstname:post.name,
      lastname:"",
      password:post.password,
      contact:"",
      url:""
    };
    this.registrationService.RegistrationApplicant(this.register).subscribe((response) => {
      debugger;
      // this.registrationapiresponse = response;
      console.log(response);
      if(response[0]==200)
      {
        this.isSubmitted = true;
      }
     // alert(response[1]);
    // this.isSubmitted = true;
    });
  }
  
  }

  submit() {

  }
  refreshCaptch() {
    debugger;
    this.captchaval = this._captchaService.generateCaptcha();
    return false;
  }

}
