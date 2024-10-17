import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpgradeFacade } from '../upgrade.facade';
import { MessageType } from '../../../../shared/shared.interfaces';
import { SharedFacade } from '../../../../shared/shared.facade';
import {
  optionsOvertime,
  optionsPayrollStatus,
  optionsSocialStatus
} from '../../../../core/core.interface';
import { EmployeeFacade } from '../../employee/employee.facade';
import { JobTitleFacade } from '../../job-title/job-title.facade';

declare var $: any;
@Component({
  selector: 'app-clinics',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.scss']
})
export default class UpgradeComponent implements OnInit {
  phoneNumberPattern = '[0][9]{1}[1,2,4,3,5]{1}[0-9]{7}';
  rest = false;
  constructor( private _formBuilder: FormBuilder,
              protected upgradeFacade: UpgradeFacade,
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
    jobTitleId: [''],
   socialStatusSalaries: [-1],
    overtime: [-1],
    effDate: [''],
    Notes: this._formBuilder.array([]),

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
      this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء ادخال  رقم هاتف المستخدم بصيغة صحيحة  ', ['']);
      return;
    }

    const text=  this.registerForm.controls.employeeName.value != '' && this.registerForm.controls.employeeName.value != null ? this.registerForm.value.employeeName :this.registerForm.controls.code.value != '' && this.registerForm.controls.code.value != null? this.registerForm.value.code: this.registerForm.value.phoneNumber;
    const searchType=  this.registerForm.controls.employeeName.value != '' && this.registerForm.controls.employeeName.value != null ? '2' :this.registerForm.controls.code.value != '' && this.registerForm.controls.code.value != null? '1': '3';
    // this.upgradeFacade.GetEmployee(searchType,text);
    this.upgradeFacade.GetEmployee(searchType, text);
    this.cdr.detectChanges();
    this.rest = true;


  }

  onReset(): void {
    this.registerForm.reset();
    this.registerForm.setErrors(null);
    this.registerFormRequest.reset();
    this.registerFormRequest.setErrors(null);
    this.rest = false;
  }



  onUpgrade(): void {
    const employee = this.upgradeFacade.EmployeeSubject$.getValue() ;
    if (employee != null) {
      this.registerFormRequest.controls.employeeId.setValue(employee.id);
    }
    if (this.registerFormRequest.valid && this.isAnyFieldFilled()) {
      (this.registerFormRequest.controls.jobTitleId.value == '' || this.registerFormRequest.controls.jobTitleId.value == null)? this.registerFormRequest.controls.jobTitleId.setValue(employee.jobTitleId): '';
      (this.registerFormRequest.controls.overtime.value == -1 || this.registerFormRequest.controls.overtime.value == null)? this.registerFormRequest.controls.overtime.setValue(employee.overtime): '';
      (this.registerFormRequest.controls.socialStatusSalaries.value == -1|| this.registerFormRequest.controls.socialStatusSalaries.value == null)? this.registerFormRequest.controls.socialStatusSalaries.setValue(employee.socialStatusSalaries): '';
      (this.registerFormRequest.controls.effDate.value == '' || this.registerFormRequest.controls.effDate.value == null)? this.registerFormRequest.controls.effDate.setValue(employee.effDate.toString()): '';
      // if (this.registerFormRequest.valid &&((this.registerFormRequest.controls.jobTitleId.value != '' && this.registerFormRequest.controls.jobTitleId.value != null)||
    //   (this.registerFormRequest.controls.socialStatusSalaries.value != '' && this.registerFormRequest.controls.socialStatusSalaries.value != null)||
    //   (this.registerFormRequest.controls.overtime.value != '' && this.registerFormRequest.controls.overtime.value != null)||
    //   (this.registerFormRequest.controls.effDate.value != '' && this.registerFormRequest.controls.effDate.value != null))) {
        this.upgradeFacade.upgrade(this.registerFormRequest.value);
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
  getLabelFormOptionsInt(options: any, item: string): string {
    const option = options.find(opt => opt.value == item);
    return option ? option.label : '';
  }
  onchange(){
    this.rest = false;

  }
  isAnyFieldFilled() {
    const controls = this.registerFormRequest.controls;
    return (
      (controls.jobTitleId.value) ||
      (controls.overtime.value) ||
      (controls.socialStatusSalaries.value) ||
      (controls.effDate.value)
    );
  }



  createNote(): FormGroup {
    return this._formBuilder.group({
      text: ['',   Validators.required],
    });
  }
  addNote(): void {
    // if(this.secondFormGroup.value.socialStatus == 3){
    const NoteArray = this.registerFormRequest.get('Notes') as FormArray;
    if(NoteArray.length == 0) {
      NoteArray.push(this.createNote());
    }
  }
  removeNote(index: number) {
    this.Notes.removeAt(index);
  }
  get Notes(): FormArray {
    return this.registerFormRequest.get('Notes') as FormArray;
  }
  getControl(control: AbstractControl, controlName: string): AbstractControl | null {
    return control.get(controlName);
  }
  protected readonly Object = Object;
  protected readonly optionsSocialStatus = optionsSocialStatus;
  protected readonly optionsOvertime = optionsOvertime;
  protected readonly optionsPayrollStatus = optionsPayrollStatus;
}
