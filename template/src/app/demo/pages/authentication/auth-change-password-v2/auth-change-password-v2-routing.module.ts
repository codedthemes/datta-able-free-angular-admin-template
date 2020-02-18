import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthChangePasswordV2Component} from './auth-change-password-v2.component';

const routes: Routes = [
  {
    path: '',
    component: AuthChangePasswordV2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthChangePasswordV2RoutingModule { }
