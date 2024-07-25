import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CourtsRouting} from "./courts.routing";
import {ReactiveFormsModule} from "@angular/forms";
import {CourtsFacade} from "./courts.facade";
import {CourtsServices} from "./courts.services";
import {SharedModule} from "../../../shared/shared.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import { MatTooltipModule } from '@angular/material/tooltip';
import { CourtsComponent } from './presentation/courts.component';
import { CardComponent } from '../../../shared/components/card/card.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    CourtsComponent,
  ],
  imports: [
    CommonModule,
    CourtsRouting,
    ReactiveFormsModule,
    SharedModule,
    MatFormFieldModule,
    MatTooltipModule,
    CardComponent,
    MatButtonModule
  ],
  providers:[CourtsFacade,CourtsServices]
})
export class CourtsModule { }
