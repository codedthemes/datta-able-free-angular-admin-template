import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BreadcrumbPagingComponent} from './breadcrumb-paging.component';

const routes: Routes = [
  {
    path: '',
    component: BreadcrumbPagingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreadcrumbPagingRoutingModule { }
