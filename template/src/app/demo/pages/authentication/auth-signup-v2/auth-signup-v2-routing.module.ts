import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthSignupV2Component} from './auth-signup-v2.component';

const routes: Routes = [
  {
    path: '',
    component: AuthSignupV2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthSignupV2RoutingModule { }
