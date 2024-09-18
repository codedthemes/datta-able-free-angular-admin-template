import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import DemotionComponent from './presentation/demotion.component';

const routes: Routes = [
    {
        path: '',
        component: DemotionComponent,
        data: {
            breadcrumb: 'إعادة تصنيف'
        }
    }

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DemotionRouting {

}
