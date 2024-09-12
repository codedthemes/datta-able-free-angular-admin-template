import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import { EmployeeBonusesComponent } from './presentation/employee-bonuses.component';
const routes: Routes = [
    {
        path: '',
        component: EmployeeBonusesComponent,
        data: {
            breadcrumb: 'الجزاءات'
        }
    }

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeeBonusesRouting {

}
