import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import EmployeeEvaluationManagementComponent from './presentation/employee-evaluation-management.component';

const routes: Routes = [
    {
        path: '',
        component: EmployeeEvaluationManagementComponent,
        data: {
            breadcrumb: 'إدارة التقييمات'
        }
    }

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeeEvaluationManagementRouting{

}
