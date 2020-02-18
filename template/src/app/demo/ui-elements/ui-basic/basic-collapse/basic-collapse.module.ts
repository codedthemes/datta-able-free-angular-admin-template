import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicCollapseRoutingModule } from './basic-collapse-routing.module';
import { BasicCollapseComponent } from './basic-collapse.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {NgbAccordionModule, NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    BasicCollapseRoutingModule,
    SharedModule,
    NgbCollapseModule,
    NgbAccordionModule
  ],
  declarations: [BasicCollapseComponent]
})
export class BasicCollapseModule { }
