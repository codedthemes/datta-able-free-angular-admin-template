import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import MedicineListComponent from './presentation/medicine-list.component';

const routes: Routes = [
  {
    path: '',
    component: MedicineListComponent,
    data: {
      breadcrumb: 'قائمة الأدوية'
    }
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicineListRouting {}
