import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'signup',
        loadChildren: () => import('./auth-signup/auth-signup.module').then(module => module.AuthSignupModule)
      },
      {
        path: 'signup-v2',
        loadChildren: () => import('./auth-signup-v2/auth-signup-v2.module').then(module => module.AuthSignupV2Module)
      },
      {
        path: 'signin',
        loadChildren: () => import('./auth-signin/auth-signin.module').then(module => module.AuthSigninModule)
      },
      {
        path: 'signin-v2',
        loadChildren: () => import('./auth-signin-v2/auth-signin-v2.module').then(module => module.AuthSigninV2Module)
      },
      {
        path: 'reset-password',
        loadChildren: () => import('./auth-reset-password/auth-reset-password.module').then(module => module.AuthResetPasswordModule)
      },
      {
        path: 'reset-password-v2',
        loadChildren: () => import('./auth-reset-password-v2/auth-reset-password-v2.module')
          .then(module => module.AuthResetPasswordV2Module)
      },
      {
        path: 'change-password',
        loadChildren: () => import('./auth-change-password/auth-change-password.module').then(module => module.AuthChangePasswordModule)
      },
      {
        path: 'change-password-v2',
        loadChildren: () => import('./auth-change-password-v2/auth-change-password-v2.module')
          .then(module => module.AuthChangePasswordV2Module)
      },
      {
        path: 'personal-information',
        loadChildren: () => import('./auth-personal-info/auth-personal-info.module').then(module => module.AuthPersonalInfoModule)
      },
      {
        path: 'profile-settings',
        loadChildren: () => import('./auth-profile-settings/auth-profile-settings.module').then(module => module.AuthProfileSettingsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
