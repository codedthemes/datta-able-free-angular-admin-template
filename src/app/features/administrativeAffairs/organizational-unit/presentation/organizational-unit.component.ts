import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import {OrganizationalUnitFacade} from "../organizational-unit.facade";
import {ClassificationBranchesFacade} from "../../classification/classification-branches.facade";
import { optionsBooleanGeneral, optionsJobClassification } from '../../../../core/core.interface';
import { async } from 'rxjs';
import { MessageType } from '../../../../shared/shared.interfaces';
import { SharedFacade } from '../../../../shared/shared.facade';

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
    parentId: [null],
    classificationId: [null],
    classificationsName : [''],
  number: [{ value: '', disabled: true }],
    parentName: [''],
    costCenter: ['',  [
      Validators.minLength(4),
      Validators.maxLength(6)]],
    approvalDate: [''],
    Notes: this.fb.array([]),
    organizationStructureTypeId:  ['', Validators.required],

  });
  registerFormSearch = this.fb.group({
    number: [''],
    name: [''],
    // parentId: [''],
    // directManager: [null],
    // organizationalUnitNumber: [null],
    // specificUnit: [null],

  });
  constructor(  private fb: FormBuilder,
                protected organizationalUnitFacade: OrganizationalUnitFacade,
                protected classificationBranchesFacade: ClassificationBranchesFacade,
                protected sharedFacade: SharedFacade) {
    this.classificationBranchesFacade.GetClassification();
    this.getOrganizationalUnitsByLevel(0);
    this.getOrganizationalUnitsByLevel(2);
    this.registerForm.controls.id.setValue('');
    this.organizationalUnitFacade.GetOrganizationalUnit();
    this.organizationalUnitFacade.GetUnitType();
  }

  ngOnInit() {
    this.edit = false;
    // this.onReset();

  }
  createNote(): FormGroup {
    return this.fb.group({
      text: ['',   Validators.required],
    });
  }
  onSubmit(): void {
    // this.classificationBranchesFacade.GetJobClassification();
    this.classificationBranchesFacade.GetClassification();
    this.getOrganizationalUnitsByLevel(0);
    this.getOrganizationalUnitsByLevel(2);
    this.registerForm.controls.id.setValue('');
    this.organizationalUnitFacade.GetOrganizationalUnit();
  }
  getOrganizationalUnitsByLevel(level: number): void {
    this.organizationalUnitFacade.GetOrganizationalUnitsByLevel(level);
  }
  onSearch(): void {
    this.registerForm.controls.id.setValue('');
    // if ((this.registerFormSearch.value.parentId == null )&& (this.registerFormSearch.value.name ==  null )&& (this.registerFormSearch.value.number == '' )){
    if ((this.registerFormSearch.value.name ==  null )&& (this.registerFormSearch.value.number == '' )){
      this.onSubmit();
    }else {
      // this.organizationalUnitFacade.filterOrganizationalUnits(this.registerFormSearch.value?.parentId?? null,this.registerFormSearch.value?.name?? null,this.registerFormSearch.value?.number?? '');
      this.organizationalUnitFacade.filterOrganizationalUnits(null,this.registerFormSearch.value?.name?? null,this.registerFormSearch.value?.number?? '');

    }
  }

  getOrganizationalUnitIdNextQuery(): void {
   this.organizationalUnitFacade.GetOrganizationalUnitIdNextQuery(this.registerForm.value?.parentId);
  this.registerForm.controls.number.setValue(this.organizationalUnitFacade.ContentIdNextQuerySubject$.getValue());
  }
  // getAllUnitsBranchingFromSpecificUnit(): void {
  //   this.registerFormSearch.controls.parentId.setValue(this.registerFormSearch.value?.organizationalUnitNumber??'');
  //   this.organizationalUnitFacade.GetAllUnitsBranchingFromSpecificUnit(this.registerFormSearch.value?.organizationalUnitNumber);
  // }
  // selectSpecificUnit(): void {
  //   this.registerFormSearch.controls.parentId.setValue(this.registerFormSearch.value?.specificUnit??'');
  // }
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
    this.organizationalUnitFacade.UnitsByDirectManagerSubject$.next([]);
    this.organizationalUnitFacade.AllUnitsBranchingFromSpecificUnitSubject$.next([]);
    this.organizationalUnitFacade.AllUnitsDepartmentSubject$.next([]);
    this.onSubmit();
  }
  onAdd(): void {
    if (this.registerForm.valid) {
      const optionClass = this.classificationBranchesFacade.ClassificationSubject$.getValue().find(x => x.id == this.registerForm.value.classificationId);
      this.registerForm.value.classificationsName =  this.registerForm.value.classificationId != '' && this.registerForm.value.classificationId != null ?   optionClass.name: '';
      const optionParentName = this.organizationalUnitFacade.OrganizationalUnitsByLevelSubject$.getValue().find(x => x.id == this.registerForm.value.parentId);
      this.registerForm.value.parentName =  this.registerForm.value.parentId != '' && this.registerForm.value.parentId != null ?   optionParentName.name: '';
      const changeName = this.organizationalUnitFacade.UnitTypeSubject$.getValue().find(x => x.id == this.registerForm.controls.organizationStructureTypeId.value);

      this.registerForm.controls.name.setValue(changeName.name +' '+ this.registerForm.controls.name.value )
      if(this.edit) {
        this.organizationalUnitFacade.UpdateOrganizationalUnit(this.registerForm?.value);
        this.onReset();
      }else{
        this.organizationalUnitFacade.AddOrganizationalUnit(this.registerForm?.value);
        this.onReset();

      }
    } else {
      if (this.registerForm.value.organizationStructureTypeId == '' || this.registerForm.controls.organizationStructureTypeId.invalid) {
        this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء اختر نوع الوحدة التنظيمية', ['']);
        return;
      } else if (this.registerForm.value.name == '' || this.registerForm.controls.name.invalid) {
        this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء ادخال اسم الوحدة التنظيمية', ['']);
        return;
      }    else if (this.registerForm.value.costCenter == '' || this.registerForm.controls.costCenter.invalid) {
        this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء ادخال مركز التكلفة ويتكون من4 إلي 6 خانات', ['']);
        return;
      }
    }
  }
  onEdit(unit: any): void {
    this.registerForm.patchValue(unit);
    this.registerForm.controls.number.setValue(unit.number);
    this.edit = true;
  }
  // GetAllUnitsDepartment(): void {
  //   this.registerFormSearch.controls.parentId.setValue(this.registerFormSearch.value?.directManager??'');
  //   this.organizationalUnitFacade.GetAllUnitsDepartment(this.registerFormSearch.value?.directManager?? '');
  //
  // }
  addNote(): void {
    // if(this.secondFormGroup.value.socialStatus == 3){
    const NoteArray = this.registerForm.get('Notes') as FormArray;
    if(NoteArray.length == 0) {
      NoteArray.push(this.createNote());
    }
  }
  removeNote(index: number) {
    this.Notes.removeAt(index);
  }
  get Notes(): FormArray {
    return this.registerForm.get('Notes') as FormArray;
  }
  getControl(control: AbstractControl, controlName: string): AbstractControl | null {
    return control.get(controlName);
  }
  protected readonly optionsJobClassification = optionsJobClassification;
  protected readonly optionsBooleanGeneral = optionsBooleanGeneral;
  protected readonly length = length;
}
