import {Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { DialogData } from '../../add-employee.interface';

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialogAdd-employee-bonuses.html',
  imports: [
    MatInputModule,
    MatDialogModule,
    FormsModule,
    MatButtonModule
  ],
  standalone: true
})
export class DialogAddEmployeeBonuses {

  constructor(
    public dialogRef: MatDialogRef<DialogAddEmployeeBonuses>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
