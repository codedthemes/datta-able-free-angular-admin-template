import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import MedicineComponent from './presentation/medicine.component';

const routes: Routes = [
  {
    path: '',
    component: MedicineComponent,
    data: {
      breadcrumb: 'إدارة التقارير'
    }
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicineRouting {}
