import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthSigninV2RoutingModule } from './auth-signin-v2-routing.module';
import { AuthSigninV2Component } from './auth-signin-v2.component';

@NgModule({
  declarations: [AuthSigninV2Component],
  imports: [
    CommonModule,
    AuthSigninV2RoutingModule
  ]
})
export class AuthSigninV2Module { }
