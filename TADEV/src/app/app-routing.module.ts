import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ForgotpasswordComponent} from './forgotpassword/forgotpassword.component';
import { AppComponent } from './app.component';
import {ResetpasswordComponent} from './resetpassword/resetpassword.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
