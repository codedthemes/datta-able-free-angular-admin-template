import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTooltipModule} from "@angular/material/tooltip";
import {ReactiveFormsModule} from "@angular/forms";
import {EmployeeEvaluationServices} from "./employee-evaluation.services";
import { EmployeeEvaluationRouting} from "./employee-evaluation.routing";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {SharedModule} from "../../../shared/shared.module";
import {EmployeeEvaluationFacade} from "./employee-evaluation.facade";
import {EmployeeEvaluationComponent} from "./presentation/employee-evaluation.component";
import {OrganizationalUnitFacade} from "../organizational-unit/organizational-unit.facade";
import {OrganizationalUnitServices} from "../organizational-unit/organizational-unit.services";
import {EmployeeFacade} from "../employee/employee.facade";
import {EmployeeServices} from "../employee/employee.services";
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
      EmployeeEvaluationComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    ReactiveFormsModule,
    EmployeeEvaluationRouting,
    MatProgressSpinnerModule,
    SharedModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers:[EmployeeEvaluationFacade,EmployeeEvaluationServices, EmployeeFacade,EmployeeServices]
})

export class EmployeeEvaluationModule { }
