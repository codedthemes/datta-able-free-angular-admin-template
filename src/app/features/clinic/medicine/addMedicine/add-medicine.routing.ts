import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import AddMedicineComponent from './presentation/add-medicine.component';

const routes: Routes = [
  {
    path: '',
    component: AddMedicineComponent,
    data: {
      breadcrumb: 'إضافة دواء'
    }
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddMedicineRouting {}
