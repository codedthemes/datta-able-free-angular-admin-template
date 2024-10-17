import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import EmployeeEvaluationReportsComponent from './presentation/employee-evaluation-reports.component';

const routes: Routes = [
    {
        path: '',
        component: EmployeeEvaluationReportsComponent,
        data: {
            breadcrumb: 'إدارة التقارير'
        }
    }

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeeEvaluationReportsRouting{

}
