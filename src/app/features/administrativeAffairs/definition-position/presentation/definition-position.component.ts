import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
import { GetJobTitleCommand } from '../../job-title/job-title.interface';

declare var $: any;

@Component({
  selector: 'app-rewards-types',
  templateUrl: './definition-position.component.html',
  styleUrl: './definition-position.component.scss'
})
export class DefinitionPositionComponent implements OnInit {
  edit: boolean = false;
  isChecked : boolean = false;
  haveAdmin: boolean = false;
  costCenter: string ='';
  allPositions: any[] = []; // Store all positions
  filteredPositions: any[] = []; // Store filtered positions

  filteredJobTitles: GetJobTitleCommand[] = [];
  private allJobTitles: GetJobTitleCommand[] = [];
  showDropdown = false;
  searchTerm = '';

  registerForm = this.fb.group({
    id: [''],
    positionCode: ['', Validators.required],
    jobTitleId: [null, Validators.required],
    jobTitleName: [''],
    locationId: ['', Validators.required],
    locationName: [''],
    name: [{ value: '', disabled: true }],
    nameEn: [{ value: '', disabled: true }],
    organizationStructureId: ['', Validators.required],
    organizationStructureName: [''],
    positionType:['', Validators.required],
    positionTypeName:[''],

    directManager: [''],
    directManagerName: [''],
    organizationalUnitNumber: [''],
    organizationalUnitNumberName: [''],
    specificUnit: [''],
    specificUnitName: [''],
    isAdmin: [false],
    outsideStaffing: [false],
    typePositionNationality: [false],
    approvalDate: [''],
    Notes: this.fb.array([]),
    // costCenterCode:['', Validators.required],

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
  createNote(): FormGroup {
    return this.fb.group({
      text: ['',   Validators.required],
    });
  }
  onSubmit(): void {
    this.organizationalUnitFacade.GetOrganizationalUnitsByLevel(0);
    this.organizationalUnitFacade.GetOrganizationalUnitsByLevel(2);
    this.jobTitleFacade.GetJobTitle();
    this.jobTitleFacade.JobTitles$.subscribe(titles => {
      this.allJobTitles = titles;
      this.filteredJobTitles = titles; // Initialize filteredJobTitles
    });
    this.definitionPositionFacade.GetLocations();
    this.definitionPositionFacade.GetPosition('','');
    // this.definitionPositionFacade.GetPosition(this.registerFormSearch.value.PositionCode, this.registerFormSearch.value.JobTitleId).subscribe((positions) => {
    //   this.allPositions = positions;
    //   this.filteredPositions = positions; // Initialize with all positions
    // });
  }
  filterPositions($event): void {
    if ($event.target.checked) {
      this.filteredPositions = this.definitionPositionFacade.PositionSubject$.getValue().filter(item => item.outsideStaffing);
    } else {
      this.filteredPositions = []
    }

  }
    onSearch(): void {
    this.registerForm.controls.id.setValue('');
    if (this.registerFormSearch.value.PositionCode !='' || this.registerFormSearch.value.JobTitleId !='' ) {
      const optionJobTitleName = this.jobTitleFacade.JobTitleSubject$.getValue().find(x => x.jobCode == this.registerFormSearch.value.JobTitleId);
      this.definitionPositionFacade.GetPosition(this.registerFormSearch.value.PositionCode, optionJobTitleName? optionJobTitleName.id:this.registerFormSearch.value.JobTitleId);
      // this.definitionPositionFacade.GetPosition(this.registerFormSearch.value.PositionCode, this.registerFormSearch.value.JobTitleId);
      // this.definitionPositionFacade.GetPosition(this.registerFormSearch.value.PositionCode, this.registerFormSearch.value.JobTitleId).subscribe((positions) => {
      //   this.allPositions = positions;
      //   this.filteredPositions = positions; // Initialize with all positions
      // });

    }else {
      this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء ادخال رقم الوظيفة أو رمز الوظيفة  ', ['']);
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
    //this.jobTitleFacade.GetJobTitle();
    this.definitionPositionFacade.GetPosition('','');
    this.costCenter = '';
    this.isChecked = false;
    this.Notes.clear();
      // this.onSubmit();
  }
  onAdd(): void {
    this.registerForm.value.isAdmin == null ? this.registerForm.controls.isAdmin.setValue(false): '';
    this.registerForm.value.outsideStaffing == null ? this.registerForm.controls.outsideStaffing.setValue(false): '';
    this.registerForm.value.typePositionNationality == null ? this.registerForm.controls.typePositionNationality.setValue(false): '';
    if (this.registerForm.valid) {
      const optionJobTitleName = this.jobTitleFacade.JobTitleSubject$.getValue().find(x => x.id == this.registerForm.value.jobTitleId);
      this.registerForm.value.jobTitleName =  this.registerForm.value.jobTitleId != '' && this.registerForm.value.jobTitleId != null ?   optionJobTitleName.name: '';
      this.registerForm.value.positionTypeName = this.optionsNationalityType.find(option => option.value.toString() == this.registerForm.value.positionType)?.label;
      const optionPosition = this.definitionPositionFacade.locationsSubject$.getValue().find(x => x.id.toString() == this.registerForm.value.locationId);
      this.registerForm.value.locationName =  this.registerForm.value.locationId != '' && this.registerForm.value.locationId != null ?   optionPosition.name: '';

      if(this.edit) {
        this.definitionPositionFacade.UpdatePosition(this.registerForm?.value);
        this.onReset();
      }else{

        this.definitionPositionFacade.AddPosition(this.registerForm?.value);
        this.onReset();
      }
    } else {
    // else if(this.registerForm.value.costCenterCode  == '' || this.registerForm.controls.costCenterCode.invalid ){
    //   this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء ادخل رمز مركز التكلفة', ['']);
    //   return;
    // }
   if(this.registerForm.value.positionCode  == '' ||this.registerForm.controls.positionCode.invalid ) {
      this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء ادخل رقم الوظيفة', ['']);
      return;
    }else if(this.registerForm.value.organizationStructureId  == '' || this.registerForm.controls.organizationStructureId.invalid ){
     this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء اختر الوحدة التنظيمية', ['']);
     return;
   }else if(this.registerForm.value.locationId  == '' || this.registerForm.value.locationId  == null || this.registerForm.controls.locationId.invalid){
     this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء ادخال رمز الموقع - اسم الموقع', ['']);
     return;

   }
   else if(this.registerForm.value.jobTitleId  == ''|| this.registerForm.value.jobTitleId  == null  || this.registerForm.controls.jobTitleId.invalid ) {
        this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء ادخال رمز الوظيفة  ', ['']);
        return;
      }
   else if(this.registerForm.value.positionType  == '' || this.registerForm.value.positionType  == null || this.registerForm.controls.positionType.invalid ){
        this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء اختر نوع الوظيفة', ['']);
        return;
      }

    }
  }
  onEdit(jobTitle: any): void {
    this.registerForm.patchValue(jobTitle);
    this.registerForm.value.positionTypeName = this.optionsNationalityType.find(option => option.value.toString() == this.registerForm.value.positionType)?.label;
    const JobTitleName = this.jobTitleFacade.JobTitleSubject$.getValue().find(x => x.id == jobTitle.jobTitleId);
    this.registerForm.controls.name.setValue(JobTitleName.name);
    this.registerForm.controls.nameEn.setValue(JobTitleName.nameEn);
    this.edit = true;
  }
  getJobTitleId(item): void {
    this.searchTerm = item.jobCode;
    this.registerForm.controls.jobTitleId.setValue(item.id); // Set the form control value to the ID
    this.showDropdown = false;
    this.registerForm.controls.name.setValue('');
    this.registerForm.controls.nameEn.setValue('');
    if (this.registerForm.value.jobTitleId !=''  ) {
      const JobTitleName = this.jobTitleFacade.JobTitleSubject$.getValue().find(x => x.id == this.registerForm.value.jobTitleId);
      this.registerForm.controls.name.setValue(JobTitleName.name);
      this.registerForm.controls.nameEn.setValue(JobTitleName.nameEn);
      this.haveAdmin = JobTitleName.haveAdmin;
      this.showDropdown = false;
    }

  }

  hideDropdown() {
    setTimeout(() => {
      this.showDropdown = false; // Delay to allow click event to register
    }, 200);
    if(this.filteredJobTitles.length <= 0 ){
      this.registerForm.controls.jobTitleId.setValue(null);
      this.registerForm.controls.name.setValue('');
      this.registerForm.controls.nameEn.setValue('');
      this.sharedFacade.showMessage(MessageType.warning, 'عفواً، خطأ في رمز الوظيفة', ['']);

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
  this.costCenter = optionOrganization?.costCenter;
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
  toggleCheckbox() {
    this.isChecked = !this.isChecked;
  }
  addNote(): void {
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
  getControl(control: AbstractControl, controlName: string): AbstractControl | null {
    return control.get(controlName);
  }
  // onSearchJobTitles(searchTerm) {
  //   // Filter job titles based on the search term
  //   this.filteredJobTitles = this.allJobTitles.filter(item =>
  //     item.jobCode.toLowerCase().includes(searchTerm.target.value.toLowerCase())
  //   );
  //   this.showDropdown = this.filteredJobTitles.length > 0;
  // }
  onSearchJobTitles(event: any) {
    this.searchTerm = event.target.value.toLowerCase();
    this.filteredJobTitles = this.allJobTitles.filter(item =>
      item.jobCode.toLowerCase().includes(this.searchTerm)
    );

  }
  getJobCode() {
    // Get the job code based on the selected job title ID
    const selectedId = this.registerForm.controls.jobTitleId.value;
    const selectedItem = this.filteredJobTitles.find(item => item.id === selectedId);
    return selectedItem ? selectedItem.jobCode : ''; // Return the job code or an empty string
  }
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.toLocaleLowerCase().includes(searchText);
    });
  }
  protected readonly optionsJobClassification  = optionsJobClassification;
  protected readonly optionsBooleanGeneral  = optionsBooleanGeneral;
  protected readonly optionsNationalityType = optionsNationalityType;
}
