import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import TerminationOfServiceComponent from './presentation/terminationOfService.component';

const routes: Routes = [
    {
        path: '',
        component: TerminationOfServiceComponent,
        data: {
            breadcrumb: 'إعادة تصنيف'
        }
    }

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TerminationOfServiceRouting {

}
