import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
declare var $: any;
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RewardsTypesFacade} from "../../rewards-types.facade";
import {SharedFacade} from "../../../../../shared/shared.facade";
import {
  optionsCalculatingReward,
  optionsRewardType,
} from "../../rewards-types.interface";
@Component({
  selector: 'app-rewards-types',
  templateUrl: './rewards-types.component.html',
  styleUrl: './rewards-types.component.scss'
})
export class RewardsTypesComponent implements OnInit , OnDestroy {
  edit: boolean = false;
  registerForm = this.fb.group({
    id: [''],
    calculatingRewardValueName: [''],
    rewardTypeName: [''],
    name: ['', Validators.required],
    rewardTypeId: [0, Validators.required],
    calculatingRewardValueId: [0, Validators.required],
    value: [0, Validators.required ],
    percentage: [0, Validators.required],
  });

  constructor(
      private fb: FormBuilder,
      protected rewardsTypesFacade: RewardsTypesFacade,
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
    this.rewardsTypesFacade.GetRewards();
  }
  onDelete(Id: string): void {
    this.edit = false;
    this.rewardsTypesFacade.deleteReward(Id);
    this.registerForm.reset();
  }
  onReset(): void {
    this.edit = false;
    this.registerForm.reset();
    this.registerForm.setErrors(null);
  }
  resetCalculatingReward(): void {
    this.registerForm.controls.value.setValue(0);
    this.registerForm.controls.percentage.setValue(0);
  }
  onAdd(): void {
 this.registerForm.value.calculatingRewardValueId == 2? this.registerForm.controls.value.setValidators(Validators.required): this.registerForm.controls.value.setValidators(null);
 this.registerForm.value.calculatingRewardValueId == 3? this.registerForm.controls.percentage.setValidators(Validators.required): this.registerForm.controls.percentage.setValidators(null);
 this.registerForm.value.rewardTypeName = this.optionsRewardType.find(option => option.value === this.registerForm.value.rewardTypeId)?.label;
 this.registerForm.value.calculatingRewardValueName = this.optionsCalculatingReward.find(option => option.value === this.registerForm.value.calculatingRewardValueId)?.label;
    if (this.registerForm.valid) {
      if(this.edit) {
        this.rewardsTypesFacade.UpdateReward(this.registerForm?.value);
        this.onReset();
      }else{
        this.rewardsTypesFacade.AddReward(this.registerForm?.value);
        this.onReset();

      }
      }
    }
  onEdit(Reward: any): void {
    this.registerForm.patchValue(Reward);
    this.registerForm.value.rewardTypeName = this.optionsRewardType.find(option => option.value === this.registerForm.value.rewardTypeId)?.label;
    this.registerForm.value.calculatingRewardValueName = this.optionsCalculatingReward.find(option => option.value === this.registerForm.value.calculatingRewardValueId)?.label;
    this.edit = true;
 }

  protected readonly optionsRewardType = optionsRewardType;
  protected readonly optionsCalculatingReward = optionsCalculatingReward;
}
