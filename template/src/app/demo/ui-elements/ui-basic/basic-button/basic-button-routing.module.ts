import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BasicButtonComponent} from './basic-button.component';

const routes: Routes = [
  {
    path: '',
    component: BasicButtonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicButtonRoutingModule { }
