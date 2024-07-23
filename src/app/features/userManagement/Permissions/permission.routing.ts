import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PermissionComponent} from "./presentation/permission.component";

const routes: Routes = [
    {
        path: '',
        component: PermissionComponent,
        data: {
            breadcrumb: 'الصلاحيات'
        }
    }

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PermissionRouting {

}