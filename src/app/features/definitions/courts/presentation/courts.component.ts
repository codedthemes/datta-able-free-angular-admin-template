import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import { CourtsFacade } from '../courts.facade';
import { MessageType } from '../../../../shared/shared.interfaces';
import { SharedFacade } from '../../../../shared/shared.facade';
declare var $: any;
@Component({
  selector: 'app-evaluations-types',
  templateUrl: './courts.component.html',
  styleUrls: ['./courts.component.scss'],

})
export class CourtsComponent implements OnInit {
  edit: boolean = false;
  registerForm = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    courtPlace: ['', Validators.required],
  });
  constructor(
      private fb: FormBuilder,
      protected courtsFacade: CourtsFacade,
      private sharedFacade: SharedFacade
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
    this.courtsFacade.GetCourts();
  }
  onDelete(Id: string): void {
    this.edit = false;
    this.courtsFacade.deleteCourts(Id);
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
        this.courtsFacade.UpdateCourts(this.registerForm?.value);
        this.onReset();
      }else{
        this.courtsFacade.AddCourts(this.registerForm?.value);
        this.onReset();

      }
    }else {
      if (this.registerForm.value.name == '' || this.registerForm.controls.name.invalid) {
        this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء ادخال اسم', ['']);
        return;
      }else if(this.registerForm.value.courtPlace == '' || this.registerForm.controls.courtPlace.invalid) {
        this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء ادخال مكان المحكمة', ['']);
        return;
      }
    }
  }
  onEdit(courts: any): void {
    this.registerForm.patchValue(courts);
    this.edit = true;
  }
}
