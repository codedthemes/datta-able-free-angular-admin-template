import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTooltipModule} from "@angular/material/tooltip";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UsersServices} from "./users.services";
import { UsersRouting} from "./users.routing";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {SharedModule} from "../../../shared/shared.module";
import {UsersFacade} from "./users.facade";
import {UsersComponent} from "./presentation/users.component";
import {PermissionFacade} from "../Permissions/permission.facade";
import {PermissionServices} from "../Permissions/permission.services";
import {EmployeeFacade} from "../../administrativeAffairs/employee/employee.facade";
import {EmployeeServices} from "../../administrativeAffairs/employee/employee.services";
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
  declarations: [
      UsersComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    ReactiveFormsModule,
    UsersRouting,
    MatProgressSpinnerModule,
    SharedModule,
    FormsModule,
    MatSelectModule,
    MatCheckboxModule

  ],
  providers:[UsersFacade,UsersServices, PermissionFacade,PermissionServices, EmployeeFacade,EmployeeServices]
})

export class UsersModule { }
