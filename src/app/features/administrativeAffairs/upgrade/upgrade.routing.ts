import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import UpgradeComponent from './presentation/upgrade.component';

const routes: Routes = [
    {
        path: '',
        component: UpgradeComponent,
        data: {
            breadcrumb: 'إعادة تصنيف'
        }
    }

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UpgradeRouting {

}
