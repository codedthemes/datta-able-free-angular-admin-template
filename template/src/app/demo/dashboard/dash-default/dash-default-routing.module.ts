import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashDefaultComponent} from './dash-default.component';

const routes: Routes = [
  {
    path: '',
    component: DashDefaultComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashDefaultRoutingModule { }
