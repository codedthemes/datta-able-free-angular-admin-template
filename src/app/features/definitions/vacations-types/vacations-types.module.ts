import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTooltipModule} from "@angular/material/tooltip";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {VacationsTypesServices} from "./vacations-types.services";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {SharedModule} from "../../../shared/shared.module";
import {VacationsTypesFacade} from "./vacations-types.facade";
import {VacationsTypesRouting} from "./vacations-types.routing";
import { VacationsTypesComponent } from './presentation/vacations-types.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { CardComponent } from '../../../shared/components/card/card.component';



@NgModule({
  declarations: [
      VacationsTypesComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    ReactiveFormsModule,
    VacationsTypesRouting,
    MatProgressSpinnerModule,
    SharedModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule,
    CardComponent
  ],
  providers:[VacationsTypesFacade, VacationsTypesServices]
})

export class VacationsTypesModule { }
