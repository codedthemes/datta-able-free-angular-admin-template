import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BasicToastsComponent} from './basic-toasts.component';

const routes: Routes = [
  {
    path: '',
    component: BasicToastsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicToastsRoutingModule { }
