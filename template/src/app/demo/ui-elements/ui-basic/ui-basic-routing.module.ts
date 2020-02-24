import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'button',
        loadChildren: () => import('./basic-button/basic-button.module').then(m => m.BasicButtonModule)
      },
      {
        path: 'badges',
        loadChildren: () => import('./basic-badge/basic-badge.module').then(m => m.BasicBadgeModule)
      },
      {
        path: 'breadcrumb-paging',
        loadChildren: () => import('./breadcrumb-paging/breadcrumb-paging.module').then(m => m.BreadcrumbPagingModule)
      },
      {
        path: 'collapse',
        loadChildren: () => import('./basic-collapse/basic-collapse.module').then(m => m.BasicCollapseModule)
      },
      {
        path: 'tabs-pills',
        loadChildren: () => import('./basic-tabs-pills/basic-tabs-pills.module').then(m => m.BasicTabsPillsModule)
      },
      {
        path: 'typography',
        loadChildren: () => import('./basic-typography/basic-typography.module').then(m => m.BasicTypographyModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiBasicRoutingModule { }
