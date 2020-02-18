import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthSigninRoutingModule } from './auth-signin-routing.module';
import { AuthSigninComponent } from './auth-signin.component';

@NgModule({
  imports: [
    CommonModule,
    AuthSigninRoutingModule
  ],
  declarations: [AuthSigninComponent]
})
export class AuthSigninModule { }
