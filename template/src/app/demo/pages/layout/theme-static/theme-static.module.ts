import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeStaticRoutingModule } from './theme-static-routing.module';
import { ThemeStaticComponent } from './theme-static.component';
import {CommonContentModule} from '../common-content/common-content.module';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  declarations: [ThemeStaticComponent],
  imports: [
    CommonModule,
    ThemeStaticRoutingModule,
    SharedModule,
    CommonContentModule
  ]
})
export class ThemeStaticModule { }
