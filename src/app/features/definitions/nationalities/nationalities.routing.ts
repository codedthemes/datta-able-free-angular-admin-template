import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import { NationalitiesComponent } from './presentation/nationalities.component';
const routes: Routes = [
    {
        path: '',
        component: NationalitiesComponent,
        data: {
            breadcrumb: 'الجنسيات'
        }
    }

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NationalitiesRouting {

}
