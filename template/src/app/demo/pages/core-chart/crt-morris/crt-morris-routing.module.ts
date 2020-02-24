import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CrtMorrisComponent} from './crt-morris.component';

const routes: Routes = [
  {
    path: '',
    component: CrtMorrisComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrtMorrisRoutingModule { }
