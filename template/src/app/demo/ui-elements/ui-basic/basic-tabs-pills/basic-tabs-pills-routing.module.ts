import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BasicTabsPillsComponent} from './basic-tabs-pills.component';

const routes: Routes = [
  {
    path: '',
    component: BasicTabsPillsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicTabsPillsRoutingModule { }
