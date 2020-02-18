import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicAlertRoutingModule } from './basic-alert-routing.module';
import { BasicAlertComponent } from './basic-alert.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    BasicAlertRoutingModule,
    SharedModule
  ],
  declarations: [BasicAlertComponent]
})
export class BasicAlertModule { }
