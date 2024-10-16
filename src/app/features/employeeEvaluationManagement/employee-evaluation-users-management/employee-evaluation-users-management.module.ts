import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeEvaluationUsersManagementRouting } from "./employee-evaluation-users-management.routing";
import { ReactiveFormsModule } from "@angular/forms";
import { EmployeeEvaluationUsersManagementServices } from "./employee-evaluation-users-management.services";
import { SharedModule } from "../../../shared/shared.module";
import EmployeeEvaluationUsersManagementComponent from './presentation/employee-evaluation-users-management.component';
import { CardComponent } from '../../../shared/components/card/card.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { EmployeeEvaluationUsersManagementFacade } from './employee-evaluation-users-management.facade';


@NgModule({
  declarations: [
    EmployeeEvaluationUsersManagementComponent,
  ],
  imports: [
    CommonModule,
    EmployeeEvaluationUsersManagementRouting,
    ReactiveFormsModule,
    SharedModule,
    CardComponent,
    MatTooltipModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [EmployeeEvaluationUsersManagementServices, EmployeeEvaluationUsersManagementFacade]
})
export class EmployeeEvaluationUsersManagementModule { }
