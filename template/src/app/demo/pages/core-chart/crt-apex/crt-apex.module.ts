import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrtApexRoutingModule } from './crt-apex-routing.module';
import { CrtApexComponent } from './crt-apex.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  declarations: [CrtApexComponent],
  imports: [
    CommonModule,
    CrtApexRoutingModule,
    SharedModule
  ]
})
export class CrtApexModule { }
