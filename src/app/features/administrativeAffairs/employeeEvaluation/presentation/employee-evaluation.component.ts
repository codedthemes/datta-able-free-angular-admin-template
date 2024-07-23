import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {optionsBooleanGeneral, optionsEvaluation, optionsJobClassification} from "../../../../core/core.interface";
import {OrganizationalUnitFacade} from "../../organizational-unit/organizational-unit.facade";
import {EmployeeEvaluationFacade} from "../employee-evaluation.facade";
import {EmployeeFacade} from "../../employee/employee.facade";

declare var $: any;

@Component({
  selector: 'app-rewards-types',
  templateUrl: './employee-evaluation.component.html',
  styleUrl: './employee-evaluation.component.scss'
})
export class EmployeeEvaluationComponent implements OnInit {
  edit: boolean = false;
  registerForm = this.fb.group({
    id: [''],
    employeeId: ['', Validators.required],
    year: [0, Validators.required],
    evaluationId: [0, Validators.required],
    evaluationName: [''],
  });
  registerFormSearch = this.fb.group({
    employeeId: ['', Validators.required],
  });
  constructor(  private fb: FormBuilder,
                protected employeeFacade: EmployeeFacade,
                protected employeeEvaluationFacade: EmployeeEvaluationFacade,
                private cdr: ChangeDetectorRef) {
    this.onSubmit();
    this.employeeFacade.GetEmployee();
  }
  ngOnInit() {
    this.edit = false;
  }
  onSubmit(): void {
    this.employeeEvaluationFacade.GetEmployeeEvaluation(null);
  }
  onSearch(): void {
    this.registerForm.controls.id.setValue('');
if (this.registerFormSearch.valid){
      this.employeeEvaluationFacade.GetEmployeeEvaluation(this.registerFormSearch.value.employeeId);
  }
  }

  onDelete(Id: string): void {
    this.edit = false;
    this.employeeEvaluationFacade.deleteEmployeeEvaluation(Id);
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
    // const jobClassificationName = this.optionsJobClassification
    //     .find(option => option.value === this.registerForm.value.jobClassificationId)
    //     ?.label ?? null;
    // this.registerForm.controls.jobClassificationName.setValue(jobClassificationName);

    if (this.registerForm.valid) {
      if(this.edit) {
        this.employeeEvaluationFacade.UpdateEmployeeEvaluation(this.registerForm?.value);
        this.onReset();
      }else{
        this.employeeEvaluationFacade.AddEmployeeEvaluation(this.registerForm?.value);
        this.onReset();

      }
    }
  }
  onEdit(jobTitle: any): void {
    this.registerForm.patchValue(jobTitle);
    this.registerForm.value.evaluationName = this.optionsEvaluation.find(option => option.value === this.registerForm.value.evaluationId)?.label;
    this.edit = true;

  }

  protected readonly optionsEvaluation  = optionsEvaluation;
}
