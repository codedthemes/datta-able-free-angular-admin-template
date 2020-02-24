import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TblBootstrapRoutingModule } from './tbl-bootstrap-routing.module';
import { TblBootstrapComponent } from './tbl-bootstrap.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    TblBootstrapRoutingModule,
    SharedModule
  ],
  declarations: [TblBootstrapComponent]
})
export class TblBootstrapModule { }
