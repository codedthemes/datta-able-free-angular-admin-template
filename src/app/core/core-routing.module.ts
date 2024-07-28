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
      },
      {
        path: 'dashboard',
        loadComponent: () => import('../features/dashboard/dashboard.component')
      },
      {
        path: 'bank',
        loadChildren: () => import('../features/definitions/bank/banks.module')
          .then(m => m.BanksModule),
        data: {
          breadcrumb: 'إدارة البنوك'
        }

      },{
        path: 'BankBranches',
        loadChildren: () => import('../features/definitions/bank-branches/bank-branches.module')
          .then(m => m.BankBranchesModule),
        data: {
          breadcrumb: 'فروع المصارف'
        }
      },{
        path: 'ClassificationBankBranches',
        loadChildren: () => import('../features/definitions/classification-bankBranches/classification-bankBranches.module')
          .then(m => m.ClassificationBankBranchesModule),
        data: {
          breadcrumb: 'تصنيف فروع المصارف'
        }
      },
      {
        path: 'BonusesTypes',
        loadChildren: () => import('../features/definitions/bonuses-types/bonuses-types.module')
          .then(m => m.BonusesTypesModule),
        data: {
          breadcrumb: 'انواع العلاوات'
        }
      },
      {
        path: 'DocumentTypes',
        loadChildren: () => import('../features/definitions/document-types/document-types.module')
          .then(m => m.DocumentTypesModule),
        data: {
          breadcrumb: 'انواع المستندات'
        }
      },
      {
        path: 'EvaluationsTypes',
        loadChildren: () => import('../features/definitions/evaluations-types/evaluations-types.module')
          .then(m => m.EvaluationsTypesModule),
        data: {
          breadcrumb: 'انواع التقييمات'
        }
      },
      {
        path: 'RewardsTypes',
        loadChildren: () => import('../features/definitions/rewards-types/rewards-types.module')
          .then(m => m.RewardsTypesModule),
        data: {
          breadcrumb: 'انواع المكافاّت'
        }
      },
      {
        path: 'VacationsTypes',
        loadChildren: () => import('../features/definitions/vacations-types/vacations-types.module')
          .then(m => m.VacationsTypesModule),
        data: {
          breadcrumb: 'انواع الإجازات'
        }
      },
      {
        path: 'ScientificQualifications',
        loadChildren: () => import('../features/definitions/scientific-qualifications/scientific-qualifications.module')
          .then(m => m.ScientificQualificationsModule),
        data: {
          breadcrumb: 'المؤهلات العلمية'
        }
      },
      {
        path: 'Courts',
        loadChildren: () => import('../features/definitions/courts/courts.module')
          .then(m => m.CourtsModule),
        data: {
          breadcrumb: 'المحاكم'
        }
      },
      {
        path: 'Nationalities',
        loadChildren: () => import('../features/definitions/nationalities/nationalities.module')
          .then(m => m.NationalitiesModule),
        data: {
          breadcrumb: 'الجنسيات'
        }
      },
      {
        path: 'Penalties',
        loadChildren: () => import('../features/definitions/Penalties/Penalties.module')
          .then(m => m.PenaltiesModule),
        data: {
          breadcrumb: 'الجزاءات'
        }
      }
      ,
      {
        path: 'OrganizationalUnit',
        loadChildren: () => import('../features/administrativeAffairs/organizational-unit/organizational-unit.module')
          .then(m => m.OrganizationalUnitModule),
        data: {
          breadcrumb: 'الهيكلية الإدارية'
        }
      },
      {
        path: 'ClassificationBranches',
        loadChildren: () => import('../features/administrativeAffairs/classification/classification-branches.module')
          .then(m => m.ClassificationBranchesModule),
        data: {
          breadcrumb: 'تصنيفات الوظيفية'
        }
      },
      {
        path: 'JobTitle',
        loadChildren: () => import('../features/administrativeAffairs/job-title/job-title.module')
          .then(m => m.JobTitleModule),
        data: {
          breadcrumb: 'تعريف وظيفة'
        }
      },
      {
        path: 'DefinitionPosition',
        loadChildren: () => import('../features/administrativeAffairs/definition-position/definition-position.module')
          .then(m => m.DefinitionPositionModule),
        data: {
          breadcrumb: 'تعريف منصب'
        }
      },
      {
        path: 'AddEmployee',
        loadChildren: () => import('../features/administrativeAffairs/add-employee/add-employee.module')
          .then(m => m.AddEmployeeModule),
        data: {
          breadcrumb: 'إضافة موظف'
        }
      },
      {
        path: 'Permission',
        loadChildren: () => import('../features/userManagement/Permissions/permission.module')
          .then(m => m.PermissionModule),
        data: {
          breadcrumb: 'الصلاحيات'
        }
      },
      {
        path: 'Users',
        loadChildren: () => import('../features/userManagement/users/users.module')
          .then(m => m.UsersModule),
        data: {
          breadcrumb: 'المستخدمين'
        }
      },
      {
        path: 'Employee',
        loadChildren: () => import('../features/administrativeAffairs/employee/employee.module')
          .then(m => m.EmployeeModule),
        data: {
          breadcrumb: 'الموظفين'
        }
      },
      {
        path: 'EmployeeEvaluation',
        loadChildren: () => import('../features/administrativeAffairs/employeeEvaluation/employee-evaluation.module')
          .then(m => m.EmployeeEvaluationModule),
        data: {
          breadcrumb: 'تقييمات الموظف'
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
