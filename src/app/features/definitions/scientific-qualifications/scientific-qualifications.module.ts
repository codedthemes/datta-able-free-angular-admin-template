import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScientificQualificationsRouting} from "./scientific-qualifications.routing";
import {ReactiveFormsModule} from "@angular/forms";
import {ScientificQualificationsFacade} from "./scientific-qualifications.facade";
import {ScientificQualificationsServices} from "./scientific-qualifications.services";
import {SharedModule} from "../../../shared/shared.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import { ScientificQualificationsComponent } from './presentation/scientific-qualifications.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CardComponent } from '../../../shared/components/card/card.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    ScientificQualificationsComponent,
  ],
  imports: [
    CommonModule,
    ScientificQualificationsRouting,
    ReactiveFormsModule,
    SharedModule,
    MatFormFieldModule,
    MatTooltipModule,
    CardComponent,
    MatButtonModule
  ],
  providers:[ScientificQualificationsFacade,ScientificQualificationsServices]
})
export class ScientificQualificationsModule { }
