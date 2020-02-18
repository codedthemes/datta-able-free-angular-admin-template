import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CrtApexComponent} from './crt-apex.component';

const routes: Routes = [
  {
    path: '',
    component: CrtApexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrtApexRoutingModule { }
