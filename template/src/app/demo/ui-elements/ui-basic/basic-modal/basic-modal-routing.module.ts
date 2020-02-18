import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BasicModalComponent} from './basic-modal.component';

const routes: Routes = [
  {
    path: '',
    component: BasicModalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicModalRoutingModule { }
