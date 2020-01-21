import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ForgotpasswordComponent} from './forgotpassword/forgotpassword.component';
import {ResetpasswordComponent} from './resetpassword/resetpassword.component';
import { RegisterComponent } from './register/register.component';
import{LoginComponent } from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { from } from 'rxjs';


const routes: Routes = [
  { path: "", redirectTo:"/login",pathMatch:"full" },
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent},
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
