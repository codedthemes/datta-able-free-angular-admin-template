import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'Permission',
        loadComponent: () => import('./presentation/permissions/permission.component')
      },
      {
        path: 'Users',
        loadComponent: () => import('./presentation/users/users.component')
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule {}
