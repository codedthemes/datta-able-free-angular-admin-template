import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import {
  optionsBooleanGeneral, optionsFamilyDescription,
  optionsGenderGeneral,
  optionsJobClassification, optionsOvertime, optionsProcedureCode,
  optionsSocialStatus
} from '../../../../core/core.interface';
import {OrganizationalUnitFacade} from "../../organizational-unit/organizational-unit.facade";
import {AddEmployeeFacade} from "../add-employee.facade";
import {
  ScientificQualificationsFacade
} from '../../../definitions/scientific-qualifications/scientific-qualifications.facade';
import { optionsNationalityType } from '../../../definitions/nationalities/nationalities.interface';
import { DefinitionPositionFacade } from '../../definition-position/definition-position.facade';
import { NationalitiesFacade } from '../../../definitions/nationalities/nationalities.facade';
import { MessageType } from '../../../../shared/shared.interfaces';
import { SharedFacade } from '../../../../shared/shared.facade';

declare var $: any;

@Component({
  selector: 'app-rewards-types',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddEmployeeComponent implements OnInit {
  isLinear = false;
  currentStep = 1;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  threeFormGroup: FormGroup;
  positionGuid:string= '';
  nationalityTypeId:string= '';
  edit: boolean = false;
  years: number[] = [];
  nidPattern = '[1]{1}[1]{1}[9]{1}[0-9]{9}|[2]{1}[1]{1}[9]{1}[0-9]{9}|[1]{1}[2]{1}[0]{1}[0-9]{9}|[2]{1}[2]{1}[0]{1}[0-9]{9}';
  phoneNumberPattern = '[0][9]{1}[1,2,4,3,5]{1}[0-9]{7}';
  constructor(  private fb: FormBuilder,
                protected addEmployeeFacade: AddEmployeeFacade,
                protected organizationalUnitFacade: OrganizationalUnitFacade,
                protected scientificQualificationsFacade: ScientificQualificationsFacade,
                protected definitionPositionFacade: DefinitionPositionFacade,
                protected nationalitiesFacade: NationalitiesFacade,
                protected sharedFacade: SharedFacade,

                private _formBuilder: FormBuilder) {
    // this.organizationalUnitFacade.GetOrganizationalUnitsByLevel(0);
    // this.organizationalUnitFacade.GetOrganizationalUnitsByLevel(2);
    this.scientificQualificationsFacade.GetScientificQualifications();
    this.definitionPositionFacade.GetPosition('','');
    this.nationalitiesFacade.GetNationality();
      this.firstFormGroup = this._formBuilder.group({
        positionIdView: ['', Validators.required],
        positionId: [''],
         organizationStructureName: [{ value: '', disabled: true }],
        locationName: [{ value: '', disabled: true }],
        jobTitleName: [{ value: '', disabled: true }],
        costCenter: [{ value: '', disabled: true }],
        specificUnit: [{ value: '', disabled: true }],
        organizationalUnitNumber: [{ value: '', disabled: true }],
        jobClassificationName: [{ value: '', disabled: true }],
        jobCode: [{ value: '', disabled: true }],
        unitList: [null, Validators.required],
      });
      this.secondFormGroup = this._formBuilder.group({
        name: ['',  [Validators.required, (control: AbstractControl): ValidationErrors | null => {
          const arabicPattern = /^[\u0600-\u06FF\s]+$/;
          return arabicPattern.test(control.value) ? null : { 'arabicCharacters': true };
        }]],
        nameEn:['', [Validators.required, (control: AbstractControl): ValidationErrors | null => {
          const englishPattern = /^[A-Za-z\s]+$/;
          return englishPattern.test(control.value) ? null : { 'englishCharacters': true };
        }]],
        birthDate: ['', Validators.required],
        nationalityID: ['', Validators.required],
        // nid: [null, [
        //   Validators.minLength(12),
        //   Validators.maxLength(12),
        //   Validators.pattern(this.nidPattern)
        // ]],
        nid: [null, [
          Validators.minLength(12),
          Validators.maxLength(12),
          Validators.pattern('[1]{1}[1]{1}[9]{1}[0-9]{9}|[2]{1}[1]{1}[9]{1}[0-9]{9}|[1]{1}[2]{1}[0]{1}[0-9]{9}|[2]{1}[2]{1}[0]{1}[0-9]{9}')
        ]],
        passportNumber: [''],
        identificationCardNumber: [''],
        bookletFamilyNumber: [''],
        socialStatus: [null, Validators.required],
        gender: [null, Validators.required],
        familyData: this._formBuilder.array([]),
        phoneNumber: [null, [
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern(this.phoneNumberPattern)
        ]],
        email: [''],
        passportExpiryDate: [''],

      });
    this.threeFormGroup = this._formBuilder.group({
      employeeCode: ['', Validators.required],
      financialNumber: [''],
      socialSecurityNumber: [null, Validators.required],
      basicSalary: [''],
      procedureCode: ['', Validators.required],
      overtime: [null],
      socialStatusSalaries: [null, Validators.required],
      hireDate: ['', Validators.required],
      startingDate: [''],


    });
  }

  ngOnInit() {
    this.edit = false;
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= 1900; year--) {
      this.years.push(year);
    }
    // this.secondFormGroup.markAllAsTouched();
    this.secondFormGroup.controls['nationalityID']?.valueChanges.subscribe(value => {
      if (this.nationalityTypeId == '1') {
        this.secondFormGroup.controls['nid'].setValidators([Validators.required, Validators.minLength(12), Validators.maxLength(12)]);
      } else {
        this.secondFormGroup.controls['nid'].clearValidators();
        this.secondFormGroup.controls['nid'].setValue('');
      }
      this.secondFormGroup.controls['nid'].updateValueAndValidity();
    });
      this.secondFormGroup.controls['passportNumber']?.valueChanges.subscribe(value => {
      if (value != '') {
        this.secondFormGroup.controls['passportExpiryDate'].setValidators([Validators.required,]);
      } else {
        this.secondFormGroup.controls['passportExpiryDate'].clearValidators();
        this.secondFormGroup.controls['passportExpiryDate'].setValue('');
      }
      this.secondFormGroup.controls['passportExpiryDate'].updateValueAndValidity();
    });
    // this.secondFormGroup.controls['email']?.valueChanges.subscribe(value => {
    //   if (value != '') {
    //     this.secondFormGroup.controls['email'].setValidators([Validators.required,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]);
    //   } else {
    //     this.secondFormGroup.controls['email'].clearValidators();
    //     this.secondFormGroup.controls['email'].setValue('');
    //   }
    //   this.secondFormGroup.controls['email'].updateValueAndValidity();
    // });

  }
  changeEmail(){
    this.secondFormGroup.controls['email']?.valueChanges.subscribe(value => {
      if (value != '') {
        this.secondFormGroup.controls['email'].addValidators([Validators.required,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]);

      } else {
        this.secondFormGroup.controls['email'].clearValidators();
        this.secondFormGroup.controls['email'].setValue('');
      }
      this.secondFormGroup.controls['email'].updateValueAndValidity();
    });

  }
  createFamilyMember(): FormGroup {
    return this._formBuilder.group({
      name: ['',   Validators.required],
      gender: [null,Validators.required],
      birthDate: ['',   Validators.required],
      description: [null, Validators.required],
    });
  }

  addFamilyMember(): void {
    // if(this.secondFormGroup.value.socialStatus == 3){
      const familyArray = this.secondFormGroup.get('familyData') as FormArray;
      familyArray.push(this.createFamilyMember());
    // }
  }
  removeFamilyMember(index: number) {
    this.familyData.removeAt(index);
  }
  get familyData(): FormArray {
    return this.secondFormGroup.get('familyData') as FormArray;
  }


  changePosition(): void {
    const optionPosition = this. definitionPositionFacade.PositionSubject$ .getValue().find(x => x.id == this.firstFormGroup.value.positionIdView);
    // this.registerForm.value.jobTitleName =  this.registerForm.value.jobTitleId != '' && this.registerForm.value.jobTitleId != null ?   optionJobTitleName.name: '';
    this.firstFormGroup.controls['organizationStructureName'].setValue(optionPosition.organizationStructureName);
    this.firstFormGroup.controls['locationName'].setValue(optionPosition.locationName + ' - ' + optionPosition.locationCode);
    this.firstFormGroup.controls['jobTitleName'].setValue(optionPosition.jobTitleName);
    this.firstFormGroup.controls['costCenter'].setValue(optionPosition.costCenter);
    this.firstFormGroup.controls['jobClassificationName'].setValue(optionPosition.jobClassificationName);
    this.firstFormGroup.controls['jobCode'].setValue(optionPosition.jobCode);

    this.firstFormGroup.controls['organizationStructureName'].setValue(optionPosition.organizationStructureName);
    if(optionPosition.organizationStructureList.length >= 2){
      this.firstFormGroup.controls['organizationalUnitNumber'].setValue(optionPosition.organizationStructureList[1].name );
      if(optionPosition.organizationStructureList.length == 3){
        this.firstFormGroup.controls['specificUnit'].setValue(optionPosition.organizationStructureList[2].name );
      }else {
        this.firstFormGroup.controls['specificUnit'].setValue('' );
      }
    }else {
      this.firstFormGroup.controls['organizationalUnitNumber'].setValue('' );
    }
  }
  changePosition2(): void {
    if(this.firstFormGroup.value.positionIdView != ''){
    const optionPosition = this. definitionPositionFacade.PositionSubject$ .getValue().find(x => x.positionCode == this.firstFormGroup.value.positionIdView);
    // this.registerForm.value.jobTitleName =  this.registerForm.value.jobTitleId != '' && this.registerForm.value.jobTitleId != null ?   optionJobTitleName.name: '';
   if(optionPosition){
    this.firstFormGroup.controls['organizationStructureName'].setValue(optionPosition.organizationStructureName);
    this.firstFormGroup.controls['locationName'].setValue(optionPosition.locationName + ' - ' + optionPosition.locationCode);
    this.firstFormGroup.controls['jobTitleName'].setValue(optionPosition.jobTitleName);
    this.firstFormGroup.controls['costCenter'].setValue(optionPosition.costCenter);
     this.firstFormGroup.controls['jobClassificationName'].setValue(optionPosition.jobClassificationName);
     this.firstFormGroup.controls['jobCode'].setValue(optionPosition.jobCode);
     this.firstFormGroup.controls['organizationStructureName'].setValue(optionPosition.organizationStructureName);
     this.firstFormGroup.controls['unitList'].setValue(optionPosition.organizationStructureList.sort((a, b) => b.level - a.level));
     this.positionGuid = optionPosition.id;
    if(optionPosition.organizationStructureList.length >= 2){
      this.firstFormGroup.controls['organizationalUnitNumber'].setValue(optionPosition.organizationStructureList[1].name );
      if(optionPosition.organizationStructureList.length == 3){
        this.firstFormGroup.controls['specificUnit'].setValue(optionPosition.organizationStructureList[2].name );
      }else {
        this.firstFormGroup.controls['specificUnit'].setValue('' );
      }
    }else {
      this.firstFormGroup.controls['organizationalUnitNumber'].setValue('' );
    }
   }else if (this.firstFormGroup.value.positionIdView) {
     this.positionGuid = '';
     this.nationalityTypeId = '';
     this.firstFormGroup.reset();
     this.sharedFacade.showMessage(MessageType.warning, 'جلب بيانات',['رقم الوظيفة غير موجود']);

   }
  } else{
      this.sharedFacade.showMessage(MessageType.warning, 'بيانات غير مكتملة',['رجاء ابحث عن رقم الوظيفة']);
    }
    }

  protected readonly optionsBooleanGeneral  = optionsBooleanGeneral;

// Method to get a form control by its name from a given form group
//   getControl(formGroup: FormGroup, controlName: string) {
//     return formGroup.get(controlName);
//   }
  getControl(control: AbstractControl, controlName: string): AbstractControl | null {
    return control.get(controlName);
  }
  nextStep() {

    if (this.currentStep === 1 && !this.firstFormGroup.valid) {
      this.firstFormGroup.markAllAsTouched();
      this.sharedFacade.showMessage(MessageType.warning, 'بيانات غير مكتملة',['رجاء ابحث عن رقم الوظيفة']);
      return;
    }
    if (this.currentStep === 2 && !this.secondFormGroup.valid ) {
      this.secondFormGroup.markAllAsTouched();
      return;
    }
    if (this.currentStep === 3){
     this.threeFormGroup.controls['employeeCode'].touched;
     this.threeFormGroup.controls['employeeCode'].markAsTouched();
    }
    this.currentStep++;
  }
  nationalityIDChange(){
    const nationalitiesId = this.nationalitiesFacade.NationalitySubject$.getValue().find(item => item.id == this.secondFormGroup.controls['nationalityID'].value );

    this.nationalityTypeId =  nationalitiesId.nationalityTypeId.toString();
  }
  previousStep() {
    this.currentStep--;
    this.currentStep === 2? this.secondFormGroup.markAllAsTouched():'';
  }
  GetOut() {
    this.addEmployeeFacade.getOut();
    this.secondFormGroup.controls['employeeCode'].touched;
    this.secondFormGroup.controls['employeeCode'].dirty;
    this.secondFormGroup.controls['employeeCode'].markAsTouched();

    this.threeFormGroup.controls['employeeCode'].setValue(this.addEmployeeFacade.EmployeeCodeSubject$.getValue());
    this.secondFormGroup.controls['employeeCode'].markAsTouched();
    this.secondFormGroup.controls['employeeCode'].touched;

  }

  resetStepper() {
    this.currentStep = 1;
    this.positionGuid = '';
    this.nationalityTypeId = '';
    this.firstFormGroup.reset();
    this.secondFormGroup.reset();
    this.threeFormGroup.reset();
  }

  submitForm() {
    this.firstFormGroup.controls['positionId'].setValue(this.positionGuid);

    const myForm = {
      ...this.firstFormGroup.value,
      ...this.secondFormGroup.value,
      ...this.threeFormGroup.value
    };
    if (!this.firstFormGroup.valid || !this.secondFormGroup.valid|| !this.threeFormGroup.valid) {
      this.firstFormGroup.markAllAsTouched();
      this.secondFormGroup.markAllAsTouched();
      this.threeFormGroup.markAllAsTouched();
      return;
    }else {
     this.addEmployeeFacade.AddEmployee(myForm);

      this.addEmployeeFacade.addEmployee$.subscribe((res: any)=> {
        if(res.type == 1){
          this.resetStepper()
        }
      });
    }
  }
  onInput(event: any) {
    const input = event.target;
    if (input.value.length > 12) {
      input.value = input.value.slice(0, 12);
    }
  }
  protected readonly optionsGenderGeneral = optionsGenderGeneral;
  protected readonly optionsSocialStatus = optionsSocialStatus;
  protected readonly optionsProcedureCode = optionsProcedureCode;
  protected readonly optionsOvertime = optionsOvertime;
  protected readonly optionsFamilyDescription = optionsFamilyDescription;
}
