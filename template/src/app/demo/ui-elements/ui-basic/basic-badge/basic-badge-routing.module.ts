import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BasicBadgeComponent} from './basic-badge.component';

const routes: Routes = [
  {
    path: '',
    component: BasicBadgeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicBadgeRoutingModule { }
