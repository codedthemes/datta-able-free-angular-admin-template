import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {optionsBooleanGeneral, optionsJobClassification} from "../../../../core/core.interface";
import {OrganizationalUnitFacade} from "../../organizational-unit/organizational-unit.facade";
import {DefinitionPositionFacade} from "../definition-position.facade";
import {
  ScientificQualificationsFacade
} from '../../../definitions/scientific-qualifications/scientific-qualifications.facade';
import { optionsNationalityType } from '../../../definitions/nationalities/nationalities.interface';
import { JobTitleFacade } from '../../job-title/job-title.facade';
import { MessageType } from '../../../../shared/shared.interfaces';
import { SharedFacade } from '../../../../shared/shared.facade';

declare var $: any;

@Component({
  selector: 'app-rewards-types',
  templateUrl: './definition-position.component.html',
  styleUrl: './definition-position.component.scss'
})
export class DefinitionPositionComponent implements OnInit {
  edit: boolean = false;
  registerForm = this.fb.group({
    id: [''],
    positionCode: ['', Validators.required],
    jobTitleId: ['', Validators.required],
    jobTitleName: [''],
    locationId: [-1, Validators.required],
    locationName: [''],
    name: [{ value: '', disabled: true }],
    nameEn: [{ value: '', disabled: true }],
    organizationStructureId: ['', Validators.required],
    organizationStructureName: [''],
    positionType:[-1, Validators.required],
    positionTypeName:[''],
    costCenterCode:['', Validators.required],

    directManager: [''],
    directManagerName: [''],
    organizationalUnitNumber: [''],
    organizationalUnitNumberName: [''],
    specificUnit: [''],
    specificUnitName: [''],
  });
  registerFormSearch = this.fb.group({
    PositionCode: [''],
    JobTitleId: [''],
  });
  constructor(  private fb: FormBuilder,
                protected definitionPositionFacade: DefinitionPositionFacade,
                protected organizationalUnitFacade: OrganizationalUnitFacade,
                protected jobTitleFacade: JobTitleFacade,
                protected sharedFacade: SharedFacade,
                private cdr: ChangeDetectorRef) {
    this.onSubmit();



  }
  ngOnInit() {
    this.edit = false;
    this.organizationalUnitFacade.UnitsByDirectManagerSubject$.next([]);
    this.organizationalUnitFacade.AllUnitsBranchingFromSpecificUnitSubject$.next([]);
    this.organizationalUnitFacade.AllUnitsDepartmentSubject$.next([]);

  }
  onSubmit(): void {
    this.organizationalUnitFacade.GetOrganizationalUnitsByLevel(0);
    this.organizationalUnitFacade.GetOrganizationalUnitsByLevel(2);
    this.jobTitleFacade.GetJobTitle();
    this.definitionPositionFacade.GetLocations();
    this.definitionPositionFacade.GetPosition('','');
  }
  onSearch(): void {
    this.registerForm.controls.id.setValue('');
    if (this.registerFormSearch.value.PositionCode !='' || this.registerFormSearch.value.JobTitleId !='' ) {
      this.definitionPositionFacade.GetPosition(this.registerFormSearch.value.PositionCode, this.registerFormSearch.value.JobTitleId);
    }else {
      this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء ادخال رمز المنصب أو رمز الوظيفة  ', ['']);
      return;
    }
  }

  onDelete(Id: string): void {
    this.edit = false;
    this.definitionPositionFacade.deletePosition(Id);
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
      // this.onSubmit();
  }
  onAdd(): void {

    if (this.registerForm.valid) {
      const optionJobTitleName = this.jobTitleFacade.JobTitleSubject$.getValue().find(x => x.id == this.registerForm.value.jobTitleId);
      this.registerForm.value.jobTitleName =  this.registerForm.value.jobTitleId != '' && this.registerForm.value.jobTitleId != null ?   optionJobTitleName.name: '';
      this.registerForm.value.positionTypeName = this.optionsNationalityType.find(option => option.value == this.registerForm.value.positionType)?.label;
      const optionPosition = this.definitionPositionFacade.locationsSubject$.getValue().find(x => x.id == this.registerForm.value.locationId);
      this.registerForm.value.locationName =  this.registerForm.value.locationId != -1 && this.registerForm.value.locationId != null ?   optionPosition.name: '';

      if(this.edit) {
        this.definitionPositionFacade.UpdatePosition(this.registerForm?.value);
        this.onReset();
      }else{
        this.definitionPositionFacade.AddPosition(this.registerForm?.value);
        this.onReset();

      }
    } else {
      if(this.registerForm.value.jobTitleId  == '' ) {
        this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء ادخال رمز الوظيفة  ', ['']);
        return;
      } else if(this.registerForm.value.organizationStructureId  == '' || this.registerForm.controls.organizationStructureId.invalid ){
        this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء اختر الوحدة التنظيمية', ['']);
        return;
      }else if(this.registerForm.value.locationId  == -1 || this.registerForm.controls.locationId.invalid){
        this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء ادخال رمز الموقع', ['']);
        return;
      }else if(this.registerForm.value.costCenterCode  == '' || this.registerForm.controls.costCenterCode.invalid ){
        this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء ادخل رمز مركز التكلفة', ['']);
        return;
      }else if(this.registerForm.value.positionCode  == '' ||this.registerForm.controls.positionCode.invalid ){
        this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء ادخل رمز المنصب', ['']);
        return;
      }else if(this.registerForm.value.positionType  == -1 ||this.registerForm.controls.positionType.invalid ){
        this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء اختر نوع المنصب', ['']);
        return;
      }

    }
  }
  onEdit(jobTitle: any): void {
    this.registerForm.patchValue(jobTitle);
    this.registerForm.value.positionTypeName = this.optionsNationalityType.find(option => option.value == this.registerForm.value.positionType)?.label;
    const JobTitleName = this.jobTitleFacade.JobTitleSubject$.getValue().find(x => x.id == jobTitle.jobTitleId);
    this.registerForm.controls.name.setValue(JobTitleName.name);
    this.registerForm.controls.nameEn.setValue(JobTitleName.nameEn);
    this.edit = true;
  }
  getJobTitleId(): void {
    if (this.registerForm.value.jobTitleId !=''  ) {
      const JobTitleName = this.jobTitleFacade.JobTitleSubject$.getValue().find(x => x.id == this.registerForm.value.jobTitleId);
      this.registerForm.controls.name.setValue(JobTitleName.name);
      this.registerForm.controls.nameEn.setValue(JobTitleName.nameEn);
    }
  }
  GetAllUnitsDepartment(): void {
    this.registerForm.controls.organizationStructureId.setValue(this.registerForm.value?.directManager??'');
    const optionOrganization = this.organizationalUnitFacade.OrganizationalUnitsByLevel2Subject$ .getValue().find(x => x.id == this.registerForm.value.organizationStructureId);
    // this.registerForm.value.organizationStructureName =  this.registerForm.value.organizationStructureId != '' && this.registerForm.value.organizationStructureId != null ?   optionOrganization.name: '';
    this.registerForm.controls.organizationStructureName.setValue(
      this.registerForm.value.organizationStructureId !== '' && this.registerForm.value.organizationStructureId !== null
        ? optionOrganization?.name
        : ''
    );

    this.organizationalUnitFacade.GetAllUnitsDepartment(this.registerForm.value?.directManager?? '');
    this.registerForm.controls.organizationalUnitNumber.setValue('');
    this.registerForm.controls.organizationalUnitNumberName.setValue('');
    this.registerForm.controls.specificUnit.setValue('');
    this.registerForm.controls.specificUnitName.setValue('');
  }
   getAllUnitsBranchingFromSpecificUnit(): void {
    this.registerForm.controls.organizationStructureId.setValue(this.registerForm.value?.organizationalUnitNumber??'');
     const optionOrganization = this.organizationalUnitFacade.AllUnitsDepartmentSubject$.getValue().find(x => x.id == this.registerForm.value.organizationStructureId);
     // this.registerForm.value.organizationStructureName =  this.registerForm.value.organizationStructureId != '' && this.registerForm.value.organizationStructureId != null ?   optionOrganization.name: '';
     this.registerForm.controls.organizationStructureName.setValue(
       this.registerForm.value.organizationStructureId !== '' && this.registerForm.value.organizationStructureId !== null
         ? optionOrganization?.name
         : ''
     );

     this.organizationalUnitFacade.GetAllUnitsBranchingFromSpecificUnit(this.registerForm.value?.organizationalUnitNumber);
     this.registerForm.controls.specificUnit.setValue('');
     this.registerForm.controls.specificUnitName.setValue('');
  }


  selectSpecificUnit(): void {
    this.registerForm.controls.organizationStructureId.setValue(this.registerForm.value?.specificUnit??'');
    const optionOrganization = this.organizationalUnitFacade.AllUnitsBranchingFromSpecificUnitSubject$.getValue().find(x => x.id == this.registerForm.value.organizationStructureId);
    // this.registerForm.value.organizationStructureName =  this.registerForm.value.organizationStructureId != '' && this.registerForm.value.organizationStructureId != null ?   optionOrganization.name: '';
    this.registerForm.controls.organizationStructureName.setValue(
      this.registerForm.value.organizationStructureId !== '' && this.registerForm.value.organizationStructureId !== null
        ? optionOrganization?.name
        : ''
    );

  }
  protected readonly optionsJobClassification  = optionsJobClassification;
  protected readonly optionsBooleanGeneral  = optionsBooleanGeneral;
  protected readonly optionsNationalityType = optionsNationalityType;
}
