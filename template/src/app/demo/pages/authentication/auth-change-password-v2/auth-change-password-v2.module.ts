import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthChangePasswordV2RoutingModule } from './auth-change-password-v2-routing.module';
import { AuthChangePasswordV2Component } from './auth-change-password-v2.component';

@NgModule({
  declarations: [AuthChangePasswordV2Component],
  imports: [
    CommonModule,
    AuthChangePasswordV2RoutingModule
  ]
})
export class AuthChangePasswordV2Module { }
