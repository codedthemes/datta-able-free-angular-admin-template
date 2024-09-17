import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { EmployeeBonusesFacade } from '../employee-bonuses.facade';
import { MessageType } from '../../../../shared/shared.interfaces';
import { SharedFacade } from '../../../../shared/shared.facade';
import { EmployeeFacade } from '../../employee/employee.facade';
import { async } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-rewards-types',
  templateUrl: './employee-bonuses.component.html',
  styleUrl: './employee-bonuses.component.scss'
})
export class EmployeeBonusesComponent implements OnInit {
  edit: boolean = false;
  isCollapsed = true;
  multiCollapsed1 = false;
  multiCollapsed2 = false;
  phoneNumberPattern = '[0][9]{1}[1,2,4,3,5]{1}[0-9]{7}';
  // patternFloat="^[1-9][0-9](\.[0-9]+)?|0+\.[0-9][1-9][0-9]*$";
  patternFloat="^-?\\d*(\\.\\d+)?$";
  registerForm = this.fb.group({
    id : ['', Validators.required],
    employeeId : [''],
    dateOfGet: ['', Validators.required],
    amount: [
      0, // Initial value
      [
        Validators.required,
        Validators.pattern(this.patternFloat) // Use the numeric pattern here
      ],
      ],


    basicSalary: [{ value: '', disabled: true }],
    grossSalary: [{ value: '', disabled: true }],
  });

  registerFormSearch = this.fb.group({
    searchType : ['', Validators.required],
    value : ['', Validators.required],
    employeeCode: [''],
    phoneNumber: ['', [
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern(this.phoneNumberPattern)
    ]],
    employeeName: [''],

  });
  constructor(
      private fb: FormBuilder,
      protected employeeBonusesFacade: EmployeeBonusesFacade,
      private sharedFacade: SharedFacade,
      protected employeeFacade: EmployeeFacade,
      private cdr: ChangeDetectorRef
  ) {
    this.onSubmit();
  }

  ngOnInit() {
    this.onSubmit();
  }

  onSubmit(): void {
    this.employeeBonusesFacade.EmployeeBonuses$.subscribe(null);
    this.registerForm.controls.id.setValue('');
    this.employeeFacade.GetEmployee();
    this.employeeBonusesFacade.GetBonusesType();

  }

  onCancel(id ): void {
    let request ={
      employeeId: this.employeeBonusesFacade.EmployeeBonusesSubject$.getValue().id,
      id: id,
      deleteDate: new Date().toISOString(),
    }
    this.employeeBonusesFacade.cancelEmployeeBonuses(request);
    this.onClean();
    this.onSearch();
  }
  onReset(): void {
    // this.edit = false;
    this.registerForm.reset();
    this.registerForm.setErrors(null);
    this.registerFormSearch.reset();
    this.registerFormSearch.setErrors(null);
    this.employeeBonusesFacade.EmployeeBonusesSubject$.next(null);
    this.employeeBonusesFacade.EmployeeBonuses$.subscribe(null);
  }
  onClean(): void {

    this.registerForm.reset();
    this.registerForm.setErrors(null);

    //no job
    // this.registerFormSearch.controls.employeeCode.reset();
    // this.registerFormSearch.controls.phoneNumber.reset();
    // this.registerFormSearch.controls.employeeName.reset();
    // this.registerFormSearch.controls.value.reset();
    // this.registerFormSearch.setErrors(null);

    this.employeeBonusesFacade.EmployeeBonusesSubject$.next(null);
    this.employeeBonusesFacade.EmployeeBonuses$ =  this.employeeBonusesFacade.EmployeeBonusesSubject$.asObservable();

  }
  onAdd(): void {
    this.registerForm.controls.employeeId.setValue(this.employeeBonusesFacade.EmployeeBonusesSubject$.getValue().id);
    if (this.registerForm.valid) {
        this.employeeBonusesFacade.AddEmployeeBonuses(this.registerForm?.value);
        this.onClean();
        this.onSearch();
       }else {
      if(this.registerForm.value.id  == ''||this.registerForm.value.id  == null || this.registerForm.controls.id.invalid ){
        this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء اختر نوع العلاواة    ', ['']);
        return;
      }
      else if(this.registerForm.value.amount  == 0 ||this.registerForm.value.amount  == null || this.registerForm.controls.amount.invalid ){
        this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء ادخال قيمة العلاواة وبصيغة صحيحة ', ['']);
        return;
      }
      else if( this.registerForm.value.dateOfGet  == ''||this.registerForm.value.dateOfGet  == null || this.registerForm.controls.dateOfGet.invalid ){
        this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء ادخال تاريخ الحصول علي العلاواة', ['']);
        return;
      }
    }
  }
  onSearch(): void {
    if(this.registerFormSearch.controls.searchType.value  == ''){
      this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء اختر نوع البحث   ', ['']);
      return;
    }
    else if(this.registerFormSearch.controls.searchType.value  == '1' && (this.registerFormSearch.value.employeeCode == ''||this.registerFormSearch.value.employeeCode == null )){
      this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء ادخال رقم الموظف  ', ['']);
      return;
    }
    else if(this.registerFormSearch.controls.searchType.value  == '2' && (this.registerFormSearch.value.employeeName == '' || this.registerFormSearch.value.employeeName == null)){
      this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء اختر الموظف   ', ['']);
      return;
    }
    else if(this.registerFormSearch.controls.searchType.value   == '3' && (this.registerFormSearch.value.phoneNumber == ''||this.registerFormSearch.value.phoneNumber == null)){
      this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء ادخال رقم هاتف الموظف  ', ['']);
      return;
    }
    let text=  this.registerFormSearch.controls.searchType.value == '1'? this.registerFormSearch.value.employeeCode.toString():this.registerFormSearch.controls.searchType.value == '2' ? this.registerFormSearch.value.employeeName.toString(): this.registerFormSearch.value.phoneNumber;
    this.registerFormSearch.controls.value.setValue(text);
    this.employeeBonusesFacade.GetEmployeeBonuses(this.registerFormSearch.value.searchType,this.registerFormSearch.value.value);
    const employeeBonuses = this.employeeBonusesFacade.EmployeeBonusesSubject$.getValue();
    employeeBonuses != null ? this.registerForm.controls.employeeId.setValue(employeeBonuses.id): '';
    this.cdr.detectChanges();

  }
}

