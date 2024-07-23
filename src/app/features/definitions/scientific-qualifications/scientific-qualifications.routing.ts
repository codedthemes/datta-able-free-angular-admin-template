import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import { ScientificQualificationsComponent } from './presentation/scientific-qualifications.component';

const routes: Routes = [
    {
        path: '',
        component: ScientificQualificationsComponent,
        data: {
            breadcrumb: 'المؤهلات العلمية'
        }
    }

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ScientificQualificationsRouting {

}
