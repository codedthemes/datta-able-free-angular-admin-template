import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicBadgeRoutingModule } from './basic-badge-routing.module';
import { BasicBadgeComponent } from './basic-badge.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    BasicBadgeRoutingModule,
    SharedModule
  ],
  declarations: [BasicBadgeComponent]
})
export class BasicBadgeModule { }
