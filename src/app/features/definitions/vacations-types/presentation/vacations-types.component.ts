import {Component, OnDestroy, OnInit} from '@angular/core';
declare var $: any;
import {FormBuilder, Validators} from "@angular/forms";
import { VacationsTypesFacade } from '../vacations-types.facade';
import { optionsBooleanGeneral, optionsGenderGeneral } from 'src/app/core/core.interface';
@Component({
  selector: 'app-rewards-types',
  templateUrl: './vacations-types.component.html',
  styleUrl: './vacations-types.component.scss'
})
export class VacationsTypesComponent implements OnInit , OnDestroy  {
  edit: boolean = false;
  registerForm = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    yearlyBalanceCeiling: [ Validators.required],
    minimumRequest: [ Validators.required],
    maximumRequest: [ Validators.required],
    salaryDiscountRate: [ Validators.required],
    gender: [0, Validators.required],
    isGrantedOnlyOnce: ['', Validators.required],
  });
  constructor(
      private fb: FormBuilder,
      protected vacationsTypesFacade: VacationsTypesFacade
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
    this.vacationsTypesFacade.GetVacationsType();
  }
  onDelete(Id: string): void {
    this.edit = false;
    this.vacationsTypesFacade.deleteVacationsType(Id);
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
        this.vacationsTypesFacade.UpdateVacationsType(this.registerForm?.value);
        this.onReset();
      }else{
        this.vacationsTypesFacade.AddVacationsType(this.registerForm?.value);
        this.onReset();

      }
    }
  }
  onEdit(bonusesType: any): void {
    this.registerForm.patchValue(bonusesType);
    this.edit = true;
  }

  protected readonly optionsGenderGeneral = optionsGenderGeneral;
  protected readonly optionsBooleanGeneral = optionsBooleanGeneral;
}
