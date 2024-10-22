import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FunctionalProceduresFacade } from '../functional-procedures.facade';
import { MessageType } from '../../../../shared/shared.interfaces';
import { SharedFacade } from '../../../../shared/shared.facade';
import {
  optionsOvertime,
  optionsPayrollStatus, optionsPositionStatus, optionsProcedureCodeTypeEnd,
  optionsSocialStatus
} from '../../../../core/core.interface';
import { EmployeeFacade } from '../../employee/employee.facade';
import { JobTitleFacade } from '../../job-title/job-title.facade';

declare var $: any;
@Component({
  selector: 'app-clinics',
  templateUrl: './functional-procedures.component.html',
  styleUrls: ['./functional-procedures.component.scss']
})
export default class FunctionalProceduresComponent implements OnInit {
  phoneNumberPattern = '[0][9]{1}[1,2,4,3,5]{1}[0-9]{7}';
  patternFloat="^-?\\d*(\\.\\d+)?$";

  rest = false;

  constructor( private _formBuilder: FormBuilder,
              protected functionalProceduresFacade: FunctionalProceduresFacade,
              private sharedFacade: SharedFacade,
              protected employeeFacade: EmployeeFacade,
               protected jobTitleFacade: JobTitleFacade,
              private cdr: ChangeDetectorRef) {
    this.onSubmit();

  }
  registerForm = this._formBuilder.group({
    value : ['', Validators.required],
    TOC : ['', Validators.required],
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
    effDate: [''],
    Notes: this._formBuilder.array([]),

  });
  registerFormRequest04 = this._formBuilder.group({
    employeeId: ['', Validators.required],
    HireDate: ['', Validators.required],
    effDate: [''],
    Notes: this._formBuilder.array([]),

  });
  registerFormRequest14 = this._formBuilder.group({
    employeeId: ['', Validators.required],
    basicSalary: [0, Validators.required],
    effDate: [''],
    Notes: this._formBuilder.array([]),

  });
  registerFormRequest02 = this._formBuilder.group({
    employeeId: ['', Validators.required],
    effDate: ['', Validators.required],
    Notes: this._formBuilder.array([]),

  });
  registerFormRequest111 = this._formBuilder.group({
    employeeId: ['', Validators.required],
    procedureCode: [null, Validators.required],
    effDate: ['', Validators.required],
    Notes: this._formBuilder.array([]),

  });
  ngOnInit() {
  }

  onSubmit(): void {
    this.registerFormRequest.controls.employeeId.setValue('');
    this.registerFormRequest04.controls.employeeId.setValue('');
    this.registerFormRequest14.controls.employeeId.setValue('');
    this.registerFormRequest111.controls.employeeId.setValue('');
    this.registerFormRequest02.controls.employeeId.setValue('');
    this.employeeFacade.GetEmployee();
    this.jobTitleFacade.GetJobTitle();
  }
  onSearch(): void {
    this.rest = false;
    this.functionalProceduresFacade.Employee$.subscribe(null);
    if((this.registerForm.value.code == ''||this.registerForm.value.code == null ) && (this.registerForm.value.employeeName == '' || this.registerForm.value.employeeName == null) && (this.registerForm.value.phoneNumber == ''||this.registerForm.value.phoneNumber == null)){
      this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء ادخل بيانات للبحث   ', ['']);
      return;
    }

    else if( this.registerForm.controls.phoneNumber.invalid &&this.registerForm.value.phoneNumber != ''&&this.registerForm.value.phoneNumber != null){
      this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء ادخال  رقم هاتف المستخدم بصيغة صحيحة  ', ['']);
      return;
    }
    if(this.registerForm.value.TOC == ''||this.registerForm.value.TOC == null  ){
      this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء اختر الإجراء   ', ['']);
      return;
    }
    const text=  this.registerForm.controls.employeeName.value != '' && this.registerForm.controls.employeeName.value != null ? this.registerForm.value.employeeName :this.registerForm.controls.code.value != '' && this.registerForm.controls.code.value != null? this.registerForm.value.code: this.registerForm.value.phoneNumber;
    const searchType=  this.registerForm.controls.employeeName.value != '' && this.registerForm.controls.employeeName.value != null ? '2' :this.registerForm.controls.code.value != '' && this.registerForm.controls.code.value != null? '1': '3';
    // this.functionalProceduresFacade.GetEmployee(searchType,text);
    this.functionalProceduresFacade.GetEmployee(searchType, text);
    this.cdr.detectChanges();
    this.functionalProceduresFacade.Employee$.subscribe(res=>{
      if( res != null){
        setTimeout(()=> {
          if(this.registerForm.value.TOC == '08' && res.procedureCode != 45){
            this.rest = false;
            this.sharedFacade.showMessage(MessageType.info, 'عفواً، المستخدم غير متقاعد   ', ['']);
            return;

          }  else if(this.registerForm.value.TOC == '02' && res.procedureCode == 45){
            this.rest = false;
            this.sharedFacade.showMessage(MessageType.info, 'عفواً، المستخدم متقاعد لايمكن تنفيذ عليه هذا الإجراء  ', ['']);
            return;

          }else {
            this.rest = true;

          }

        });
      }else {
        return;
      }
    });
    // const employee = this.functionalProceduresFacade.EmployeeSubject$.getValue() ;



  }

