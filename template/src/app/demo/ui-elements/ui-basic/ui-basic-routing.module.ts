import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'alert',
        loadChildren: () => import('./basic-alert/basic-alert.module').then(module => module.BasicAlertModule)
      },
      {
        path: 'button',
        loadChildren: () => import('./basic-button/basic-button.module').then(module => module.BasicButtonModule)
      },
      {
        path: 'badges',
        loadChildren: () => import('./basic-badge/basic-badge.module').then(module => module.BasicBadgeModule)
      },
      {
        path: 'breadcrumb-paging',
        loadChildren: () => import('./breadcrumb-paging/breadcrumb-paging.module').then(module => module.BreadcrumbPagingModule)
      },
      {
        path: 'cards',
        loadChildren: () => import('./basic-cards/basic-cards.module').then(module => module.BasicCardsModule)
      },
      {
        path: 'collapse',
        loadChildren: () => import('./basic-collapse/basic-collapse.module').then(module => module.BasicCollapseModule)
      },
      {
        path: 'carousel',
        loadChildren: () => import('./basic-carousel/basic-carousel.module').then(module => module.BasicCarouselModule)
      },
      {
        path: 'grid-system',
        loadChildren: () => import('./basic-grid/basic-grid.module').then(module => module.BasicGridModule)
      },
      {
        path: 'progress',
        loadChildren: () => import('./basic-progress-bar/basic-progress-bar.module').then(module => module.BasicProgressBarModule)
      },
      {
        path: 'modal',
        loadChildren: () => import('./basic-modal/basic-modal.module').then(module => module.BasicModalModule)
      },
      {
        path: 'spinner',
        loadChildren: () => import('./basic-spinner/basic-spinner.module').then(module => module.BasicSpinnerModule)
      },
      {
        path: 'tabs-pills',
        loadChildren: () => import('./basic-tabs-pills/basic-tabs-pills.module').then(module => module.BasicTabsPillsModule)
      },
      {
        path: 'typography',
        loadChildren: () => import('./basic-typography/basic-typography.module').then(module => module.BasicTypographyModule)
      },
      {
        path: 'tooltip-popovers',
        loadChildren: () => import('./basic-tooltip-popovers/basic-tooltip-popovers.module')
          .then(module => module.BasicTooltipPopoversModule)
      },
      {
        path: 'toasts',
        loadChildren: () => import('./basic-toasts/basic-toasts.module').then(module => module.BasicToastsModule)
      },
      {
        path: 'other',
        loadChildren: () => import('./basic-other/basic-other.module').then(module => module.BasicOtherModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiBasicRoutingModule { }
