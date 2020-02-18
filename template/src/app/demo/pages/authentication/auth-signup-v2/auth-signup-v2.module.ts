import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthSignupV2RoutingModule } from './auth-signup-v2-routing.module';
import { AuthSignupV2Component } from './auth-signup-v2.component';

@NgModule({
  declarations: [AuthSignupV2Component],
  imports: [
    CommonModule,
    AuthSignupV2RoutingModule
  ]
})
export class AuthSignupV2Module { }
