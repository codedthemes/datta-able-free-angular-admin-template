import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BasicCollapseComponent} from './basic-collapse.component';

const routes: Routes = [
  {
    path: '',
    component: BasicCollapseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicCollapseRoutingModule { }
