import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PermissionRouting} from "./permission.routing";
import {ReactiveFormsModule} from "@angular/forms";
import {PermissionFacade} from "./permission.facade";
import {PermissionServices} from "./permission.services";
import {SharedModule} from "../../../shared/shared.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {PermissionComponent} from "./presentation/permission.component";
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
  declarations: [
    PermissionComponent,
  ],
  imports: [
    CommonModule,
    PermissionRouting,
    ReactiveFormsModule,
    SharedModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatCheckboxModule
  ],
  providers:[PermissionFacade,PermissionServices]
})
export class PermissionModule { }
