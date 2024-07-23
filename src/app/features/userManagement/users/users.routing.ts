import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {UsersComponent} from "./presentation/users.component";

const routes: Routes = [
    {
        path: '',
        component: UsersComponent,
        data: {
            breadcrumb: 'الصفة الوظيفية'
        }
    }

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRouting {

}