import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BasicTypographyComponent} from './basic-typography.component';

const routes: Routes = [
  {
    path: '',
    component: BasicTypographyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicTypographyRoutingModule { }
