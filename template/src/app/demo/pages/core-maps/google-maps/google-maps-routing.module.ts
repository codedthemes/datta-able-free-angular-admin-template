import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GoogleMapsComponent} from './google-maps.component';

const routes: Routes = [
  {
    path: '',
    component: GoogleMapsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoogleMapsRoutingModule { }
