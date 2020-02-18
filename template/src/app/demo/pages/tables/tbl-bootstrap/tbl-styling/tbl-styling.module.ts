import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TblStylingRoutingModule } from './tbl-styling-routing.module';
import { TblStylingComponent } from './tbl-styling.component';
import {SharedModule} from '../../../../../theme/shared/shared.module';

@NgModule({
  declarations: [TblStylingComponent],
  imports: [
    CommonModule,
    TblStylingRoutingModule,
    SharedModule
  ]
})
export class TblStylingModule { }
