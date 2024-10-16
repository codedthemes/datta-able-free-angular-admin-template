import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import EmployeeEvaluationUsersManagementComponent from './presentation/employee-evaluation-users-management.component';

const routes: Routes = [
    {
        path: '',
        component: EmployeeEvaluationUsersManagementComponent,
        data: {
            breadcrumb: 'إدارة المستخدمين'
        }
    }

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeeEvaluationUsersManagementRouting{

}
