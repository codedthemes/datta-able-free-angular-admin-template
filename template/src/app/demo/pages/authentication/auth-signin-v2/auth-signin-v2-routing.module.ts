import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthSigninV2Component} from './auth-signin-v2.component';

const routes: Routes = [
  {
    path: '',
    component: AuthSigninV2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthSigninV2RoutingModule { }
