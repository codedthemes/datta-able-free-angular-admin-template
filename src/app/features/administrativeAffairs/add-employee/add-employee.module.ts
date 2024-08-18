import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTooltipModule} from "@angular/material/tooltip";
import {ReactiveFormsModule} from "@angular/forms";
import {AddEmployeeServices} from "./add-employee.services";
import { AddEmployeeRouting} from "./add-employee.routing";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {SharedModule} from "../../../shared/shared.module";
import {AddEmployeeFacade} from "./add-employee.facade";
import {AddEmployeeComponent} from "./presentation/add-employee.component";
import {OrganizationalUnitFacade} from "../organizational-unit/organizational-unit.facade";
import {OrganizationalUnitServices} from "../organizational-unit/organizational-unit.services";
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { CardComponent } from '../../../shared/components/card/card.component';
import {
  ScientificQualificationsFacade
} from '../../definitions/scientific-qualifications/scientific-qualifications.facade';
import {
  ScientificQualificationsServices
} from '../../definitions/scientific-qualifications/scientific-qualifications.services';
import { MatStepperModule } from '@angular/material/stepper';
import { DefinitionPositionFacade } from '../definition-position/definition-position.facade';
import { DefinitionPositionServices } from '../definition-position/definition-position.services';
import { NationalitiesFacade } from '../../definitions/nationalities/nationalities.facade';
import { NationalitiesServices } from '../../definitions/nationalities/nationalities.services';



@NgModule({
  declarations: [
    AddEmployeeComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    ReactiveFormsModule,
    AddEmployeeRouting,
    MatProgressSpinnerModule,
    SharedModule,
    MatOptionModule,
    MatSelectModule,
    CardComponent,
    MatStepperModule
  ],
  providers:[AddEmployeeFacade,AddEmployeeServices,
    OrganizationalUnitFacade, OrganizationalUnitServices,
    ScientificQualificationsFacade, ScientificQualificationsServices,
    DefinitionPositionFacade, DefinitionPositionServices,
    NationalitiesFacade, NationalitiesServices ]
})

export class AddEmployeeModule { }
