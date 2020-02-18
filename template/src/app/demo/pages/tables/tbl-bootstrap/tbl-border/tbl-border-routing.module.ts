import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TblBorderComponent} from './tbl-border.component';

const routes: Routes = [
  {
    path: '',
    component: TblBorderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TblBorderRoutingModule { }
