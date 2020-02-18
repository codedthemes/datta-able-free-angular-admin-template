import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ThemeStaticComponent} from './theme-static.component';

const routes: Routes = [
  {
    path: '',
    component: ThemeStaticComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeStaticRoutingModule { }
