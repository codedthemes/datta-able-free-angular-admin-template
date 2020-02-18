import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommonContentComponent} from './common-content.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  declarations: [CommonContentComponent],
  exports: [CommonContentComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CommonContentModule { }
