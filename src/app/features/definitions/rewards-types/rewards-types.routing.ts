import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import { RewardsTypesComponent } from './presentation/rewards-types.component';
const routes: Routes = [
    {
        path: '',
        component: RewardsTypesComponent,
        data: {
            breadcrumb: 'انواع المكافأت'
        }
    }

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RewardsTypesRouting {

}
