import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthPersonalInfoComponent} from './auth-personal-info.component';

const routes: Routes = [
  {
    path: '',
    component: AuthPersonalInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthPersonalInfoRoutingModule { }
