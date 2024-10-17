import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeEvaluationManagementRouting } from "./employee-evaluation-management.routing";
import { ReactiveFormsModule } from "@angular/forms";
import { EmployeeEvaluationManagementServices } from "./employee-evaluation-management.services";
import { SharedModule } from "../../../shared/shared.module";
import EmployeeEvaluationManagementComponent from './presentation/employee-evaluation-management.component';
import { CardComponent } from '../../../shared/components/card/card.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { EmployeeEvaluationManagementFacade } from './employee-evaluation-management.facade';


@NgModule({
  declarations: [
    EmployeeEvaluationManagementComponent,
  ],
  imports: [
    CommonModule,
    EmployeeEvaluationManagementRouting,
    ReactiveFormsModule,
    SharedModule,
    CardComponent,
    MatTooltipModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [EmployeeEvaluationManagementServices, EmployeeEvaluationManagementFacade]
})
export class EmployeeEvaluationManagementModule { }
