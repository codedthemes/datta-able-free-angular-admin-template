import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTooltipModule} from "@angular/material/tooltip";
import {ReactiveFormsModule} from "@angular/forms";
import {DefinitionPositionServices} from "./definition-position.services";
import { DefinitionPositionRouting} from "./definition-position.routing";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {SharedModule} from "../../../shared/shared.module";
import {DefinitionPositionFacade} from "./definition-position.facade";
import {DefinitionPositionComponent} from "./presentation/definition-position.component";
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
import { JobTitleFacade } from '../job-title/job-title.facade';
import { JobTitleServices } from '../job-title/job-title.services';



@NgModule({
  declarations: [
    DefinitionPositionComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    ReactiveFormsModule,
    DefinitionPositionRouting,
    MatProgressSpinnerModule,
    SharedModule,
    MatOptionModule,
    MatSelectModule,
    CardComponent],
  providers:[DefinitionPositionFacade,DefinitionPositionServices,
    OrganizationalUnitFacade, OrganizationalUnitServices,
    JobTitleFacade, JobTitleServices]
})

export class DefinitionPositionModule { }
