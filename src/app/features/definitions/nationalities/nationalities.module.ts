import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTooltipModule} from "@angular/material/tooltip";
import {ReactiveFormsModule} from "@angular/forms";
import {NationalitiesServices} from "./nationalities.services";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {SharedModule} from "../../../shared/shared.module";
import {NationalitiesFacade} from "./nationalities.facade";
import {NationalitiesRouting} from "./nationalities.routing";
import { NationalitiesComponent } from './presentation/nationalities.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
      NationalitiesComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    ReactiveFormsModule,
    NationalitiesRouting,
    MatProgressSpinnerModule,
    SharedModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers:[NationalitiesFacade, NationalitiesServices]
})

export class NationalitiesModule { }
