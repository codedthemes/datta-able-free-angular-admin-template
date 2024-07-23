import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTooltipModule} from "@angular/material/tooltip";
import {ReactiveFormsModule} from "@angular/forms";
import {BonusesTypesServices} from "./bonuses-types.services";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {SharedModule} from "../../../shared/shared.module";
import {BonusesTypesFacade} from "./bonuses-types.facade";
import {BonusesTypesRouting} from "./bonuses-types.routing";
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { BonusesTypesComponent } from './presentation/bonuses-types.component';
import { CardComponent } from '../../../shared/components/card/card.component';



@NgModule({
  declarations: [
      BonusesTypesComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    ReactiveFormsModule,
    BonusesTypesRouting,
    MatProgressSpinnerModule,
    SharedModule,
    MatOptionModule,
    MatSelectModule,
    CardComponent
  ],
  providers:[BonusesTypesFacade, BonusesTypesServices]
})

export class BonusesTypesModule { }
