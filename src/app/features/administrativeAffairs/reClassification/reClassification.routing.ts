import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import ReClassificationComponent from './presentation/reClassification.component';

const routes: Routes = [
    {
        path: '',
        component: ReClassificationComponent,
        data: {
            breadcrumb: 'إعادة تصنيف'
        }
    }

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReClassificationRouting {

}
