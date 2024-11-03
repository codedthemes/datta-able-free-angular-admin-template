import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import PatientComponent from './presentation/patient.component';

const routes: Routes = [
  {
    path: '',
    component: PatientComponent,
    data: {
      breadcrumb: 'زيارة مريض'
    }
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicineRouting {}
