import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TblBootstrapComponent} from './tbl-bootstrap.component';

const routes: Routes = [
  {
    path: '',
    component: TblBootstrapComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TblBootstrapRoutingModule { }
