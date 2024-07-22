import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'OrganizationalUnit',
        loadComponent: () => import('./presentation/organizational-unit/organizational-unit.component')
      },
      {
        path: 'JobTitle',
        loadComponent: () => import('./presentation/job-title/job-title.component')
      },
      {
        path: 'EmployeeEvaluation',
        loadComponent: () => import('./presentation/employee-evaluation/employee-evaluation.component')
      },
      {
        path: 'Employee',
        loadComponent: () => import('./presentation/employee/employee.component')
      },
      {
        path: 'Classification',
        loadComponent: () => import('./presentation/classification/classification.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrativeAffairsRoutingModule {}
