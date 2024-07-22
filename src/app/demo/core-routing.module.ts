import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'signin',
        loadComponent: () => import('./pages/authentication/auth-signin/auth-signin.component')
      },
      {
        path: 'signup',
        loadComponent: () => import('./pages/authentication/auth-signup/auth-signup.component')
        // auth-signup/auth-signup.component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {
}
