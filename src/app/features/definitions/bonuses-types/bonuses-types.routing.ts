import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import { BonusesTypesComponent } from './presentation/bonuses-types.component';
const routes: Routes = [
    {
        path: '',
        component: BonusesTypesComponent,
        data: {
            breadcrumb: 'انواع العلاوات'
        }
    }

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BonusesTypesRouting{

}
