import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTooltipModule} from "@angular/material/tooltip";
import {ReactiveFormsModule} from "@angular/forms";
import {BankBranchesServices} from "./bank-branches.services";
import {BanksBranchesRouting} from "./bank-branches.routing";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {SharedModule} from "../../../shared/shared.module";
import {BankBranchesFacade} from "./bank-branches.facade";
import { BanksFacade } from '../bank/banks.facade';
import { BanksServices } from '../bank/banks.services';
import { ClassificationBankBranchesFacade } from '../classification-bankBranches/classification-bankBranches.facade';
import { ClassificationBankBranchesService } from '../classification-bankBranches/classification-bankBranches.services';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { BankBranchesComponent } from './presentation/bank-branches.component';
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from '../../../shared/components/card/card.component';


@NgModule({
  declarations: [
    BankBranchesComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    ReactiveFormsModule,
    BanksBranchesRouting,
    MatProgressSpinnerModule,
    SharedModule,
    MatOptionModule,
    MatSelectModule,
    CardComponent
  ],
  providers:[BankBranchesFacade,BankBranchesServices, BanksFacade,BanksServices, ClassificationBankBranchesFacade, ClassificationBankBranchesService]
})

export class BankBranchesModule { }
