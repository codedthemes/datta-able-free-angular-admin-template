import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicGridRoutingModule } from './basic-grid-routing.module';
import { BasicGridComponent } from './basic-grid.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    BasicGridRoutingModule,
    SharedModule
  ],
  declarations: [BasicGridComponent]
})
export class BasicGridModule { }
