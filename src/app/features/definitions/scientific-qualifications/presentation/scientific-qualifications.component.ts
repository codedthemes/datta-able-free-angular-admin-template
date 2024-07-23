import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import { ScientificQualificationsFacade } from '../scientific-qualifications.facade';
declare var $: any;
@Component({
  selector: 'app-evaluations-types',
  templateUrl: './scientific-qualifications.component.html',
  styleUrls: ['./scientific-qualifications.component.scss'],

})
export class ScientificQualificationsComponent implements OnInit {
  edit: boolean = false;
  registerForm = this.fb.group({
    id: [''],
    name: ['', Validators.required],
  });
  constructor(
      private fb: FormBuilder,
      protected scientificQualificationsFacade: ScientificQualificationsFacade,
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
    this.scientificQualificationsFacade.GetScientificQualifications();
  }
  onDelete(Id: string): void {
    this.edit = false;
    this.scientificQualificationsFacade.deleteScientificQualifications(Id);
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
        this.scientificQualificationsFacade.UpdateScientificQualifications(this.registerForm?.value);
        this.onReset();
      }else{
        this.scientificQualificationsFacade.AddScientificQualifications(this.registerForm?.value);
        this.onReset();

      }
    }
  }
  onEdit(scientificQualifications: any): void {
    this.registerForm.patchValue(scientificQualifications);
    this.edit = true;
  }
}