  onReset(): void {
    this.registerForm.reset();
    this.registerForm.setErrors(null);
    this.registerFormRequest.reset();
    this.registerFormRequest04.reset();
    this.registerFormRequest.setErrors(null);
    this.registerFormRequest04.setErrors(null);
    this.registerFormRequest14.setErrors(null);
    this.registerFormRequest02.setErrors(null);
    this.registerFormRequest111.setErrors(null);
    this.registerFormRequest14.reset();
    this.registerFormRequest111.reset();
    this.registerFormRequest02.reset();
    this.rest = false;
  }



  onRehireToRetiredEmployee08(): void {
    const employee = this.functionalProceduresFacade.EmployeeSubject$.getValue() ;
    if (employee != null) {
      this.registerFormRequest.controls.employeeId.setValue(employee.id);
    }

    // if (this.registerFormRequest.valid &&((this.registerFormRequest.controls.jobTitleId.value != '' && this.registerFormRequest.controls.jobTitleId.value != null)||
    //    (this.registerFormRequest.controls.effDate.value != '' && this.registerFormRequest.controls.effDate.value != null))) {
    if (this.registerFormRequest.valid && this.isAnyFieldFilled()) {
     (this.registerFormRequest.controls.effDate.value == '' || this.registerFormRequest.controls.effDate.value == null)? this.registerFormRequest.controls.effDate.setValue(employee.effDate.toString()): '';


      this.functionalProceduresFacade.RehireToRetiredEmployee(this.registerFormRequest.value);
        this.onReset();

    }else {
      this.showNotification('عفواً، الرجاء ادخل بيانات ليتم تحديثها ','');
    }
  }
  onChangeDateOfHire04(): void {
    const employee = this.functionalProceduresFacade.EmployeeSubject$.getValue() ;
    if (employee != null) {
      this.registerFormRequest04.controls.employeeId.setValue(employee.id);
    }
  if (this.registerFormRequest04.valid && this.isAnyFieldFilled04()) {
     (this.registerFormRequest04.controls.effDate.value == '' || this.registerFormRequest04.controls.effDate.value == null)? this.registerFormRequest04.controls.effDate.setValue(employee.effDate.toString()): '';


      this.functionalProceduresFacade.ChangeDateOfHire(this.registerFormRequest04.value);
        this.onReset();

    }else {
      this.showNotification('عفواً، الرجاء ادخل بيانات ليتم تحديثها ','');
    }
  }
  onSalaryAdjustment14(): void {
    const employee = this.functionalProceduresFacade.EmployeeSubject$.getValue() ;
    if (employee != null) {
      this.registerFormRequest14.controls.employeeId.setValue(employee.id);
    }
  if (this.registerFormRequest14.valid && this.isAnyFieldFilled14()) {
     (this.registerFormRequest14.controls.effDate.value == '' || this.registerFormRequest14.controls.effDate.value == null)? this.registerFormRequest14.controls.effDate.setValue(employee.effDate): '';
     (this.registerFormRequest14.controls.basicSalary.value == 0 || this.registerFormRequest14.controls.basicSalary.value == null)? this.registerFormRequest14.controls.basicSalary.setValue(employee.basicSalary): '';


      this.functionalProceduresFacade.SalaryAdjustment(this.registerFormRequest14.value);
        this.onReset();

    }else {
      this.showNotification('عفواً، الرجاء ادخل بيانات ليتم تحديثها ','');
    }
  }
  onReHire02(): void {
    const employee = this.functionalProceduresFacade.EmployeeSubject$.getValue() ;
    if (employee != null) {
      this.registerFormRequest02.controls.employeeId.setValue(employee.id);
    }
  if (this.registerFormRequest02.valid && this.isAnyFieldFilled02()) {
     (this.registerFormRequest02.controls.effDate.value == '' || this.registerFormRequest02.controls.effDate.value == null)? this.registerFormRequest02.controls.effDate.setValue(employee.effDate): '';


      this.functionalProceduresFacade.ReHire(this.registerFormRequest02.value);
        this.onReset();

    }else {
      this.showNotification('عفواً، الرجاء ادخل بيانات ليتم تحديثها ','');
    }
  }
  onTerminationOfService111(): void {

    const employee = this.functionalProceduresFacade.EmployeeSubject$.getValue() ;
    if (employee != null) {
      this.registerFormRequest111.controls.employeeId.setValue(employee.id);
    }
    if (this.registerFormRequest111.valid && this.isAnyFieldFilled111()) {
      (this.registerFormRequest111.controls.effDate.value == '' || this.registerFormRequest111.controls.effDate.value == null)? this.registerFormRequest111.controls.effDate.setValue(employee.effDate.toString()): '';

      this.functionalProceduresFacade.terminationOfService(this.registerFormRequest111.value);
      this.onReset();

    }else {
      if(this.registerFormRequest111.controls.procedureCode.invalid ){
        this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء اختر نوع الاجراء  ', ['']);
        return;
      }
      else  if(this.registerFormRequest111.controls.effDate.invalid ){
        this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء ادخال تاريخ الاجراء  ', ['']);
        return;
      }
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
      (controls.effDate.value)
    );
  }
  isAnyFieldFilled111() {
    const controls = this.registerFormRequest111.controls;
    return (
      (controls.procedureCode.value !== 0) ||
      (controls.effDate.value)
    );
  }
  isAnyFieldFilled04() {
    const controls = this.registerFormRequest04.controls;
    return (
      (controls.HireDate.value)||
      (controls.effDate.value)
    );
  }
  isAnyFieldFilled14() {
    const controls = this.registerFormRequest14.controls;
    return (
      (controls.basicSalary.value != 0 && controls.basicSalary.value != null) ||
      (controls.effDate.value)
    );
  }
  isAnyFieldFilled02() {
    const controls = this.registerFormRequest02.controls;
    return (
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
  addNote04(): void {
    // if(this.secondFormGroup.value.socialStatus == 3){
    const NoteArray = this.registerFormRequest04.get('Notes') as FormArray;
    if(NoteArray.length == 0) {
      NoteArray.push(this.createNote());
    }
  }
  addNote14(): void {
    // if(this.secondFormGroup.value.socialStatus == 3){
    const NoteArray = this.registerFormRequest14.get('Notes') as FormArray;
    if(NoteArray.length == 0) {
      NoteArray.push(this.createNote());
    }
  }
  addNote02(): void {
    // if(this.secondFormGroup.value.socialStatus == 3){
    const NoteArray = this.registerFormRequest02.get('Notes') as FormArray;
    if(NoteArray.length == 0) {
      NoteArray.push(this.createNote());
    }
  }
  addNote111(): void {
    // if(this.secondFormGroup.value.socialStatus == 3){
    const NoteArray = this.registerFormRequest111.get('Notes') as FormArray;
    if(NoteArray.length == 0) {
      NoteArray.push(this.createNote());
    }
  }
  removeNote(index: number) {
    this.Notes.removeAt(index);
  }
  removeNote04(index: number) {
    this.Notes04.removeAt(index);
  }
  removeNote14(index: number) {
    this.Notes14.removeAt(index);
  }
  removeNote02(index: number) {
    this.Notes02.removeAt(index);
  }
  removeNote111(index: number) {
    this.Notes111.removeAt(index);
  }
  get Notes(): FormArray {
    return this.registerFormRequest04.get('Notes') as FormArray;
  }
  get Notes04(): FormArray {
    return this.registerFormRequest04.get('Notes') as FormArray;
  }
  get Notes14(): FormArray {
    return this.registerFormRequest14.get('Notes') as FormArray;
  }
  get Notes02(): FormArray {
    return this.registerFormRequest02.get('Notes') as FormArray;
  }
  get Notes111(): FormArray {
    return this.registerFormRequest111.get('Notes') as FormArray;
  }
  getControl(control: AbstractControl, controlName: string): AbstractControl | null {
    return control.get(controlName);
  }
  protected readonly Object = Object;
  protected readonly optionsSocialStatus = optionsSocialStatus;
  protected readonly optionsOvertime = optionsOvertime;
  protected readonly optionsPayrollStatus = optionsPayrollStatus;
  protected readonly optionsProcedureCodeTypeEnd = optionsProcedureCodeTypeEnd;
}
