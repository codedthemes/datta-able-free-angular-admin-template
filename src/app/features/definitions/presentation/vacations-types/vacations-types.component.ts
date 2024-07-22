import { SharedModule } from '../../../../theme/shared/shared.module';
import { Component } from '@angular/core';

@Component({
  selector: 'app-vacations-types',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './vacations-types.component.html',
  styleUrls: ['./vacations-types.component.scss']
})
export default class VacationsTypesComponent {}

// export class VacationsTypesComponent implements OnInit , OnDestroy  {
//   edit: boolean = false;
//   registerForm = this.fb.group({
//     id: [''],
//     name: ['', Validators.required],
//     yearlyBalanceCeiling: [ Validators.required],
//     minimumRequest: [ Validators.required],
//     maximumRequest: [ Validators.required],
//     salaryDiscountRate: [ Validators.required],
//     gender: [0, Validators.required],
//     isGrantedOnlyOnce: ['', Validators.required],
//   });
//   constructor(
//       private fb: FormBuilder,
//       protected vacationsTypesFacade: VacationsTypesFacade
//   ) {
//     this.onSubmit();
//   }
//   ngOnInit() {
//     this.edit = false;
//   }
//   ngOnDestroy(): void {
//
//   }
//   onSubmit(): void {
//     this.registerForm.controls.id.setValue('');
//     this.vacationsTypesFacade.GetVacationsType();
//   }
//   onDelete(Id: string): void {
//     this.edit = false;
//     this.vacationsTypesFacade.deleteVacationsType(Id);
//     this.registerForm.reset();
//   }
//   onReset(): void {
//     this.edit = false;
//     this.registerForm.reset();
//     this.registerForm.setErrors(null);
//   }
//   onAdd(): void {
//     if (this.registerForm.valid) {
//       if(this.edit) {
//         this.vacationsTypesFacade.UpdateVacationsType(this.registerForm?.value);
//         this.onReset();
//       }else{
//         this.vacationsTypesFacade.AddVacationsType(this.registerForm?.value);
//         this.onReset();
//
//       }
//     }
//   }
//   onEdit(bonusesType: any): void {
//     this.registerForm.patchValue(bonusesType);
//     this.edit = true;
//   }
//
//   protected readonly optionsGenderGeneral = optionsGenderGeneral;
//   protected readonly optionsBooleanGeneral = optionsBooleanGeneral;
// }
