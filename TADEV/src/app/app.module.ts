import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule,MatCardModule, MatAutocompleteModule, MatButtonToggleModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatExpansionModule, MatGridListModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSortModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatStepperModule, MatFormFieldModule } from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ForgotpasswordComponent,ForgotpasswordDialog } from './forgotpassword/forgotpassword.component';
import {ForgotpasswordService} from './services/forgotpassword.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { MatDividerModule } from '@angular/material/divider';
import { FooterComponent } from './footer/footer.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { RegisterComponent } from './register/register.component';
import {RegistrationService} from './services/registration.service';


@NgModule({
  declarations: [
    AppComponent,
    ForgotpasswordComponent,
    HeaderComponent,
    FooterComponent,
    ForgotpasswordDialog,
    ResetpasswordComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    // MaterialModule,
    HttpClientModule,    
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule,    
    MatDividerModule,
    MatSnackBarModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    MatFormFieldModule
  ],
  providers: [HttpClientModule,ForgotpasswordService,RegistrationService],
  bootstrap: [AppComponent],
  // exports: [ForgotpasswordDialog],
  entryComponents: [ForgotpasswordDialog,]
})
export class AppModule { }
