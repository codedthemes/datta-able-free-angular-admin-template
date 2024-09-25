import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import { EmployeeComponent } from './presentation/employee.component';

const routes: Routes = [
    {
        path: '',
        component: EmployeeComponent,
        data: {
            breadcrumb: 'المستخدمين'
        }
    }

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeeRouting {

}
