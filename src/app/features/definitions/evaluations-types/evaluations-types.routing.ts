import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import { EvaluationsTypesComponent } from './presentation/evaluations-types.component';

const routes: Routes = [
    {
        path: '',
        component: EvaluationsTypesComponent,
        data: {
            breadcrumb: 'انواع التقييمات'
        }
    }

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EvaluationsTypesRouting {

}
