import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {OrganizationalUnitComponent} from "./presentation/organizational-unit.component";

const routes: Routes = [
    {
        path: '',
        component: OrganizationalUnitComponent,
        data: {
            breadcrumb: 'OrganizationalUnit'
        }
    }

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrganizationalUnitRouting{

}