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
  rest: boolean = false;
  isCollapsed = true;
  multiCollapsed1 = false;
  multiCollapsed2 = false;
  phoneNumberPattern = '[0][9]{1}[1,2,4,3,5]{1}[0-9]{7}';
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
    value : ['', Validators.required],
    code: [''],
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
    this.rest = false;
  }

  onSubmit(): void {
    this.employeeBonusesFacade.EmployeeBonuses$.subscribe(null);
    this.registerForm.controls.id.setValue('');
    this.employeeFacade.GetEmployee();
    this.employeeBonusesFacade.GetBonusesType();

  }
  onchange(){
    this.rest = false;

  }
  onCancel(id ): void {
    let request ={
      employeeId: this.employeeBonusesFacade.EmployeeBonusesSubject$.getValue().id,
      id: id,
      deleteDate: new Date().toISOString(),
    }
    this.employeeBonusesFacade.cancelEmployeeBonuses(request);
    this.rest = false;
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
    this.registerFormSearch.reset();
    this.registerFormSearch.setErrors(null);
    this.employeeBonusesFacade.EmployeeBonusesSubject$.next(null);
    this.employeeBonusesFacade.EmployeeBonuses$.subscribe(null);
      }
  onAdd(): void {
    const employeeBonuses = this.employeeBonusesFacade.EmployeeBonusesSubject$.getValue();
    employeeBonuses != null ? this.registerForm.controls.employeeId.setValue(employeeBonuses.id): '';
    if (this.registerForm.valid) {
        this.employeeBonusesFacade.AddEmployeeBonuses(this.registerForm?.value);
        this.onClean();
      this.rest = false;

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
    if((this.registerFormSearch.value.code == ''||this.registerFormSearch.value.code == null ) && (this.registerFormSearch.value.employeeName == '' || this.registerFormSearch.value.employeeName == null) && (this.registerFormSearch.value.phoneNumber == ''||this.registerFormSearch.value.phoneNumber == null)){
      this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء ادخل بيانات للبحث   ', ['']);
      return;
    }
    else if( this.registerFormSearch.controls.phoneNumber.invalid &&this.registerFormSearch.value.phoneNumber != ''&&this.registerFormSearch.value.phoneNumber != null){
      this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء ادخال  رقم هاتف المستخدم بصيغة صحيحة  ', ['']);
      return;
    }

    const text=  this.registerFormSearch.controls.employeeName.value != '' && this.registerFormSearch.controls.employeeName.value != null ? this.registerFormSearch.value.employeeName :this.registerFormSearch.controls.code.value != '' && this.registerFormSearch.controls.code.value != null? this.registerFormSearch.value.code: this.registerFormSearch.value.phoneNumber;
    const searchType=  this.registerFormSearch.controls.employeeName.value != '' && this.registerFormSearch.controls.employeeName.value != null ? '2' :this.registerFormSearch.controls.code.value != '' && this.registerFormSearch.controls.code.value != null? '1': '3';
    this.employeeBonusesFacade.GetEmployeeBonuses(searchType,text);
    // this.employeeBonusesFacade.GetEmployeeBonuses(searchType, text).subscribe(employees => {
    //   this.employeeBonusesFacade.EmployeeBonusesSubject$.next(employees);
    // });
    this.cdr.detectChanges();
    this.rest = true;
    const employeeBonuses = this.employeeBonusesFacade.EmployeeBonusesSubject$.getValue();
    employeeBonuses != null ? this.registerForm.controls.employeeId.setValue(employeeBonuses.id): '';
    this.cdr.detectChanges();

  }
}

