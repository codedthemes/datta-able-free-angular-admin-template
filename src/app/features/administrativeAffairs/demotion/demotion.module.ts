import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DemotionRouting} from "./demotion.routing";
import {ReactiveFormsModule} from "@angular/forms";
import {DemotionFacade} from "./demotion.facade";
import {DemotionServices} from "./demotion.services";
import {SharedModule} from "../../../shared/shared.module";
import DemotionComponent from './presentation/demotion.component';
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
    DemotionComponent,
  ],
  imports: [
    CommonModule,
    DemotionRouting,
    ReactiveFormsModule,
    SharedModule,
    CardComponent,
    MatTooltipModule,
    MatInputModule,
    MatButtonModule
  ],
  providers:[DemotionFacade,DemotionServices, EmployeeFacade,
    EmployeeServices,
    JobTitleFacade, JobTitleServices]
})
export class DemotionModule { }
