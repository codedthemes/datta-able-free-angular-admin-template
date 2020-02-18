import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthResetPasswordV2Component} from './auth-reset-password-v2.component';

const routes: Routes = [
  {
    path: '',
    component: AuthResetPasswordV2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthResetPasswordV2RoutingModule { }
