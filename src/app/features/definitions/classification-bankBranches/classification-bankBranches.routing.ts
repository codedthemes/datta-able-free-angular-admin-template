import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import { ClassificationBankBranchesComponent } from './presentation/classification-bankBranches.component';

const routes: Routes = [
    {
        path: '',
        component: ClassificationBankBranchesComponent,
        data: {
            breadcrumb: 'تصنيف فروع المصارف'
        }
    }

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClassificationBankBranchesRouting{

}
