import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BasicCarouselComponent} from './basic-carousel.component';

const routes: Routes = [
  {
    path: '',
    component: BasicCarouselComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicCarouselRoutingModule { }
