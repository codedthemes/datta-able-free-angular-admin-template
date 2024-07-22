import { SharedModule } from '../../../../theme/shared/shared.module';
import { Component } from '@angular/core';

@Component({
  selector: 'app-evaluations-types',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './evaluations-types.component.html',
  styleUrls: ['./evaluations-types.component.scss']
})
export default class EvaluationsTypesComponent {}


// export class EvaluationsTypesComponent implements OnInit {
//   edit: boolean = false;
//   registerForm = this.fb.group({
//     id: [''],
//     name: ['', Validators.required],
//   });
//
//   constructor(
//       private fb: FormBuilder,
//       protected evaluationsTypesFacade: EvaluationsTypesFacade,
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
//     this.evaluationsTypesFacade.GetEvaluationsType();
//   }
//   onDelete(Id: string): void {
//     this.edit = false;
//     this.evaluationsTypesFacade.deleteEvaluationsType(Id);
//     this.registerForm.reset();
//   }
//   onReset(): void {
//     this.edit = false;
//     this.registerForm.reset();
//     this.registerForm.setErrors(null);
//   }
//   onAdd(): void {
//       if (this.registerForm.valid) {
//       if(this.edit) {
//         this.evaluationsTypesFacade.UpdateEvaluationsType(this.registerForm?.value);
//         this.onReset();
//       }else{
//         this.evaluationsTypesFacade.AddEvaluationsType(this.registerForm?.value);
//         this.onReset();
//
//       }
//     }
//   }
//   onEdit(evaluationsType: any): void {
//    this.registerForm.patchValue(evaluationsType);
//    this.edit = true;
//   }
// }
