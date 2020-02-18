import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BasicProgressBarComponent} from './basic-progress-bar.component';

const routes: Routes = [
  {
    path: '',
    component: BasicProgressBarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicProgressBarRoutingModule { }
