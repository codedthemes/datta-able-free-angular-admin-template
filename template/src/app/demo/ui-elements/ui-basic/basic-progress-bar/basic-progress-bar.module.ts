import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicProgressBarRoutingModule } from './basic-progress-bar-routing.module';
import { BasicProgressBarComponent } from './basic-progress-bar.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {NgbProgressbarModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    BasicProgressBarRoutingModule,
    SharedModule,
    NgbProgressbarModule
  ],
  declarations: [BasicProgressBarComponent]
})
export class BasicProgressBarModule { }
