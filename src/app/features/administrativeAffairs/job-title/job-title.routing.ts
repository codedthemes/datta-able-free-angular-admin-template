import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {JobTitleComponent} from "./presentation/job-title.component";

const routes: Routes = [
    {
        path: '',
        component: JobTitleComponent,
        data: {
            breadcrumb: 'الصفة الوظيفية'
        }
    }

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JobTitleRouting{

}