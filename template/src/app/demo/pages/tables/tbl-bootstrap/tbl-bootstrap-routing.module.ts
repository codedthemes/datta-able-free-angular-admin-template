import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'bt-basic',
        loadChildren: () => import('./tbl-basic/tbl-basic.module').then(module => module.TblBasicModule)
      },
      {
        path: 'bt-border',
        loadChildren: () => import('./tbl-border/tbl-border.module').then(module => module.TblBorderModule)
      },
      {
        path: 'bt-sizing',
        loadChildren: () => import('./tbl-sizing/tbl-sizing.module').then(module => module.TblSizingModule)
      },
      {
        path: 'bt-styling',
        loadChildren: () => import('./tbl-styling/tbl-styling.module').then(module => module.TblStylingModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TblBootstrapRoutingModule { }
