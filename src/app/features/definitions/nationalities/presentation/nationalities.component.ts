import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import { NationalitiesFacade } from '../nationalities.facade';
import { optionsNationalityType } from '../nationalities.interface';
import { MessageType } from '../../../../shared/shared.interfaces';
import { SharedFacade } from '../../../../shared/shared.facade';
declare var $: any;

@Component({
  selector: 'app-rewards-types',
  templateUrl: './nationalities.component.html',
  styleUrl: './nationalities.component.scss'
})
export class NationalitiesComponent implements OnInit {
  edit: boolean = false;
  registerForm = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    nationalityTypeId: [null, Validators.required],
    nationalityTypeName: [''],
  });
  constructor(
      private fb: FormBuilder,
      protected nationalitiesFacade: NationalitiesFacade,
      private sharedFacade: SharedFacade
  ) {
    this.onSubmit();
  }

  ngOnInit() {
    this.edit = false;
  }
  onSubmit(): void {
    this.registerForm.controls.id.setValue('');
    this.nationalitiesFacade.GetNationality();
  }
  onDelete(Id: string): void {
    this.edit = false;
    this.nationalitiesFacade.deleteNationality(Id);
    this.registerForm.reset();
  }
  onReset(): void {
    this.edit = false;
    this.registerForm.reset();
    this.registerForm.setErrors(null);
  }
  onAdd(): void {
    if (this.registerForm.valid) {
      this.registerForm.value.nationalityTypeName = optionsNationalityType.find(option => option.value == this.registerForm.value.nationalityTypeId)?.label;
      if(this.edit) {
        this.nationalitiesFacade.UpdateNationality(this.registerForm?.value);
        this.onReset();
      }else{
        this.nationalitiesFacade.AddNationality(this.registerForm?.value);
        this.onReset();
      }
    }else {
      if (this.registerForm.value.name == '' || this.registerForm.controls.name.invalid) {
        this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء ادخال اسم', ['']);
        return;
      }else if(this.registerForm.controls.nationalityTypeId.invalid) {
        this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء اختر النوع', ['']);
        return;
      }
    }
  }
  onEdit(nationality: any): void {
    this.registerForm.patchValue(nationality);
    this.registerForm.value.nationalityTypeName = optionsNationalityType.find(option => option.value == this.registerForm.value.nationalityTypeId)?.label;
    this.edit = true;
  }

  protected readonly optionsNationalityType = optionsNationalityType;
}
