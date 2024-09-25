import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {EmployeeEvaluationComponent} from "./presentation/employee-evaluation.component";

const routes: Routes = [
    {
        path: '',
        component: EmployeeEvaluationComponent,
        data: {
            breadcrumb: 'تقييمات المستخدم'
        }
    }

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeeEvaluationRouting {

}
