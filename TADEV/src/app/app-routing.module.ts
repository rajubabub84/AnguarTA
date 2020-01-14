import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ForgotpasswordComponent} from './forgotpassword/forgotpassword.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
