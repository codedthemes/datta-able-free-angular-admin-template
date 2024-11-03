import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import PatientVisitComponent from './presentation/patient-visit.component';

const routes: Routes = [
  {
    path: '',
    component: PatientVisitComponent,
    data: {
      breadcrumb: 'عرض زيارات المرضى'
    }
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientVisitRouting {}
