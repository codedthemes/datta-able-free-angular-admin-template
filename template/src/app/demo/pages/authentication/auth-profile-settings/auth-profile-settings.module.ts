import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthProfileSettingsRoutingModule } from './auth-profile-settings-routing.module';
import { AuthProfileSettingsComponent } from './auth-profile-settings.component';

@NgModule({
  imports: [
    CommonModule,
    AuthProfileSettingsRoutingModule
  ],
  declarations: [AuthProfileSettingsComponent]
})
export class AuthProfileSettingsModule { }
