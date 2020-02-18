import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicTypographyRoutingModule } from './basic-typography-routing.module';
import { BasicTypographyComponent } from './basic-typography.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    BasicTypographyRoutingModule,
    SharedModule
  ],
  declarations: [BasicTypographyComponent]
})
export class BasicTypographyModule { }
