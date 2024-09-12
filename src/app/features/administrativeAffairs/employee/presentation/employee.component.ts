import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SharedFacade } from '../../../../shared/shared.facade';
import { EmployeeFacade } from '../employee.facade';
import { MessageType } from '../../../../shared/shared.interfaces';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})


export class EmployeeComponent implements OnInit {
  edit: boolean = false;
  phoneNumberPattern = '[0][9]{1}[1,2,4,3,5]{1}[0-9]{7}';
  registerForm = this.fb.group({
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
    protected employeeFacade: EmployeeFacade,
    private fb: FormBuilder,
    private sharedFacade: SharedFacade,
    private cdr: ChangeDetectorRef) {

    this.onSubmit();
  }
  ngOnInit() {
    this.edit = false;
  }

  onSubmit(): void {
 this.employeeFacade.GetEmployeePage('','');
 this.employeeFacade.GetEmployee();
  }
  onDelete(Id: string): void {
    this.edit = false;
    this.employeeFacade.deleteEmployee(Id);
    this.registerForm.reset();
  }
  onReset(): void {
    this.registerForm.reset();
    this.registerForm.setErrors(null);
    this.employeeFacade.GetEmployeePage('','')
  }
  onChangeSearchType(): void {
    this.registerForm.controls.employeeCode.reset();
    this.registerForm.controls.phoneNumber.reset();
    this.registerForm.controls.employeeName.reset();
    this.registerForm.controls.value.reset();
    this.registerForm.setErrors(null);
  }
  onSearch(): void {
    if(this.registerForm.controls.searchType.value  == ''){
      this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء اختر نوع البحث   ', ['']);
      return;
    }
    else if(this.registerForm.controls.searchType.value  == '1' && (this.registerForm.value.employeeCode == '' || this.registerForm.value.employeeCode == null)){
      this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء ادخال رقم الموظف  ', ['']);
      return;
    }
    else if(this.registerForm.controls.searchType.value  == '2' && (this.registerForm.value.employeeName == '' || this.registerForm.value.employeeName == null)){
      this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء اختر الموظف   ', ['']);
      return;
    }
    else if(this.registerForm.controls.searchType.value   == '3' && (this.registerForm.value.phoneNumber == '' || this.registerForm.value.phoneNumber == null)){
      this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء ادخال رقم هاتف الموظف  ', ['']);
      return;
    }
    let text=  this.registerForm.controls.searchType.value == '1'? this.registerForm.value.employeeCode:this.registerForm.controls.searchType.value == '2' ? this.registerForm.value.employeeName.toString(): this.registerForm.value.phoneNumber;
    this.registerForm.controls.value.setValue(text);
    this.employeeFacade.GetEmployeePage(this.registerForm.value.searchType,this.registerForm.value.value);
  }


  // protected readonly Object = Object;
}
