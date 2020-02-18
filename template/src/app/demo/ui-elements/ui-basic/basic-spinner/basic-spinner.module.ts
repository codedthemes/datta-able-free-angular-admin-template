import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicSpinnerRoutingModule } from './basic-spinner-routing.module';
import { BasicSpinnerComponent } from './basic-spinner.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  declarations: [BasicSpinnerComponent],
  imports: [
    CommonModule,
    BasicSpinnerRoutingModule,
    SharedModule
  ]
})
export class BasicSpinnerModule { }
