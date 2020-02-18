import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TblSizingComponent} from './tbl-sizing.component';

const routes: Routes = [
  {
    path: '',
    component: TblSizingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TblSizingRoutingModule { }
