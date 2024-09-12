import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTooltipModule} from "@angular/material/tooltip";
import {ReactiveFormsModule} from "@angular/forms";
import {EmployeeBonusesServices} from "./employee-bonuses.services";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {SharedModule} from "../../../shared/shared.module";
import {EmployeeBonusesFacade} from "./employee-bonuses.facade";
import {EmployeeBonusesRouting} from "./employee-bonuses.routing";
import { EmployeeBonusesComponent } from './presentation/employee-bonuses.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { CardComponent } from '../../../shared/components/card/card.component';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeFacade } from '../employee/employee.facade';
import { EmployeeServices } from '../employee/employee.services';



@NgModule({
  declarations: [
      EmployeeBonusesComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    ReactiveFormsModule,
    EmployeeBonusesRouting,
    MatProgressSpinnerModule,
    SharedModule,
    MatOptionModule,
    MatSelectModule,
    CardComponent,
    NgbCollapse
  ],
  providers:[EmployeeBonusesFacade, EmployeeBonusesServices, EmployeeFacade,EmployeeServices ]
})

export class EmployeeBonusesModule { }
