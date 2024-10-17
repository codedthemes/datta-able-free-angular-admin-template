import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageType } from '../../../../shared/shared.interfaces';
import { SharedFacade } from '../../../../shared/shared.facade';
import { EmployeeFacade } from '../../employee/employee.facade';
import { JobTitleFacade } from '../../job-title/job-title.facade';
import { optionsOvertime, optionsPayrollStatus, optionsPositionStatus, optionsSocialStatus } from '../../../../core/core.interface';
import { SecondmentToOtherPostionFacade } from '../secondmentToOtherPostion.facade';
import { DefinitionPositionFacade } from '../../definition-position/definition-position.facade';

declare var $: any;
@Component({
  selector: 'app-SecondmentToOtherPostion',
  templateUrl: './secondmentToOtherPostion.component.html',
  styleUrls: ['./secondmentToOtherPostion.component.scss']
})



export default class SecondmentToOtherPostionComponent implements OnInit {
  phoneNumberPattern = '[0][9]{1}[1,2,4,3,5]{1}[0-9]{7}';
rest = false;
  patternFloat="^-?\\d*(\\.\\d+)?$";

  constructor( private _formBuilder: FormBuilder,
               protected secondmentToOtherPostionFacade: SecondmentToOtherPostionFacade,
               private sharedFacade: SharedFacade,
               protected employeeFacade: EmployeeFacade,
               protected jobTitleFacade: JobTitleFacade,
               protected definitionPositionFacade: DefinitionPositionFacade,

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
    basicSalary: [0],
    socialStatusSalaries: [-1],
    SecondmentDateStart: ['', Validators.required],
    SecondmentDateEnd: ['', Validators.required],
    overtime: [-1],
    effDate: [''],
    Notes: this._formBuilder.array([]),
  });
  ngOnInit() {
  }

  onSubmit(): void {
    this.registerFormRequest.controls.employeeId.setValue('');
    this.employeeFacade.GetEmployee();
    this.definitionPositionFacade.GetPosition('','');
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
    if (this.registerFormRequest.valid && this.isAnyFieldFilled()) {
        (this.registerFormRequest.controls.SecondmentPositionId.value == '' || this.registerFormRequest.controls.SecondmentPositionId.value == null)? this.registerFormRequest.controls.SecondmentPositionId.setValue(employee.positionId): '';
        (this.registerFormRequest.controls.basicSalary.value == 0 || this.registerFormRequest.controls.basicSalary.value == null)? this.registerFormRequest.controls.basicSalary.setValue(employee.basicSalary): '';
        (this.registerFormRequest.controls.socialStatusSalaries.value == -1 || this.registerFormRequest.controls.socialStatusSalaries.value == null)? this.registerFormRequest.controls.socialStatusSalaries.setValue(employee.socialStatusSalaries): '';
        (this.registerFormRequest.controls.overtime.value == -1 || this.registerFormRequest.controls.overtime.value == null)? this.registerFormRequest.controls.overtime.setValue(employee.overtime): '';
        (this.registerFormRequest.controls.effDate.value == '' || this.registerFormRequest.controls.effDate.value == null)? this.registerFormRequest.controls.effDate.setValue(employee.effDate.toString()): '';

      this.secondmentToOtherPostionFacade.reClassification(this.registerFormRequest.value);
      this.onReset();

    }else {
      if (this.registerFormRequest.value.SecondmentDateStart == '' || this.registerFormRequest.controls.SecondmentDateStart.invalid) {
        this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء ادخال تاريخ بداية الندب', ['']);
        return;
      }  else if (this.registerFormRequest.value.SecondmentDateEnd == '' || this.registerFormRequest.controls.SecondmentDateEnd.invalid) {
        this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء ادخال تاريخ نهاية الندب', ['']);
        return;
      }
      this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء ادخل بيانات ليتم تحديثها', ['']);

    }
  }
  isAnyFieldFilled() {
    const controls = this.registerFormRequest.controls;
    return (
      (controls.SecondmentPositionId.value) ||
      (controls.basicSalary.value !== 0) ||
      (controls.socialStatusSalaries.value) ||
      (controls.overtime.value) ||
      (controls.effDate.value)
    );
  }
  getLabelFormOptions(options: any, item: number): string {
    const option = options.find(opt => opt.value.toString() == item);
    return option ? option.label : '';
  }
  getLabelFormOptionsInt(options: any, item: string): string {
    const option = options.find(opt => opt.value == item);
    return option ? option.label : '';
  }

  onChangeJobTitleId(){
    const job = this.definitionPositionFacade.PositionSubject$.getValue().find(x => x.id.toString() == this.registerFormRequest.value.SecondmentPositionId);
    const positionStatus = this.optionsPositionStatus.find(option => option.value == job.positionStatus);
   if(positionStatus.value != 0) {
     this.sharedFacade.showMessage(MessageType.warning, 'هذه الوظيفة، ' + positionStatus.label, ['']);
     this.registerFormRequest.controls.SecondmentPositionId.setValue('');
    }
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
  protected readonly optionsPayrollStatus = optionsPayrollStatus;
  protected readonly optionsSocialStatus = optionsSocialStatus;
  protected readonly optionsOvertime = optionsOvertime;
  protected readonly optionsPositionStatus = optionsPositionStatus;
}
