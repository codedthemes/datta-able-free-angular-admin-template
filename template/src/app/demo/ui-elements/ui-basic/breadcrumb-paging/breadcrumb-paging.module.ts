import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbPagingRoutingModule } from './breadcrumb-paging-routing.module';
import { BreadcrumbPagingComponent } from './breadcrumb-paging.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {NgbButtonsModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    BreadcrumbPagingRoutingModule,
    SharedModule,
    NgbButtonsModule,
    NgbPaginationModule
  ],
  declarations: [BreadcrumbPagingComponent]
})
export class BreadcrumbPagingModule { }
