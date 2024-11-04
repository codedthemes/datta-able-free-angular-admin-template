import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import HealthHistoryComponent from './presentation/health-history.component';

const routes: Routes = [
  {
    path: '',
    component: HealthHistoryComponent,
    data: {
      breadcrumb: 'السجل الصحي'
    }
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthHistoryRouting {}
