import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import { PenaltiesComponent } from './presentation/Penalties.component';
const routes: Routes = [
    {
        path: '',
        component: PenaltiesComponent,
        data: {
            breadcrumb: 'الجزاءات'
        }
    }

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PenaltiesRouting {

}
