import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import UpgradeWithoutIncreaseComponent from './presentation/upgradeWithoutIncrease.component';

const routes: Routes = [
    {
        path: '',
        component: UpgradeWithoutIncreaseComponent,
        data: {
            breadcrumb: 'إعادة تصنيف'
        }
    }

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UpgradeWithoutIncreaseRouting {

}
