import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { CardComponent } from '../../../shared/components/card/card.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import MedicineComponent from './presentation/medicine.component';
import { MedicineRouting } from './medicine.routing';

@NgModule({
  declarations: [MedicineComponent],
  imports: [
    CommonModule,
    MedicineRouting,
    ReactiveFormsModule,
    SharedModule,
    CardComponent,
    MatTooltipModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: []
})
export class MedicineModule {}
