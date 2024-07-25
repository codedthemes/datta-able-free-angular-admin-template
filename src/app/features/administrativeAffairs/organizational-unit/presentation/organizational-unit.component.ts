import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

import {OrganizationalUnitFacade} from "../organizational-unit.facade";
import {ClassificationBranchesFacade} from "../../classification/classification-branches.facade";
import { optionsBooleanGeneral, optionsJobClassification } from '../../../../core/core.interface';

declare var $: any;

@Component({
  selector: 'app-rewards-types',
  templateUrl: './organizational-unit.component.html',
  styleUrl: './organizational-unit.component.scss'
})
export class OrganizationalUnitComponent implements OnInit {
  edit: boolean = false;
  registerForm = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    parentId: [''],
    classificationId: [''],
    classificationsName : [''],
  number: [''],
    parentName: [''],

  });
  registerFormSearch = this.fb.group({
    number: [''],
    name: [''],
    parentId: [''],
    directManager: [''],
    organizationalUnitNumber: [''],
    specificUnit: [''],

  });
  constructor(  private fb: FormBuilder,
                protected organizationalUnitFacade: OrganizationalUnitFacade,
                protected classificationBranchesFacade: ClassificationBranchesFacade) {
    this.classificationBranchesFacade.GetClassification();
    this.getOrganizationalUnitsByLevel(0);
    this.onSubmit();
  }

  ngOnInit() {
    this.getOrganizationalUnitsByLevel(2);
    this.edit = false;
  }
  onSubmit(): void {
    this.registerForm.controls.id.setValue('');
    this.organizationalUnitFacade.GetOrganizationalUnit();
  }
  getOrganizationalUnitsByLevel(level: number): void {
    this.organizationalUnitFacade.GetOrganizationalUnitsByLevel(level);
  }
  onSearch(): void {
    this.registerForm.controls.id.setValue('');
    if ((this.registerFormSearch.value.parentId == null )&& (this.registerFormSearch.value.name ==  null )&& (this.registerFormSearch.value.number == '' )){
      this.onSubmit();
    }else {
      this.organizationalUnitFacade.filterOrganizationalUnits(this.registerFormSearch.value?.parentId?? null,this.registerFormSearch.value?.name?? null,this.registerFormSearch.value?.number?? '');

    }
  }
  getUnitsByDirectManager(): void {
    this.registerFormSearch.controls.parentId.setValue(this.registerFormSearch.value?.directManager??'');
    this.organizationalUnitFacade.GetUnitsByDirectManager(this.registerFormSearch.value?.directManager?? '');
  }
  getOrganizationalUnitIdNextQuery(): void {
   this.organizationalUnitFacade.GetOrganizationalUnitIdNextQuery(this.registerForm.value?.parentId);
  this.registerForm.controls.number.setValue(this.organizationalUnitFacade.ContentIdNextQuerySubject$.getValue());
  }
  getAllUnitsBranchingFromSpecificUnit(): void {
    this.registerFormSearch.controls.parentId.setValue(this.registerFormSearch.value?.organizationalUnitNumber??'');
    this.organizationalUnitFacade.GetAllUnitsBranchingFromSpecificUnit(this.registerFormSearch.value?.organizationalUnitNumber);
  }
  selectSpecificUnit(): void {
    this.registerFormSearch.controls.parentId.setValue(this.registerFormSearch.value?.specificUnit??'');
  }
  onDelete(Id: string): void {
    this.edit = false;
    this.organizationalUnitFacade.deleteOrganizationalUnit(Id);
    this.registerForm.reset();
  }
  onReset(): void {
    this.edit = false;
    this.registerForm.reset();
    this.registerForm.setErrors(null);
    this.registerFormSearch.reset();
    this.registerFormSearch.setErrors(null);
  }
  onAdd(): void {
    if (this.registerForm.valid) {
      const optionClass = this.classificationBranchesFacade.ClassificationSubject$.getValue();
      const optionParentName = this.organizationalUnitFacade.OrganizationalUnitsByLevelSubject$.getValue().find((x: { id: string | null | undefined; }) => x.id === this.registerForm.value.parentId);
      const className = optionClass.find(x => x.id === this.registerForm.value.classificationId);
      const nameToSet = className?.name ?? null; // Using nullish coalescing operator to handle undefined
      const parentNameToSet = optionParentName?.name ?? null; // Using nullish coalescing operator to handle undefined
      this.registerForm.controls.classificationsName.setValue(nameToSet);
      this.registerForm.controls.parentName.setValue(parentNameToSet);
      if(this.edit) {
        this.organizationalUnitFacade.UpdateOrganizationalUnit(this.registerForm?.value);
        this.onReset();
      }else{
        this.organizationalUnitFacade.AddOrganizationalUnit(this.registerForm?.value);
        this.onReset();

      }
    }
  }
  onEdit(unit: any): void {
    this.registerForm.patchValue(unit);
    this.registerForm.controls.parentId.setValue(unit.number)
    this.edit = true;
  }

  protected readonly optionsJobClassification = optionsJobClassification;
  protected readonly optionsBooleanGeneral = optionsBooleanGeneral;
}
