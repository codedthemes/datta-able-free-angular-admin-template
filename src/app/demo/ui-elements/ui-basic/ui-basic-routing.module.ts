import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'badges',
        loadComponent: () => import('./basic-badge/basic-badge.component')
      },
      {
        path: 'button',
        loadComponent: () => import('./basic-button/basic-button.component')
      },
      {
        path: 'breadcrumb-paging',
        loadComponent: () => import('./breadcrumb-paging/breadcrumb-paging.component')
      },
      {
        path: 'collapse',
        loadComponent: () => import('./basic-collapse/basic-collapse.component')
      },
      {
        path: 'tabs-pills',
        loadComponent: () => import('./basic-tabs-pills/basic-tabs-pills.component')
      },
      {
        path: 'typography',
        loadComponent: () => import('./basic-typography/basic-typography.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiBasicRoutingModule {}
