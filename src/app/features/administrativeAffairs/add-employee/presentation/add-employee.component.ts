import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  optionsBooleanGeneral,
  optionsGenderGeneral,
  optionsJobClassification,
  optionsSocialStatus
} from '../../../../core/core.interface';
import {OrganizationalUnitFacade} from "../../organizational-unit/organizational-unit.facade";
import {AddEmployeeFacade} from "../add-employee.facade";
import {
  ScientificQualificationsFacade
} from '../../../definitions/scientific-qualifications/scientific-qualifications.facade';
import { optionsNationalityType } from '../../../definitions/nationalities/nationalities.interface';

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


  edit: boolean = false;
  registerForm = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    // authorizedToAccredit: ['', Validators.required],
    jobClassificationId: [0, Validators.required],
    jobClassificationName: [''],
    // organizationStructureId: ['', Validators.required],
    // organizationStructureName: [''],



    jobDescription: ['', Validators.required],
    inlineNumberPositionsLibyan: ['', Validators.required],
    NumberPositionsForeigners: ['', Validators.required],
    scientificQualifications: ['', Validators.required],
  });
  registerFormSearch = this.fb.group({
    name: [''],
    organizationStructureName: [''],
  });


  constructor(  private fb: FormBuilder,
                protected jobTitleFacade: AddEmployeeFacade,
                protected organizationalUnitFacade: OrganizationalUnitFacade,
                protected scientificQualificationsFacade: ScientificQualificationsFacade,
                private _formBuilder: FormBuilder) {
    this.onSubmit();
    this.organizationalUnitFacade.GetOrganizationalUnitsByLevel(0);
    this.organizationalUnitFacade.GetOrganizationalUnitsByLevel(2);
    this.scientificQualificationsFacade.GetScientificQualifications();

      this.firstFormGroup = this._formBuilder.group({
        firstName: ['', Validators.required],
        // lastName: ['', Validators.required],
        lastName: [''],
        location: [''],
        dep: [''],
        tax: [''],
        // email: ['', [Validators.required, Validators.email]]
      });
      this.secondFormGroup = this._formBuilder.group({
        name: ['', Validators.required],
        nameEn: ['', Validators.required],
        birthDate: ['', Validators.required],
        nid: ['', Validators.required],
        passportNumber: ['', Validators.required],
        socialStatus: ['', Validators.required],
        gender: ['', Validators.required],
      });
  }

  ngOnInit() {
    this.edit = false;

  }
  onSubmit(): void {
    this.jobTitleFacade.GetJobTitle(this.registerFormSearch.value);
  }
  onSearch(): void {
    this.registerForm.controls.id.setValue('');
    if (this.registerFormSearch.value.name !='' || this.registerFormSearch.value.organizationStructureName !='' ) {
      this.jobTitleFacade.GetJobTitle(this.registerFormSearch.value);
    }
  }

  onDelete(Id: string): void {
    this.edit = false;
    this.jobTitleFacade.deleteJobTitle(Id);
    this.registerForm.reset();
  }
  onReset(): void {
    this.edit = false;
    this.registerForm.reset();
    this.registerForm.setErrors(null);
    this.registerFormSearch.reset();
    this.registerFormSearch.setErrors(null);
    this.onSubmit();
    this.organizationalUnitFacade.GetOrganizationalUnitsByLevel(0);
  }
  onAdd(): void {
    this.registerForm.value.jobClassificationName = this.optionsJobClassification.find(option => option.value == this.registerForm.value.jobClassificationId)?.label;
    // const optionOrganization = this.organizationalUnitFacade.OrganizationalUnitsByLevelSubject$.getValue().find(x => x.id == this.registerForm.value.organizationStructureId);
    // this.registerForm.value.organizationStructureName =  this.registerForm.value.organizationStructureId != '' && this.registerForm.value.organizationStructureId != null ?   optionOrganization.name: '';

    if (this.registerForm.valid) {
      if(this.edit) {
        this.jobTitleFacade.UpdateJobTitle(this.registerForm?.value);
        this.onReset();
      }else{
        this.jobTitleFacade.AddJobTitle(this.registerForm?.value);
        this.onReset();

      }
    }
  }
  onEdit(jobTitle: any): void {
    this.registerForm.patchValue(jobTitle);
    this.registerForm.value.jobClassificationName = this.optionsJobClassification.find(option => option.value == this.registerForm.value.jobClassificationId)?.label;

    this.edit = true;
  }

  protected readonly optionsJobClassification  = optionsJobClassification;
  protected readonly optionsBooleanGeneral  = optionsBooleanGeneral;
  protected readonly optionsNationalityType = optionsNationalityType;





// Method to get a form control by its name from a given form group
  getControl(formGroup: FormGroup, controlName: string) {
    return formGroup.get(controlName);
  }

  nextStep() {
    if (this.currentStep === 1 && !this.firstFormGroup.valid) {
      this.firstFormGroup.markAllAsTouched();
      return;
    }
    if (this.currentStep === 2 && !this.secondFormGroup.valid) {
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
  }

  submitForm() {
    if (!this.firstFormGroup.valid || !this.secondFormGroup.valid) {
      this.firstFormGroup.markAllAsTouched();
      this.secondFormGroup.markAllAsTouched();
      return;
    }
    console.log('Form submitted:', {
      ...this.firstFormGroup.value,
      ...this.secondFormGroup.value
    });
  }

  protected readonly optionsGenderGeneral = optionsGenderGeneral;
  protected readonly optionsSocialStatus = optionsSocialStatus;
}
