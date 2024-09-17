import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClinicsRouting} from "./clinics.routing";
import {ReactiveFormsModule} from "@angular/forms";
import {ClinicsFacade} from "./clinics.facade";
import {ClinicsServices} from "./clinics.services";
import {SharedModule} from "../../../shared/shared.module";
import ClinicsComponent from './presentation/clinics.component';
import { CardComponent } from '../../../shared/components/card/card.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MessagesComponent } from '../../../shared/messages/messages.component';
import { EmployeeFacade } from '../employee/employee.facade';
import { EmployeeServices } from '../employee/employee.services';
import { DefinitionPositionFacade } from '../definition-position/definition-position.facade';
import { DefinitionPositionServices } from '../definition-position/definition-position.services';



@NgModule({
  declarations: [
    ClinicsComponent,
  ],
  imports: [
    CommonModule,
    ClinicsRouting,
    ReactiveFormsModule,
    SharedModule,
    CardComponent,
    MatTooltipModule,
    MatInputModule,
    MatButtonModule
  ],
  providers:[ClinicsFacade,ClinicsServices, EmployeeFacade, EmployeeServices, DefinitionPositionFacade, DefinitionPositionServices]
})
export class ClinicsModule { }
