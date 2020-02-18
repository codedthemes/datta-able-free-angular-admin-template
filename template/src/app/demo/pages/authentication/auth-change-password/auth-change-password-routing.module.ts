import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthChangePasswordComponent} from './auth-change-password.component';

const routes: Routes = [
  {
    path: '',
    component: AuthChangePasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthChangePasswordRoutingModule { }
