import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule,MatCardModule } from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ForgotpasswordComponent,ForgotpasswordDialog } from './forgotpassword/forgotpassword.component';
import {ForgotpasswordService} from './services/forgotpassword.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { MatDividerModule } from '@angular/material/divider';
import { FooterComponent } from './footer/footer.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    ForgotpasswordComponent,
    HeaderComponent,
    FooterComponent,
    ForgotpasswordDialog,
    ResetpasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
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
  ],
  providers: [HttpClientModule,ForgotpasswordService],
  bootstrap: [AppComponent],
  // exports: [ForgotpasswordDialog],
  entryComponents: [ForgotpasswordDialog,]
})
export class AppModule { }
