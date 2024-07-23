import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmployeeRouting} from "./employee.routing";
import {ReactiveFormsModule} from "@angular/forms";
import {EmployeeFacade} from "./employee.facade";
import {EmployeeServices} from "./employee.services";
import {SharedModule} from "../../../shared/shared.module";
import {MatFormFieldModule} from "@angular/material/form-field";



@NgModule({
  declarations: [
    // MainBanksComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRouting,
    ReactiveFormsModule,
    SharedModule,
    MatFormFieldModule,
  ],
  providers:[EmployeeFacade,EmployeeServices]
})
export class EmployeeModule { }
