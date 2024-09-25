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
    code: [''],
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
  onSearch(): void {
    if((this.registerForm.value.code == ''||this.registerForm.value.code == null ) && (this.registerForm.value.employeeName == '' || this.registerForm.value.employeeName == null) && (this.registerForm.value.phoneNumber == ''||this.registerForm.value.phoneNumber == null)){
      this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء ادخل بيانات للبحث   ', ['']);
      return;
    }
    else if( this.registerForm.controls.phoneNumber.invalid &&this.registerForm.value.phoneNumber != ''&&this.registerForm.value.phoneNumber != null){
      this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء ادخال  رقم هاتف المستخدم بصيغة صحيحة  ', ['']);
      return;
    }

    const text=  this.registerForm.controls.employeeName.value != '' && this.registerForm.controls.employeeName.value != null ? this.registerForm.value.employeeName :this.registerForm.controls.code.value != '' && this.registerForm.controls.code.value != null? this.registerForm.value.code: this.registerForm.value.phoneNumber;
    const searchType=  this.registerForm.controls.employeeName.value != '' && this.registerForm.controls.employeeName.value != null ? '2' :this.registerForm.controls.code.value != '' && this.registerForm.controls.code.value != null? '1': '3';

    this.employeeFacade.GetEmployeePage(searchType, text);
    this.cdr.detectChanges();

   }


}
