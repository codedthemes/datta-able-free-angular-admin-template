import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {DefinitionPositionComponent} from "./presentation/definition-position.component";

const routes: Routes = [
    {
        path: '',
        component: DefinitionPositionComponent,
        data: {
            breadcrumb: 'تعريف وظيفة'
        }
    }

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DefinitionPositionRouting {

}
