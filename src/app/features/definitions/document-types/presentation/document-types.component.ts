import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
declare var $: any;
import {FormBuilder, Validators} from "@angular/forms";
import { DocumentTypesFacade } from '../document-types.facade';
import { optionsBooleanGeneral } from 'src/app/core/core.interface';
import { optionsCalculatingReward } from '../../rewards-types/rewards-types.interface';
import { MessageType } from '../../../../shared/shared.interfaces';
import { SharedFacade } from '../../../../shared/shared.facade';
@Component({
  selector: 'app-rewards-types',
  templateUrl: './document-types.component.html',
  styleUrl: './document-types.component.scss'
})
export class DocumentTypesComponent implements OnInit , OnDestroy  {
  edit: boolean = false;
  registerForm = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    isDecision: [null, Validators.required],
    haveExpireDate: [null, Validators.required],

  });

  constructor(
      private fb: FormBuilder,
      protected documentTypesFacade: DocumentTypesFacade,
      private _cdr: ChangeDetectorRef,
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
    this.documentTypesFacade.GetDocumentType();
  }
  onDelete(Id: string): void {
    this.edit = false;
    this.documentTypesFacade.deleteDocumentType(Id);
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
        this.documentTypesFacade.UpdateDocumentType(this.registerForm?.value);
        this.onReset();
      }else{
        this.documentTypesFacade.AddDocumentType(this.registerForm?.value);
        this.onReset();

      }
      this._cdr.markForCheck();
    }else {
      if (this.registerForm.value.name == '' || this.registerForm.controls.name.invalid) {
        this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء ادخال اسم', ['']);
        return;
      }else if(this.registerForm.controls.isDecision.invalid) {
        this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء اختر هل نوعه قرار؟', ['']);
        return;
      }else if(this.registerForm.controls.haveExpireDate.invalid) {
        this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء اختر هل له تاريخ صلاحية؟', ['']);
        return;
      }
    }
  }
  onEdit(documentType: any): void {
    this.registerForm.patchValue(documentType);
    this.edit = true;
  }

  protected readonly optionsBooleanGeneral = optionsBooleanGeneral;
}
