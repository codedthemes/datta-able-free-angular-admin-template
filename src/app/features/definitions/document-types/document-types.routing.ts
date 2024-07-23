import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import { DocumentTypesComponent } from './presentation/document-types.component';
const routes: Routes = [
    {
        path: '',
        component: DocumentTypesComponent,
        data: {
            breadcrumb: 'انواع المستندات'
        }
    }

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DocumentTypesRouting {

}
