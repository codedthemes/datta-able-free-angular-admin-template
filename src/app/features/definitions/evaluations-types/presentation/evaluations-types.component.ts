import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import { EvaluationsTypesFacade } from '../evaluations-types.facade';
declare var $: any;
@Component({
  selector: 'app-evaluations-types',
  templateUrl: './evaluations-types.component.html',
  styleUrls: ['./evaluations-types.component.scss'],

})
export class EvaluationsTypesComponent implements OnInit {
  edit: boolean = false;
  registerForm = this.fb.group({
    id: [''],
    name: ['', Validators.required],
  });

  constructor(
      private fb: FormBuilder,
      protected evaluationsTypesFacade: EvaluationsTypesFacade,
      private cdr: ChangeDetectorRef
  ) {
    this.onSubmit();
  }

  ngOnInit() {
    this.edit = false;
  }
  ngOnDestroy(): void {

  }
  onSubmit(): void {
    this.registerForm.controls.id.setValue('');
    this.evaluationsTypesFacade.GetEvaluationsType();
  }
  onDelete(Id: string): void {
    this.edit = false;
    this.evaluationsTypesFacade.deleteEvaluationsType(Id);
    this.registerForm.reset();
  }
  onReset(): void {
    this.edit = false;
    this.registerForm.reset();
    this.registerForm.setErrors(null);
  }
  onAdd(): void {
      if (this.registerForm.valid) {
      if(this.edit) {
        this.evaluationsTypesFacade.UpdateEvaluationsType(this.registerForm?.value);
        this.onReset();
      }else{
        this.evaluationsTypesFacade.AddEvaluationsType(this.registerForm?.value);
        this.onReset();

      }
    }
  }
  onEdit(evaluationsType: any): void {
   this.registerForm.patchValue(evaluationsType);
   this.edit = true;
  }
}
