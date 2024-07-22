import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Presentation/main/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },{
        path: 'bank',
        loadChildren: () => import('../features/definitions/bank/banks.module')
          .then(m => m.BanksModule),
        data: {
          breadcrumb: 'إدارة البنوك'
        }
      }
    ]
  },

  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {
}
