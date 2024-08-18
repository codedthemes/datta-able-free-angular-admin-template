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


  edit: boolean = false;
  nidPattern = '[1]{1}[1]{1}[9]{1}[0-9]{9}|[2]{1}[1]{1}[9]{1}[0-9]{9}|[1]{1}[2]{1}[0]{1}[0-9]{9}|[2]{1}[2]{1}[0]{1}[0-9]{9}';
  constructor(  private fb: FormBuilder,
                protected addEmployeeFacade: AddEmployeeFacade,
                protected organizationalUnitFacade: OrganizationalUnitFacade,
                protected scientificQualificationsFacade: ScientificQualificationsFacade,
                protected definitionPositionFacade: DefinitionPositionFacade,
                protected nationalitiesFacade: NationalitiesFacade,

                private _formBuilder: FormBuilder) {
    this.organizationalUnitFacade.GetOrganizationalUnitsByLevel(0);
    this.organizationalUnitFacade.GetOrganizationalUnitsByLevel(2);
    this.scientificQualificationsFacade.GetScientificQualifications();
    this.definitionPositionFacade.GetPosition('','');
    this.nationalitiesFacade.GetNationality();
      this.firstFormGroup = this._formBuilder.group({
        positionId: ['', Validators.required],
         organizationStructureName: [{ value: '', disabled: true }],
        locationName: [{ value: '', disabled: true }],
        jobTitleName: [{ value: '', disabled: true }],
        costCenterCode: [{ value: '', disabled: true }],
        specificUnit: [{ value: '', disabled: true }],
        organizationalUnitNumber: [{ value: '', disabled: true }],
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
        nid: [null, [
          Validators.minLength(12),
          Validators.maxLength(12),
          Validators.pattern(this.nidPattern)
        ]],
        passportNumber: ['', Validators.required],
        identificationCardNumber: ['', Validators.required],
        socialStatus: [null, Validators.required],
        gender: [null, Validators.required],
        familyData: this._formBuilder.array([]),
      });
    this.threeFormGroup = this._formBuilder.group({
      employeeCode: ['', Validators.required],
      financialNumber: ['', Validators.required],
      socialSecurityNumber: [null, Validators.required],
      basicSalary: [''],
      procedureCode: ['', Validators.required],
      overtime: [null, Validators.required],
      socialStatusSalaries: [null, Validators.required],

    });
  }

  ngOnInit() {
    this.edit = false;
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
    const optionPosition = this. definitionPositionFacade.PositionSubject$ .getValue().find(x => x.id == this.firstFormGroup.value.positionId);
    // this.registerForm.value.jobTitleName =  this.registerForm.value.jobTitleId != '' && this.registerForm.value.jobTitleId != null ?   optionJobTitleName.name: '';
    this.firstFormGroup.controls['organizationStructureName'].setValue(optionPosition.organizationStructureName);
    this.firstFormGroup.controls['locationName'].setValue(optionPosition.locationName);
    this.firstFormGroup.controls['jobTitleName'].setValue(optionPosition.jobTitleName);
    this.firstFormGroup.controls['costCenterCode'].setValue(optionPosition.costCenterCode);
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
      return;
    }
    if (this.currentStep === 2 && !this.secondFormGroup.valid ) {
      this.secondFormGroup.markAllAsTouched();
      return;
    }

    this.currentStep++;
  }

  previousStep() {
    this.currentStep--;
  }

  resetStepper() {
    this.currentStep = 1;
    this.firstFormGroup.reset();
    this.secondFormGroup.reset();
    this.threeFormGroup.reset();
  }

  submitForm() {
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
