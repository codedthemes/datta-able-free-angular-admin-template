import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ThemeHorizontalComponent} from './theme-horizontal.component';

const routes: Routes = [
  {
    path: '',
    component: ThemeHorizontalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeHorizontalRoutingModule { }
