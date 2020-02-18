import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicModalRoutingModule } from './basic-modal-routing.module';
import { BasicModalComponent } from './basic-modal.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {NgbPopoverModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    BasicModalRoutingModule,
    SharedModule,
    NgbPopoverModule,
    NgbTooltipModule
  ],
  declarations: [BasicModalComponent]
})
export class BasicModalModule { }
