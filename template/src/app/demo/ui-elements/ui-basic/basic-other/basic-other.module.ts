import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicOtherRoutingModule } from './basic-other-routing.module';
import { BasicOtherComponent } from './basic-other.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    BasicOtherRoutingModule,
    SharedModule,
    NgbTooltipModule
  ],
  declarations: [BasicOtherComponent]
})
export class BasicOtherModule { }
