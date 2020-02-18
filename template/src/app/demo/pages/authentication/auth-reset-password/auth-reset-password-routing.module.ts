import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthResetPasswordComponent} from './auth-reset-password.component';

const routes: Routes = [
  {
    path: '',
    component: AuthResetPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthResetPasswordRoutingModule { }
