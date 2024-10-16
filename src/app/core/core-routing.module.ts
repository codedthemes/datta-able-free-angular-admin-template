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
          breadcrumb: 'المسميات الوظيفية'
        }
      },
      {
        path: 'DefinitionPosition',
        loadChildren: () => import('../features/administrativeAffairs/definition-position/definition-position.module')
          .then(m => m.DefinitionPositionModule),
        data: {
          breadcrumb: 'تعريف وظيفة'
        }
      },
      {
        path: 'AddEmployee',
        loadChildren: () => import('../features/administrativeAffairs/add-employee/add-employee.module')
          .then(m => m.AddEmployeeModule),
        data: {
          breadcrumb: 'إضافة مستخدم'
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
          breadcrumb: 'المستخدمين'
        }
      },
      {
        path: 'EmployeeEvaluation',
        loadChildren: () => import('../features/administrativeAffairs/employeeEvaluation/employee-evaluation.module')
          .then(m => m.EmployeeEvaluationModule),
        data: {
          breadcrumb: 'تقييمات المستخدمين'
        }
      },
      {
        path: 'EmployeeBonuses',
        loadChildren: () => import('../features/administrativeAffairs/employee-bonuses/employee-bonuses.module')
          .then(m => m.EmployeeBonusesModule),
        data: {
          breadcrumb: 'علاوات المستخدمين'
        }
      },
      {
        path: 'Clinics',
        loadChildren: () => import('../features/administrativeAffairs/clinics/clinics.module')
          .then(m => m.ClinicsModule),
        data: {
          breadcrumb: 'المصحات '
        }
      },
      {
        path: 'ReClassification',
        loadChildren: () => import('../features/administrativeAffairs/reClassification/reClassification.module')
          .then(m => m.ReClassificationModule),
        data: {
          breadcrumb: 'إعادة تصنيف '
        }
      },
      {
        path: 'SecondmentToOtherPosition',
        loadChildren: () => import('../features/administrativeAffairs/secondmentToOtherPostion/secondmentToOtherPostion.module')
          .then(m => m.SecondmentToOtherPostionModule),
        data: {
          breadcrumb: 'انتداب على وظيفة'
        }
      },
      {
        path: 'UpgradeWithoutIncrease',
        loadChildren: () => import('../features/administrativeAffairs/upgradeWithoutIncrease/upgradeWithoutIncrease.module')
          .then(m => m.UpgradeWithoutIncreaseModule),
        data: {
          breadcrumb: 'ترقية بدون زيادة '
        }
      },
      {
        path: 'Promotion',
        loadChildren: () => import('../features/administrativeAffairs/upgrade/upgrade.module')
          .then(m => m.UpgradeModule),
        data: {
          breadcrumb: 'ترقية مستخدم  '
        }
      },
      {
        path: 'Demotion',
        loadChildren: () => import('../features/administrativeAffairs/demotion/demotion.module')
          .then(m => m.DemotionModule),
        data: {
          breadcrumb: 'تخفيض الدرجة'
        }
      },
      {
        path: 'TerminationService',
        loadChildren: () => import('../features/administrativeAffairs/terminationOfService/terminationOfService.module')
          .then(m => m.TerminationOfServiceModule),
        data: {
          breadcrumb: 'إنهاء خدمة'
        }
      },

      // إدارة التقييمات
      {
        path: 'EmployeeEvaluationManagement',
        loadChildren: () => import('../features/employeeEvaluationManagement/employee-evaluation-management/employee-evaluation-management.module')
          .then(m => m.EmployeeEvaluationManagementModule),
        data: {
          breadcrumb: 'إدارة التقييمات'
        }
      },
      {
        path: 'EmployeeEvaluationManagementConfirmation',
        loadChildren: () => import('../features/employeeEvaluationManagement/employee-evaluation-confirmation-management/employee-evaluation-confirmation-management.module')
          .then(m => m.EmployeeEvaluationConfirmationModule),
        data: {
          breadcrumb: 'إدارة الإعتمادات'
        }
      },
      {
        path: 'EmployeeEvaluationManagementUsersManagement',
        loadChildren: () => import('../features/employeeEvaluationManagement/employee-evaluation-users-management/employee-evaluation-users-management.module')
          .then(m => m.EmployeeEvaluationUsersManagementModule),
        data: {
          breadcrumb: 'إدارة المستخدمين'
        }
      },
      {
        path: 'EmployeeEvaluationManagementReportsManagement',
        loadChildren: () => import('../features/employeeEvaluationManagement/employee-evaluation-reports/employee-evaluation-reports.module')
          .then(m => m.EmployeeEvaluationReportsModule),
        data: {
          breadcrumb: 'إدارة التقارير'
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
