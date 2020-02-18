import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BasicCardsComponent} from './basic-cards.component';

const routes: Routes = [
  {
    path: '',
    component: BasicCardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicCardsRoutingModule { }
