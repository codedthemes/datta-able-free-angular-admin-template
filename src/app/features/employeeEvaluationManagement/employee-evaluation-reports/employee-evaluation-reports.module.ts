import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeEvaluationReportsRouting } from "./employee-evaluation-reports.routing";
import { ReactiveFormsModule } from "@angular/forms";
import { EmployeeEvaluationReportsServices } from "./employee-evaluation-reports.services";
import { SharedModule } from "../../../shared/shared.module";
import EmployeeEvaluationReportsComponent from './presentation/employee-evaluation-reports.component';
import { CardComponent } from '../../../shared/components/card/card.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { EmployeeEvaluationReportsFacade } from './employee-evaluation-reports.facade';


@NgModule({
  declarations: [
    EmployeeEvaluationReportsComponent,
  ],
  imports: [
    CommonModule,
    EmployeeEvaluationReportsRouting,
    ReactiveFormsModule,
    SharedModule,
    CardComponent,
    MatTooltipModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [EmployeeEvaluationReportsServices, EmployeeEvaluationReportsFacade]
})
export class EmployeeEvaluationReportsModule { }
