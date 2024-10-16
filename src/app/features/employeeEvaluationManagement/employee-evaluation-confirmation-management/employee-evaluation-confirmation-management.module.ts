import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeEvaluationConfirmationRouting } from "./employee-evaluation-confirmation-management.routing";
import { ReactiveFormsModule } from "@angular/forms";
import { EmployeeEvaluationConfirmationServices } from "./employee-evaluation-confirmation-management.services";
import { SharedModule } from "../../../shared/shared.module";
import EmployeeEvaluationConfirmation from './presentation/employee-evaluation-confirmation-management.component';
import { CardComponent } from '../../../shared/components/card/card.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { EmployeeEvaluationConfirmationFacade } from './employee-evaluation-confirmation-management.facade';


@NgModule({
  declarations: [
    EmployeeEvaluationConfirmation,
  ],
  imports: [
    CommonModule,
    EmployeeEvaluationConfirmationRouting,
    ReactiveFormsModule,
    SharedModule,
    CardComponent,
    MatTooltipModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [EmployeeEvaluationConfirmationServices, EmployeeEvaluationConfirmationFacade]
})
export class EmployeeEvaluationConfirmationModule { }
