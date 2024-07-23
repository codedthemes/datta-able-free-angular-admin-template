import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import { VacationsTypesComponent } from './presentation/vacations-types.component';
const routes: Routes = [
    {
        path: '',
        component: VacationsTypesComponent,
        data: {
            breadcrumb: 'انواع الإجازات'
        }
    }

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VacationsTypesRouting {

}
