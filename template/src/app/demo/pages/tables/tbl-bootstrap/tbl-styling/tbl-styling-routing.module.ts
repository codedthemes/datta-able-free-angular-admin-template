import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TblStylingComponent} from './tbl-styling.component';

const routes: Routes = [
  {
    path: '',
    component: TblStylingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TblStylingRoutingModule { }
