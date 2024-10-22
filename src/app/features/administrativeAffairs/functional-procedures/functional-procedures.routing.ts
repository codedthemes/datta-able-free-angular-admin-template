import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import FunctionalProceduresComponent from './presentation/functional-procedures.component';

const routes: Routes = [
    {
        path: '',
        component: FunctionalProceduresComponent,
        data: {
            breadcrumb: 'إجراءات المستخدمين'
        }
    }

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FunctionalProceduresRouting {

}
