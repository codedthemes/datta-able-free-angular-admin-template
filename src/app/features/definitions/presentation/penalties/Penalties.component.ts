import { SharedModule } from '../../../../theme/shared/shared.module';
import { Component } from '@angular/core';

@Component({
  selector: 'app-penalties',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './penalties.component.html',
  styleUrls: ['./penalties.component.scss']
})
export default class PenaltiesComponent {}

// export class PenaltiesComponent implements OnInit {
//   edit: boolean = false;
//   registerForm = this.fb.group({
//     id: [''],
//     penaltyTypeId: [0, Validators.required],
//     discount: [ Validators.required],
//     penaltyTypeName: [''],
//   });
//   constructor(
//       private fb: FormBuilder,
//       protected penaltiesFacade: PenaltiesFacade,
//       private cdr: ChangeDetectorRef
//   ) {
//     this.onSubmit();
//   }
//
//   ngOnInit() {
//     this.edit = false;
//   }
//   onSubmit(): void {
//     this.registerForm.controls.id.setValue('');
//     this.penaltiesFacade.GetPenalties();
//   }
//   onDelete(Id: string): void {
//     this.edit = false;
//     this.penaltiesFacade.deletePenalties(Id);
//     this.registerForm.reset();
//   }
//   onReset(): void {
//     this.edit = false;
//     this.registerForm.reset();
//     this.registerForm.setErrors(null);
//   }
//   onAdd(): void {
//     this.registerForm.value.penaltyTypeName = optionsPenaltyType.find(option => option.value === this.registerForm.value.penaltyTypeId)?.label;
//     if (this.registerForm.valid) {
//       if(this.edit) {
//         this.penaltiesFacade.UpdatePenalties(this.registerForm?.value);
//         this.onReset();
//       }else{
//         this.penaltiesFacade.AddPenalties(this.registerForm?.value);
//         this.onReset();
//       }
//     }
//   }
//   onEdit(penalties: any): void {
//     this.registerForm.patchValue(penalties);
//     this.registerForm.value.penaltyTypeName = optionsPenaltyType.find(option => option.value === this.registerForm.value.penaltyTypeId)?.label;
//     this.edit = true;
//   }
//
//   protected readonly optionsPenaltyType = optionsPenaltyType;
// }

