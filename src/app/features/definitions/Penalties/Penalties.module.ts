import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTooltipModule} from "@angular/material/tooltip";
import {ReactiveFormsModule} from "@angular/forms";
import {PenaltiesServices} from "./Penalties.services";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {SharedModule} from "../../../shared/shared.module";
import {PenaltiesFacade} from "./Penalties.facade";
import {PenaltiesRouting} from "./Penalties.routing";
import { PenaltiesComponent } from './presentation/Penalties.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
      PenaltiesComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    ReactiveFormsModule,
    PenaltiesRouting,
    MatProgressSpinnerModule,
    SharedModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers:[PenaltiesFacade, PenaltiesServices]
})

export class PenaltiesModule { }
