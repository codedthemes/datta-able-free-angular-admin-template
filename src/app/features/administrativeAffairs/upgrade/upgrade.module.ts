import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UpgradeRouting} from "./upgrade.routing";
import {ReactiveFormsModule} from "@angular/forms";
import {UpgradeFacade} from "./upgrade.facade";
import {UpgradeServices} from "./upgrade.services";
import {SharedModule} from "../../../shared/shared.module";
import UpgradeComponent from './presentation/upgrade.component';
import { CardComponent } from '../../../shared/components/card/card.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { EmployeeFacade } from '../employee/employee.facade';
import { EmployeeServices } from '../employee/employee.services';
import { JobTitleFacade } from '../job-title/job-title.facade';
import { JobTitleServices } from '../job-title/job-title.services';



@NgModule({
  declarations: [
    UpgradeComponent,
  ],
  imports: [
    CommonModule,
    UpgradeRouting,
    ReactiveFormsModule,
    SharedModule,
    CardComponent,
    MatTooltipModule,
    MatInputModule,
    MatButtonModule
  ],
  providers:[UpgradeFacade,UpgradeServices, EmployeeFacade,
    EmployeeServices,
    JobTitleFacade, JobTitleServices]
})
export class UpgradeModule { }
