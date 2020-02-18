import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BasicTooltipPopoversComponent} from './basic-tooltip-popovers.component';

const routes: Routes = [
  {
    path: '',
    component: BasicTooltipPopoversComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicTooltipPopoversRoutingModule { }
