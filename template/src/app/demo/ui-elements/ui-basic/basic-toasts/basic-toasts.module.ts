import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicToastsRoutingModule } from './basic-toasts-routing.module';
import { BasicToastsComponent } from './basic-toasts.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  declarations: [BasicToastsComponent],
  imports: [
    CommonModule,
    BasicToastsRoutingModule,
    SharedModule
  ]
})
export class BasicToastsModule { }
