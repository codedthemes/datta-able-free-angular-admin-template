import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTooltipModule} from "@angular/material/tooltip";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RewardsTypesServices} from "./rewards-types.services";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {SharedModule} from "../../../shared/shared.module";
import {RewardsTypesFacade} from "./rewards-types.facade";
import {RewardsTypesRouting} from "./rewards-types.routing";
import { MatSelectModule } from '@angular/material/select';
import { RewardsTypesComponent } from './presentation/rewards-types.component';
import { CardComponent } from '../../../shared/components/card/card.component';



@NgModule({
  declarations: [
      RewardsTypesComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    ReactiveFormsModule,
    RewardsTypesRouting,
    MatProgressSpinnerModule,
    SharedModule,

    FormsModule,
    MatSelectModule,
    CardComponent
  ],
  providers:[RewardsTypesFacade, RewardsTypesServices]
})

export class RewardsTypesModule { }
