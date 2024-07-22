import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'Banks',
        loadComponent: () => import('./presentation/banks/presentation/banks.component')
      },
      {
        path: 'Courts',
        loadComponent: () => import('./presentation/courts/courts.component')
      },
      {
        path: 'Penalties',
        loadComponent: () => import('./presentation/penalties/Penalties.component')
      },
      {
        path: 'VacationsTypes',
        loadComponent: () => import('./presentation/vacations-types/vacations-types.component')
      },
      {
        path: 'Nationalities',
        loadComponent: () => import('./presentation/nationalities/nationalities.component')
      },
      {
        path: 'RewardsTypes',
        loadComponent: () => import('./presentation/rewards-types/rewards-types.component')
      },
      {
        path: 'BonusesTypes',
        loadComponent: () => import('./presentation/bonuses-types/bonuses-types.component')
      },
      {
        path: 'EvaluationsTypes',
        loadComponent: () => import('./presentation/evaluations-types/evaluations-types.component')
      },
      {
        path: 'ClassificationBankBranches',
        loadComponent: () => import('./presentation/classification-bankBranches/classification-bankBranches.component')
      },
      {
        path: 'DocumentTypes',
        loadComponent: () => import('./presentation/document-types/document-types.component')
      },
      {
        path: 'BankBranches',
        loadComponent: () => import('./presentation/bank-branches/bank-branches.component')
      },
      {
        path: 'ScientificQualifications',
        loadComponent: () => import('./presentation/scientific-qualifications/scientific-qualifications.component')
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefinitionsRoutingModule {}
