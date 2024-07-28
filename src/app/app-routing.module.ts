import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import LoginComponent from './core/Presentation/login/login.component';
import { MainComponent } from './core/Presentation/main/main/main.component';
import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
