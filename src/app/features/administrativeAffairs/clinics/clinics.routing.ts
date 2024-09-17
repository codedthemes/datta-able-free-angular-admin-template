import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import ClinicsComponent from './presentation/clinics.component';

const routes: Routes = [
    {
        path: '',
        component: ClinicsComponent,
        data: {
            breadcrumb: 'المصحات'
        }
    }

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClinicsRouting {

}
