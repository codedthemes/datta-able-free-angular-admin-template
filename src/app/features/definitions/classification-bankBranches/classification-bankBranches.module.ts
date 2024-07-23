import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../../shared/shared.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ClassificationBankBranchesRouting} from "./classification-bankBranches.routing";
import {ClassificationBankBranchesService} from "./classification-bankBranches.services";
import {ClassificationBankBranchesFacade} from "./classification-bankBranches.facade";
import { MatTooltipModule } from '@angular/material/tooltip';
import { ClassificationBankBranchesComponent } from './presentation/classification-bankBranches.component';
import { CardComponent } from '../../../shared/components/card/card.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
    declarations: [
        ClassificationBankBranchesComponent,
    ],
  imports: [
    CommonModule,
    ClassificationBankBranchesRouting,
    ReactiveFormsModule,
    SharedModule,
    MatFormFieldModule,
    MatTooltipModule,
    CardComponent,
    MatButtonModule
  ],
    providers: [ClassificationBankBranchesFacade, ClassificationBankBranchesService]
})
export class ClassificationBankBranchesModule {}
