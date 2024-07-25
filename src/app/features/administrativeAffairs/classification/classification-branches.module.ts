import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../../shared/shared.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ClassificationBranchesRouting} from "./classification-branches.routing";
import {ClassificationBranchesService} from "./classification-branches.services";
import {ClassificationBranchesFacade} from "./classification-branches.facade";
import { ClassificationBranchesComponent } from './presentation/classification-branches.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CardComponent } from '../../../shared/components/card/card.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
    declarations: [
        ClassificationBranchesComponent,
    ],
  imports: [
    CommonModule,
    ClassificationBranchesRouting,
    ReactiveFormsModule,
    SharedModule,
    MatFormFieldModule,
    MatTooltipModule,
    CardComponent,
    MatButtonModule
  ],
    providers: [ClassificationBranchesFacade, ClassificationBranchesService]
})
export class ClassificationBranchesModule {}
