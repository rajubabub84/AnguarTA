import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import {ForgotpasswordService} from './services/forgotpassword.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { RegisterComponent } from './register/register.component';
import {RegistrationService} from './services/registration.service';
import { LoginComponent } from './login/login.component';
import {CustomMaterialModule} from './core/custom-material.module';
import {LoginService} from './services/login.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import {CaptchaService} from './shared/captcha.service';
import { ErrorDialog } from './shared/error-dialog.component';
import {SuccessDialog} from './shared/success-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ForgotpasswordComponent,
    HeaderComponent,
    FooterComponent,
    ResetpasswordComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    ErrorDialog,
    SuccessDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    CustomMaterialModule
    
  ],
  providers: [
    HttpClientModule,
    ForgotpasswordService,
    RegistrationService,
    LoginService,
    CaptchaService
  ],
  bootstrap: [AppComponent],
  entryComponents: [SuccessDialog, ErrorDialog]
})
export class AppModule { }
