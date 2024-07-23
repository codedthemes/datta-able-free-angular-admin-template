import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EvaluationsTypesRouting} from "./evaluations-types.routing";
import {ReactiveFormsModule} from "@angular/forms";
import {EvaluationsTypesFacade} from "./evaluations-types.facade";
import {EvaluationsTypesServices} from "./evaluations-types.services";
import {SharedModule} from "../../../shared/shared.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import { EvaluationsTypesComponent } from './presentation/evaluations-types.component';
import { MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
  declarations: [
    EvaluationsTypesComponent,
  ],
  imports: [
    CommonModule,
    EvaluationsTypesRouting,
    ReactiveFormsModule,
    SharedModule,
    MatFormFieldModule,
    MatTooltipModule
  ],
  providers:[EvaluationsTypesFacade,EvaluationsTypesServices]
})
export class EvaluationsTypesModule { }
