import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {optionsBooleanGeneral, optionsJobClassification} from "../../../../core/core.interface";
import {OrganizationalUnitFacade} from "../../organizational-unit/organizational-unit.facade";
import {JobTitleFacade} from "../job-title.facade";

declare var $: any;

@Component({
  selector: 'app-rewards-types',
  templateUrl: './job-title.component.html',
  styleUrl: './job-title.component.scss'
})
export class JobTitleComponent implements OnInit {
  edit: boolean = false;
  registerForm = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    authorizedToAccredit: ['', Validators.required],
    jobClassificationId: [0, Validators.required],
    jobClassificationName: ['', Validators.required],
    organizationStructureId: ['', Validators.required],
    organizationStructureName: ['', Validators.required],
  });
  registerFormSearch = this.fb.group({
    name: [''],
    organizationStructureName: [''],
  });
  constructor(  private fb: FormBuilder,
                protected jobTitleFacade: JobTitleFacade,
                protected organizationalUnitFacade: OrganizationalUnitFacade,
                private cdr: ChangeDetectorRef) {
    this.onSubmit();
    this.organizationalUnitFacade.GetOrganizationalUnitsByLevel(0);
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
  }
  onAdd(): void {
    const jobClassificationName = this.optionsJobClassification
        .find(option => option.value === this.registerForm.value.jobClassificationId)
        ?.label ?? null;
    this.registerForm.controls.jobClassificationName.setValue(jobClassificationName);
    const optionOrganization = this.organizationalUnitFacade.OrganizationalUnitsByLevelSubject$.getValue();
    const organizationName = optionOrganization.find(x => x.id === this.registerForm.value.organizationStructureId);
    const nameToSet = organizationName?.name ?? null; // Using nullish coalescing operator to handle undefined
    this.registerForm.controls.organizationStructureName.setValue(nameToSet);
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
    this.registerForm.value.jobClassificationName = this.optionsJobClassification.find(option => option.value === this.registerForm.value.jobClassificationId)?.label;

    this.edit = true;
  }

  protected readonly optionsJobClassification  = optionsJobClassification;
  protected readonly optionsBooleanGeneral  = optionsBooleanGeneral;
}
