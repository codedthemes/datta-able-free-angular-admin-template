import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import SecondmentToOtherPostionComponent from './presentation/secondmentToOtherPostion.component';

const routes: Routes = [
    {
        path: '',
        component: SecondmentToOtherPostionComponent,
        data: {
            breadcrumb: 'إعادة تصنيف'
        }
    }

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SecondmentToOtherPostionRouting {

}
