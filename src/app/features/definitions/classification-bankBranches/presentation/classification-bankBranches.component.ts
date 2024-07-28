import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import { ClassificationBankBranchesFacade } from '../classification-bankBranches.facade';
import { MessageType } from '../../../../shared/shared.interfaces';
import { SharedFacade } from '../../../../shared/shared.facade';
declare var $: any;
@Component({
  selector: 'app-classification-bankBranches',
  templateUrl: './classification-bankBranches.component.html',
  styleUrl: './classification-bankBranches.component.scss'
})
export class ClassificationBankBranchesComponent implements OnInit {
  edit: boolean = false;
  registerForm = this.fb.group({
    id: [''],
    name: ['', Validators.required],
  });
  constructor(  private fb: FormBuilder,
                protected classificationBankBranchesFacade: ClassificationBankBranchesFacade,
                private sharedFacade: SharedFacade) {
    this.onSubmit();

  }
  ngOnInit() {
    this.edit = false;
  }
  onSubmit(): void {
    this.registerForm.controls.id.setValue('');
    this.classificationBankBranchesFacade.GetClassificationBranch();
  }
  onDelete(Id: string): void {
    this.edit = false;
    this.classificationBankBranchesFacade.deleteClassificationBranch(Id);
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
        this.classificationBankBranchesFacade.UpdateClassificationBranch(this.registerForm?.value);
        this.onReset();
      }else{
        this.classificationBankBranchesFacade.AddClassificationBranch(this.registerForm?.value);
        this.onReset();

      }
    }else{
      if(this.registerForm.value.name  == '' || this.registerForm.controls.name.invalid ){
        this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء ادخل اسم تصنيف فرع المصرف ', ['']);
        return;
      }
    }
  }
  onEdit(bank: any): void {
    this.registerForm.patchValue(bank);
    this.edit = true;
  }

}
