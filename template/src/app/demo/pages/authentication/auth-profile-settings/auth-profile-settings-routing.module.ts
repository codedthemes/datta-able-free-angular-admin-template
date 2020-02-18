import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthProfileSettingsComponent} from './auth-profile-settings.component';

const routes: Routes = [
  {
    path: '',
    component: AuthProfileSettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthProfileSettingsRoutingModule { }
