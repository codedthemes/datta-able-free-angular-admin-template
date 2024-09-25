import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TerminationOfServiceRouting} from "./terminationOfService.routing";
import {ReactiveFormsModule} from "@angular/forms";
import {TerminationOfServiceFacade} from "./terminationOfService.facade";
import {TerminationOfServiceServices} from "./terminationOfService.services";
import {SharedModule} from "../../../shared/shared.module";
import TerminationOfServiceComponent from './presentation/terminationOfService.component';
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
    TerminationOfServiceComponent,
  ],
  imports: [
    CommonModule,
    TerminationOfServiceRouting,
    ReactiveFormsModule,
    SharedModule,
    CardComponent,
    MatTooltipModule,
    MatInputModule,
    MatButtonModule
  ],
  providers:[TerminationOfServiceFacade,TerminationOfServiceServices, EmployeeFacade,
    EmployeeServices,
    JobTitleFacade, JobTitleServices]
})
export class TerminationOfServiceModule { }
