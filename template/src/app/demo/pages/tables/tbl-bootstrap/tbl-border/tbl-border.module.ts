import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TblBorderRoutingModule } from './tbl-border-routing.module';
import { TblBorderComponent } from './tbl-border.component';
import {SharedModule} from '../../../../../theme/shared/shared.module';

@NgModule({
  declarations: [TblBorderComponent],
  imports: [
    CommonModule,
    TblBorderRoutingModule,
    SharedModule
  ]
})
export class TblBorderModule { }
