import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AddEmployeeComponent} from "./presentation/add-employee.component";

const routes: Routes = [
    {
        path: '',
        component: AddEmployeeComponent,
        data: {
            breadcrumb: 'تعريف وظيفة'
        }
    }

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddEmployeeRouting {

}
