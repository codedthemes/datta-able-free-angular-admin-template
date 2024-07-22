
import { SharedModule } from '../../../../theme/shared/shared.module';
import { Component } from '@angular/core';

@Component({
  selector: 'app-Courts',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './Courts.component.html',
  styleUrls: ['./Courts.component.scss']
})
export default class CourtsComponent {}


// export class CourtsComponent implements OnInit {
//   edit: boolean = false;
//   registerForm = this.fb.group({
//     id: [''],
//     name: ['', Validators.required],
//     courtPlace: ['', Validators.required],
//   });
//   constructor(
//       private fb: FormBuilder,
//       protected courtsFacade: CourtsFacade,
//       private cdr: ChangeDetectorRef
//   ) {
//     this.onSubmit();
//   }
//
//   ngOnInit() {
//     this.edit = false;
//   }
//   ngOnDestroy(): void {
//
//   }
//   onSubmit(): void {
//     this.registerForm.controls.id.setValue('');
//     this.courtsFacade.GetCourts();
//   }
//   onDelete(Id: string): void {
//     this.edit = false;
//     this.courtsFacade.deleteCourts(Id);
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
//         this.courtsFacade.UpdateCourts(this.registerForm?.value);
//         this.onReset();
//       }else{
//         this.courtsFacade.AddCourts(this.registerForm?.value);
//         this.onReset();
//
//       }
//     }
//   }
//   onEdit(courts: any): void {
//     this.registerForm.patchValue(courts);
//     this.edit = true;
//   }
// }
