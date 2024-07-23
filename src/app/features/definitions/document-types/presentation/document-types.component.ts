import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
declare var $: any;
import {FormBuilder, Validators} from "@angular/forms";
import { DocumentTypesFacade } from '../document-types.facade';
import { optionsBooleanGeneral } from 'src/app/core/core.interface';
import { optionsCalculatingReward } from '../../rewards-types/rewards-types.interface';
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
    isDecision: ['', Validators.required],
    haveExpireDate: ['', Validators.required],

  });

  constructor(
      private fb: FormBuilder,
      protected documentTypesFacade: DocumentTypesFacade
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
    }
  }
  onEdit(documentType: any): void {
    this.registerForm.patchValue(documentType);
    this.edit = true;
  }

  protected readonly optionsBooleanGeneral = optionsBooleanGeneral;
  protected readonly optionsCalculatingReward = optionsCalculatingReward;
}
