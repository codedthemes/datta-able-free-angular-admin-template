import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BasicSpinnerComponent} from './basic-spinner.component';

const routes: Routes = [
  {
    path: '',
    component: BasicSpinnerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicSpinnerRoutingModule { }
