import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import MedicineComponent from './presentation/medicine.component';
import { MedicineRouting } from './medicine.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardComponent } from 'src/app/shared/components/card/card.component';

@NgModule({
  declarations: [MedicineComponent],
  imports: [
    CommonModule,
    FormsModule,
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
