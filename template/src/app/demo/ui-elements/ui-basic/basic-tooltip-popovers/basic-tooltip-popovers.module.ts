import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicTooltipPopoversRoutingModule } from './basic-tooltip-popovers-routing.module';
import { BasicTooltipPopoversComponent } from './basic-tooltip-popovers.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {NgbPopoverModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    BasicTooltipPopoversRoutingModule,
    SharedModule,
    NgbTooltipModule,
    NgbPopoverModule
  ],
  declarations: [BasicTooltipPopoversComponent]
})
export class BasicTooltipPopoversModule { }
