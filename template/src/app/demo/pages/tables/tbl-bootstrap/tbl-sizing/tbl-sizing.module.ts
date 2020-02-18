import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TblSizingRoutingModule } from './tbl-sizing-routing.module';
import { TblSizingComponent } from './tbl-sizing.component';
import {SharedModule} from '../../../../../theme/shared/shared.module';

@NgModule({
  declarations: [TblSizingComponent],
  imports: [
    CommonModule,
    TblSizingRoutingModule,
    SharedModule
  ]
})
export class TblSizingModule { }
