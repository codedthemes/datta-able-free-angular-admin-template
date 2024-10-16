import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import EmployeeEvaluationConfirmationComponent from './presentation/employee-evaluation-confirmation-management.component';

const routes: Routes = [
    {
        path: '',
        component: EmployeeEvaluationConfirmationComponent,
        data: {
            breadcrumb: 'إدارة الإعتمادات'
        }
    }

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeeEvaluationConfirmationRouting{

}
