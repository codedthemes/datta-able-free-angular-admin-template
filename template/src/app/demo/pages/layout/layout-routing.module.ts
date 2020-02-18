import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'static',
        loadChildren: () => import('./theme-static/theme-static.module').then(module => module.ThemeStaticModule)
      },
      {
        path: 'horizontal',
        loadChildren: () => import('./theme-horizontal/theme-horizontal.module').then(module => module.ThemeHorizontalModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
