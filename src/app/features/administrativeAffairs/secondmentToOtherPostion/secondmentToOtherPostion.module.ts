import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SecondmentToOtherPostionRouting} from "./secondmentToOtherPostion.routing";
import {ReactiveFormsModule} from "@angular/forms";
import {SecondmentToOtherPostionFacade} from "./secondmentToOtherPostion.facade";
import {SecondmentToOtherPostionServices} from "./secondmentToOtherPostion.services";
import {SharedModule} from "../../../shared/shared.module";
import SecondmentToOtherPostionComponent from './presentation/secondmentToOtherPostion.component';
import { CardComponent } from '../../../shared/components/card/card.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { EmployeeFacade } from '../employee/employee.facade';
import { EmployeeServices } from '../employee/employee.services';
import { JobTitleFacade } from '../job-title/job-title.facade';
import { JobTitleServices } from '../job-title/job-title.services';
import { ReClassificationFacade } from '../reClassification/reClassification.facade';
import { ReClassificationServices } from '../reClassification/reClassification.services';
import { DefinitionPositionFacade } from '../definition-position/definition-position.facade';
import { DefinitionPositionServices } from '../definition-position/definition-position.services';



@NgModule({
  declarations: [
    SecondmentToOtherPostionComponent,
  ],
  imports: [
    CommonModule,
    SecondmentToOtherPostionRouting,
    ReactiveFormsModule,
    SharedModule,
    CardComponent,
    MatTooltipModule,
    MatInputModule,
    MatButtonModule
  ],
  providers:[SecondmentToOtherPostionFacade,SecondmentToOtherPostionServices,
    ReClassificationFacade,ReClassificationServices,
    EmployeeFacade,EmployeeFacade, EmployeeServices,
    JobTitleFacade, JobTitleServices, DefinitionPositionFacade,DefinitionPositionServices]})
export class SecondmentToOtherPostionModule { }
