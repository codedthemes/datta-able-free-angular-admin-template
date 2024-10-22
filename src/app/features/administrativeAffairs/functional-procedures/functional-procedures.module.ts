import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FunctionalProceduresRouting} from "./functional-procedures.routing";
import {ReactiveFormsModule} from "@angular/forms";
import {FunctionalProceduresFacade} from "./functional-procedures.facade";
import {FunctionalProceduresServices} from "./functional-procedures.services";
import {SharedModule} from "../../../shared/shared.module";
import FunctionalProceduresComponent from './presentation/functional-procedures.component';
import { CardComponent } from '../../../shared/components/card/card.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MessagesComponent } from '../../../shared/messages/messages.component';
import { EmployeeFacade } from '../employee/employee.facade';
import { EmployeeServices } from '../employee/employee.services';
import { DefinitionPositionFacade } from '../definition-position/definition-position.facade';
import { DefinitionPositionServices } from '../definition-position/definition-position.services';
import { JobTitleFacade } from '../job-title/job-title.facade';
import { JobTitleServices } from '../job-title/job-title.services';



@NgModule({
  declarations: [
    FunctionalProceduresComponent,
  ],
  imports: [
    CommonModule,
    FunctionalProceduresRouting,
    ReactiveFormsModule,
    SharedModule,
    CardComponent,
    MatTooltipModule,
    MatInputModule,
    MatButtonModule
  ],
  providers:[FunctionalProceduresFacade,FunctionalProceduresServices, EmployeeFacade,
    EmployeeServices,
    JobTitleFacade, JobTitleServices]
})
export class FunctionalProceduresModule { }
