import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageType } from '../../../../shared/shared.interfaces';
import { SharedFacade } from '../../../../shared/shared.facade';
import { EmployeeFacade } from '../../employee/employee.facade';
import { JobTitleFacade } from '../../job-title/job-title.facade';
import { optionsOvertime, optionsPayrollStatus, optionsSocialStatus } from '../../../../core/core.interface';
import { SecondmentToOtherPostionFacade } from '../secondmentToOtherPostion.facade';

declare var $: any;
@Component({
  selector: 'app-SecondmentToOtherPostion',
  templateUrl: './secondmentToOtherPostion.component.html',
  styleUrls: ['./secondmentToOtherPostion.component.scss']
})



export default class SecondmentToOtherPostionComponent implements OnInit {
  phoneNumberPattern = '[0][9]{1}[1,2,4,3,5]{1}[0-9]{7}';
rest = false;
  constructor( private _formBuilder: FormBuilder,
               protected secondmentToOtherPostionFacade: SecondmentToOtherPostionFacade,
               private sharedFacade: SharedFacade,
               protected employeeFacade: EmployeeFacade,
               protected jobTitleFacade: JobTitleFacade,
               private cdr: ChangeDetectorRef) {
    this.onSubmit();

  }
  registerForm = this._formBuilder.group({
    value : ['', Validators.required],
    code: [''],
    phoneNumber: ['', [
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern(this.phoneNumberPattern)
    ]],
    employeeName: [''],
  });
  registerFormRequest = this._formBuilder.group({
    employeeId: ['', Validators.required],
    SecondmentPositionId: [''],
    basicSalary: [''],
    socialStatusSalaries: [''],
    SecondmentDateStart: [''],
    SecondmentDateEnd: [''],
    overtime: [''],
    effDate: [''],

  });
  ngOnInit() {
  }

  onSubmit(): void {
    this.registerFormRequest.controls.employeeId.setValue('');
    this.employeeFacade.GetEmployee();
    this.jobTitleFacade.GetJobTitle();
  }
  onSearch(): void {
    if((this.registerForm.value.code == ''||this.registerForm.value.code == null ) && (this.registerForm.value.employeeName == '' || this.registerForm.value.employeeName == null) && (this.registerForm.value.phoneNumber == ''||this.registerForm.value.phoneNumber == null)){
      this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء ادخل بيانات للبحث   ', ['']);
      return;
    }
    else if( this.registerForm.controls.phoneNumber.invalid &&this.registerForm.value.phoneNumber != ''&&this.registerForm.value.phoneNumber != null){
      this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء ادخال  رقم هاتف الموظف بصيغة صحيحة  ', ['']);
      return;
    }

    const text=  this.registerForm.controls.employeeName.value != '' && this.registerForm.controls.employeeName.value != null ? this.registerForm.value.employeeName :this.registerForm.controls.code.value != '' && this.registerForm.controls.code.value != null? this.registerForm.value.code: this.registerForm.value.phoneNumber;
    const searchType=  this.registerForm.controls.employeeName.value != '' && this.registerForm.controls.employeeName.value != null ? '2' :this.registerForm.controls.code.value != '' && this.registerForm.controls.code.value != null? '1': '3';
    // this.secondmentToOtherPostionFacade.GetEmployee(searchType,text);
    this.secondmentToOtherPostionFacade.GetEmployee(searchType, text);
    this.cdr.detectChanges();
this.rest = true;


  }

  onReset(): void {
    this.registerForm.reset();
    this.registerForm.setErrors(null);
    this.registerFormRequest.reset();
    this.registerFormRequest.setErrors(null);
    this.secondmentToOtherPostionFacade.EmployeeSubject$.next(null);

    this.rest = false;

  }
onchange(){
  this.rest = false;

}


  onReClassification(): void {
    const employee = this.secondmentToOtherPostionFacade.EmployeeSubject$.getValue() ;
    if (employee != null) {
      this.registerFormRequest.controls.employeeId.setValue(employee.id);
    }
    if (this.registerFormRequest.valid &&((this.registerFormRequest.controls.SecondmentPositionId.value != '' && this.registerFormRequest.controls.SecondmentPositionId.value != null)||
      (this.registerFormRequest.controls.basicSalary.value != '' && this.registerFormRequest.controls.basicSalary.value != null)||
      (this.registerFormRequest.controls.socialStatusSalaries.value != '' && this.registerFormRequest.controls.socialStatusSalaries.value != null)||
      (this.registerFormRequest.controls.overtime.value != '' && this.registerFormRequest.controls.overtime.value != null)||
      (this.registerFormRequest.controls.SecondmentDateStart.value != '' && this.registerFormRequest.controls.SecondmentDateStart.value != null)||
      (this.registerFormRequest.controls.SecondmentDateEnd.value != '' && this.registerFormRequest.controls.SecondmentDateEnd.value != null)||
      (this.registerFormRequest.controls.effDate.value != '' && this.registerFormRequest.controls.effDate.value != null))) {
      this.secondmentToOtherPostionFacade.reClassification(this.registerFormRequest.value);
      this.onReset();

    }else {
      this.showNotification('عفواً، الرجاء ادخل بيانات ليتم تحديثها ','');
    }
  }
  showNotification(title, text){
    this.sharedFacade.showMessage(MessageType.warning, title, ['']);
  }

  getLabelFormOptions(options: any, item: number): string {
    const option = options.find(opt => opt.value.toString() == item);
    return option ? option.label : '';
  }


  protected readonly Object = Object;
  protected readonly optionsPayrollStatus = optionsPayrollStatus;
  protected readonly optionsSocialStatus = optionsSocialStatus;
  protected readonly optionsOvertime = optionsOvertime;
}
