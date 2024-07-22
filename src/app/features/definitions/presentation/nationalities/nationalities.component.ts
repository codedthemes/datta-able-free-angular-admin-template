import { SharedModule } from '../../../../theme/shared/shared.module';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nationalities',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './nationalities.component.html',
  styleUrls: ['./nationalities.component.scss']
})
export default class NationalitiesComponent {}

// export class NationalitiesComponent implements OnInit {
//   edit: boolean = false;
//   registerForm = this.fb.group({
//     id: [''],
//     name: ['', Validators.required],
//     nationalityTypeId: [0, Validators.required],
//     nationalityTypeName: [''],
//   });
//   constructor(
//       private fb: FormBuilder,
//       protected nationalitiesFacade: NationalitiesFacade,
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
//     this.nationalitiesFacade.GetNationality();
//   }
//   onDelete(Id: string): void {
//     this.edit = false;
//     this.nationalitiesFacade.deleteNationality(Id);
//     this.registerForm.reset();
//   }
//   onReset(): void {
//     this.edit = false;
//     this.registerForm.reset();
//     this.registerForm.setErrors(null);
//   }
//   onAdd(): void {
//     this.registerForm.value.nationalityTypeName = optionsNationalityType.find(option => option.value === this.registerForm.value.nationalityTypeId)?.label;
//     if (this.registerForm.valid) {
//       if(this.edit) {
//         this.nationalitiesFacade.UpdateNationality(this.registerForm?.value);
//         this.onReset();
//       }else{
//         this.nationalitiesFacade.AddNationality(this.registerForm?.value);
//         this.onReset();
//       }
//     }
//   }
//   onEdit(nationality: any): void {
//     this.registerForm.patchValue(nationality);
//     this.registerForm.value.nationalityTypeName = optionsNationalityType.find(option => option.value === this.registerForm.value.nationalityTypeId)?.label;
//     this.edit = true;
//   }
//
//   protected readonly optionsNationalityType = optionsNationalityType;
// }
