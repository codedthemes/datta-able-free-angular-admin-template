import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import BanksComponent from './presentation/banks.component';

const routes: Routes = [
    {
        path: '',
        component: BanksComponent,
        data: {
            breadcrumb: 'المصارف'
        }
    }

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BanksRouting{

}
