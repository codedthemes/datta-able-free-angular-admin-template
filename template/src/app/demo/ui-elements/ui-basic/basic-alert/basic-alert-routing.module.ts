import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BasicAlertComponent} from './basic-alert.component';

const routes: Routes = [
  {
    path: '',
    component: BasicAlertComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicAlertRoutingModule { }
