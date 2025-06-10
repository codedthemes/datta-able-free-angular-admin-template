import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'badges',
        loadComponent: () => import('./basic-badge/basic-badge.component').then((c) => c.BasicBadgeComponent)
      },
      {
        path: 'button',
        loadComponent: () => import('./basic-button/basic-button.component').then((c) => c.BasicButtonComponent)
      },
      {
        path: 'breadcrumb-paging',
        loadComponent: () => import('./breadcrumb-paging/breadcrumb-paging.component').then((c) => c.BreadcrumbPagingComponent)
      },
      {
        path: 'collapse',
        loadComponent: () => import('./basic-collapse/basic-collapse.component').then((c) => c.BasicCollapseComponent)
      },
      {
        path: 'tabs-pills',
        loadComponent: () => import('./basic-tabs-pills/basic-tabs-pills.component').then((c) => c.BasicTabsPillsComponent)
      },
      {
        path: 'typography',
        loadComponent: () => import('./basic-typography/basic-typography.component').then((c) => c.BasicTypographyComponent)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiBasicRoutingModule {}
