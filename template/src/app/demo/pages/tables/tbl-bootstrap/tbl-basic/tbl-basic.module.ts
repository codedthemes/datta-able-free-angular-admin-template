import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TblBasicRoutingModule } from './tbl-basic-routing.module';
import { TblBasicComponent } from './tbl-basic.component';
import {SharedModule} from '../../../../../theme/shared/shared.module';

@NgModule({
  declarations: [TblBasicComponent],
  imports: [
    CommonModule,
    TblBasicRoutingModule,
    SharedModule
  ]
})
export class TblBasicModule { }
