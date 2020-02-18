import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TblBasicComponent} from './tbl-basic.component';

const routes: Routes = [
  {
    path: '',
    component: TblBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TblBasicRoutingModule { }
