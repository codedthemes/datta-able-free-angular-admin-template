import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import { BankBranchesComponent } from './presentation/bank-branches.component';

const routes: Routes = [
    {
        path: '',
        component: BankBranchesComponent,
        data: {
            breadcrumb: 'فروع المصارف'
        }
    }

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BanksBranchesRouting{

}
