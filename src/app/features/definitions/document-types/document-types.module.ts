import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTooltipModule} from "@angular/material/tooltip";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DocumentTypesServices} from "./document-types.services";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {SharedModule} from "../../../shared/shared.module";
import {DocumentTypesFacade} from "./document-types.facade";
import {DocumentTypesRouting} from "./document-types.routing";
import { DocumentTypesComponent } from './presentation/document-types.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { CardComponent } from '../../../shared/components/card/card.component';



@NgModule({
  declarations: [
      DocumentTypesComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    ReactiveFormsModule,
    DocumentTypesRouting,
    MatProgressSpinnerModule,
    SharedModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule,
    CardComponent
  ],
  providers:[DocumentTypesFacade, DocumentTypesServices]
})

export class DocumentTypesModule { }
