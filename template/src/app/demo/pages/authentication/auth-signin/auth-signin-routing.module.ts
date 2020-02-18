import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthSigninComponent} from './auth-signin.component';

const routes: Routes = [
  {
    path: '',
    component: AuthSigninComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthSigninRoutingModule { }
