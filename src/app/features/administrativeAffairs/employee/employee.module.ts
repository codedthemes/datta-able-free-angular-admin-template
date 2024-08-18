import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmployeeRouting} from "./employee.routing";
import {ReactiveFormsModule} from "@angular/forms";
import {EmployeeFacade} from "./employee.facade";
import {EmployeeServices} from "./employee.services";
import {SharedModule} from "../../../shared/shared.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import { EmployeeComponent } from './presentation/employee.component';
import { CardComponent } from '../../../shared/components/card/card.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    EmployeeComponent  ],
  imports: [
    CommonModule,
    EmployeeRouting,
    ReactiveFormsModule,
    SharedModule,
    MatFormFieldModule,
    CardComponent,
    MatButtonModule
  ],
  providers:[EmployeeFacade,EmployeeServices]
})
export class EmployeeModule { }
