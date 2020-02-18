import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicTabsPillsRoutingModule } from './basic-tabs-pills-routing.module';
import { BasicTabsPillsComponent } from './basic-tabs-pills.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    BasicTabsPillsRoutingModule,
    SharedModule,
    NgbTabsetModule
  ],
  declarations: [BasicTabsPillsComponent]
})
export class BasicTabsPillsModule { }
