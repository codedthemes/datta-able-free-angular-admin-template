import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTooltipModule} from "@angular/material/tooltip";
import {ReactiveFormsModule} from "@angular/forms";
import {JobTitleServices} from "./job-title.services";
import { JobTitleRouting} from "./job-title.routing";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {SharedModule} from "../../../shared/shared.module";
import {JobTitleFacade} from "./job-title.facade";
import {JobTitleComponent} from "./presentation/job-title.component";
import {OrganizationalUnitFacade} from "../organizational-unit/organizational-unit.facade";
import {OrganizationalUnitServices} from "../organizational-unit/organizational-unit.services";
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
      JobTitleComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    ReactiveFormsModule,
    JobTitleRouting,
    MatProgressSpinnerModule,
    SharedModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers:[JobTitleFacade,JobTitleServices, OrganizationalUnitFacade, OrganizationalUnitServices]
})

export class JobTitleModule { }
