import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import AddMedicineComponent from './presentation/add-medicine.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { AddMedicineRouting } from './add-medicine.routing';

@NgModule({
  declarations: [AddMedicineComponent],
  imports: [
    CommonModule,
    FormsModule,
    AddMedicineRouting,
    ReactiveFormsModule,
    SharedModule,
    CardComponent,
    MatTooltipModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: []
})
export class AddMedicineModule {}
