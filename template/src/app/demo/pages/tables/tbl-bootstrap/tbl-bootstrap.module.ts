import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TblBootstrapRoutingModule } from './tbl-bootstrap-routing.module';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    TblBootstrapRoutingModule,
    SharedModule
  ],
  declarations: []
})
export class TblBootstrapModule { }
