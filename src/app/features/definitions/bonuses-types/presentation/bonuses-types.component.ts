import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import { optionsBooleanGeneral } from 'src/app/core/core.interface';
import { BonusesTypesFacade } from '../bonuses-types.facade';
declare var $: any;

@Component({
  selector: 'app-rewards-types',
  templateUrl: './bonuses-types.component.html',
  styleUrl: './bonuses-types.component.scss'
})
export class BonusesTypesComponent implements OnInit {
  edit: boolean = false;
  registerForm = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    isFamilyBonuse: ['', Validators.required],
  });
  constructor(
      private fb: FormBuilder,
      protected bonusesTypesFacade: BonusesTypesFacade
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
    this.bonusesTypesFacade.GetBonusesType();
  }
  onDelete(Id: string): void {
    this.edit = false;
    this.bonusesTypesFacade.deleteBonusesType(Id);
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
        this.bonusesTypesFacade.UpdateBonusesType(this.registerForm?.value);
        this.onReset();
      }else{
        this.bonusesTypesFacade.AddBonusesType(this.registerForm?.value);
        this.onReset();

      }
    }
  }
  onEdit(bonusesType: any): void {
    this.registerForm.patchValue(bonusesType);
    console.log(this.registerForm)
    this.edit = true;
  }

  protected readonly optionsBooleanGeneral = optionsBooleanGeneral;
}
