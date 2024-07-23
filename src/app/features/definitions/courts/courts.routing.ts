import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import { CourtsComponent } from './presentation/courts.component';

const routes: Routes = [
    {
        path: '',
        component: CourtsComponent,
        data: {
            breadcrumb: 'المحاكم'
        }
    }

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CourtsRouting {

}
