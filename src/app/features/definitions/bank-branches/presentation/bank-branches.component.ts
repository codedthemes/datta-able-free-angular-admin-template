import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

import { BanksFacade } from '../../bank/banks.facade';
import { BankBranchesFacade } from '../bank-branches.facade';
import { ClassificationBankBranchesFacade } from '../../classification-bankBranches/classification-bankBranches.facade';
declare var $: any;

@Component({
  selector: 'app-rewards-types',
  templateUrl: './bank-branches.component.html',
  styleUrl: './bank-branches.component.scss'
})
export class BankBranchesComponent implements OnInit {
  edit: boolean = false;
  registerForm = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    prefix: ['', Validators.required],
    bankId: ['', Validators.required],
    bankName: [],
    bankClasscificationId: ['', Validators.required],
    bankClasscificationName: [],

  });
  registerFormSearch = this.fb.group({
    bankId: ['', Validators.required],
    classcificationId: ['', Validators.required],
  });
  constructor(  private fb: FormBuilder,
                protected bankBranchesFacade: BankBranchesFacade,
                protected banksFacade: BanksFacade,
                protected classificationBankBranchesFacade: ClassificationBankBranchesFacade,
                private cdr: ChangeDetectorRef) {

    this.onSubmit();
  }
  ngOnInit() {
    this.edit = false;
    this.getBanks();
    this.getClassificationBank();
  }
  onSubmit(): void {
    this.registerForm.controls.id.setValue('');
    this.bankBranchesFacade.GetBranch('','');
  }
  onSearch(): void {
    this.registerForm.controls.id.setValue('');
    this.bankBranchesFacade.GetBranch(this.registerFormSearch.value.bankId,this.registerFormSearch.value.classcificationId);
  }
  getBanks(): void {
    this.banksFacade.GetBanks();
  }
  getClassificationBank(): void {
    this.classificationBankBranchesFacade.GetClassificationBranch();
 }
  onDelete(Id: string): void {
    this.edit = false;
    this.bankBranchesFacade.deleteBranch(Id);
    this.registerForm.reset();
  }
  onReset(): void {
    this.edit = false;
    this.registerForm.reset();
    this.registerForm.setErrors(null);
    this.registerFormSearch.reset();
    this.registerFormSearch.setErrors(null);
  }
  onAdd() {
    const optionClass = this.classificationBankBranchesFacade.ClassificationBranchSubject$.getValue();
    const optionBankName = this.banksFacade.BanksSubject$.getValue().find((x: { id: string | null | undefined; }) => x.id == this.registerForm.value.bankId);
    const className = optionClass.find(x => x.id == this.registerForm.value.bankClasscificationId);
    const nameToSet = className.name ?? null; // Using nullish coalescing operator to handle undefined
    const BankNameToSet = optionBankName?.name ?? null; // Using nullish coalescing operator to handle undefined
    this.registerForm.controls.bankClasscificationName.setValue(nameToSet);
    this.registerForm.controls.bankName.setValue(BankNameToSet);
    if (this.registerForm.valid) {
      if(this.edit) {
        this.bankBranchesFacade.UpdateBranch(this.registerForm?.value);
        this.onReset();
      }else{
        this.bankBranchesFacade.AddBranch(this.registerForm?.value);
        this.onReset();

      }
    }
  }
  onEdit(branch: any): void {
    this.registerForm.patchValue(branch);
    this.edit = true;
  }

}
