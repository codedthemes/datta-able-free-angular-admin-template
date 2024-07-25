import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTooltipModule} from "@angular/material/tooltip";
import {ReactiveFormsModule} from "@angular/forms";
import {OrganizationalUnitServices} from "./organizational-unit.services";
import { OrganizationalUnitRouting} from "./organizational-unit.routing";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {SharedModule} from "../../../shared/shared.module";
import {OrganizationalUnitFacade} from "./organizational-unit.facade";
import {OrganizationalUnitComponent} from "./presentation/organizational-unit.component";
import {ClassificationBranchesService} from "../classification/classification-branches.services";
import {ClassificationBranchesFacade} from "../classification/classification-branches.facade";
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { CardComponent } from '../../../shared/components/card/card.component';



@NgModule({
  declarations: [
      OrganizationalUnitComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    ReactiveFormsModule,
    OrganizationalUnitRouting,
    MatProgressSpinnerModule,
    SharedModule,
    MatOptionModule,
    MatSelectModule,
    CardComponent
  ],
  providers:[OrganizationalUnitFacade,OrganizationalUnitServices, ClassificationBranchesFacade , ClassificationBranchesService]
})

export class OrganizationalUnitModule { }
