import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ClinicsFacade } from '../clinics.facade';
import { MessageType } from '../../../../shared/shared.interfaces';
import { SharedFacade } from '../../../../shared/shared.facade';
import { optionsClinic, optionsFamilyDescription, optionsGenderGeneral } from '../../../../core/core.interface';
import { EmployeeFacade } from '../../employee/employee.facade';
import { DefinitionPositionFacade } from '../../definition-position/definition-position.facade';

declare var $: any;
@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
  styleUrls: ['./clinics.component.scss']
})



export default class ClinicsComponent implements OnInit {
  edit: boolean = false;
  phoneNumberPattern = '[0][9]{1}[1,2,4,3,5]{1}[0-9]{7}';
listFamily=[];

  constructor( private _formBuilder: FormBuilder,
              protected clinicsFacade: ClinicsFacade,
              private sharedFacade: SharedFacade,
              protected employeeFacade: EmployeeFacade,
              protected definitionPositionFacade: DefinitionPositionFacade,
              private cdr: ChangeDetectorRef) {
    this.onSubmit();

  }
  registerForm = this._formBuilder.group({
    employeeId: [''],
    employeeCode: [{ value: '', disabled: true }],
    name: [{ value: '', disabled: true }],
    organizationStructureName: [{ value: '', disabled: true }],
    locationName: [{ value: '', disabled: true }],
    jobTitleName: [{ value: '', disabled: true }],
    clinicId: ['', Validators.required],
    family: [],
  });
  registerFormSearch = this._formBuilder.group({
    value : ['', Validators.required],
    code: [''],
    phoneNumber: ['', [
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern(this.phoneNumberPattern)
    ]],
    employeeName: [''],

  });
  ngOnInit() {
    this.edit = false;
  }

  onSubmit(): void {
    this.registerForm.controls.employeeId.setValue('');
    this.clinicsFacade.GetEmplyeeClinics('-1');
    this.employeeFacade.GetEmployee();
  }
  onSearch(): void {
    if((this.registerFormSearch.value.code == ''||this.registerFormSearch.value.code == null ) && (this.registerFormSearch.value.employeeName == '' || this.registerFormSearch.value.employeeName == null) && (this.registerFormSearch.value.phoneNumber == ''||this.registerFormSearch.value.phoneNumber == null)){
      this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء ادخل بيانات للبحث   ', ['']);
      return;
    }
    else if( this.registerFormSearch.controls.phoneNumber.invalid &&this.registerFormSearch.value.phoneNumber != ''&&this.registerFormSearch.value.phoneNumber != null){
      this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء ادخال  رقم هاتف الموظف بصيغة صحيحة  ', ['']);
      return;
    }

    const text=  this.registerFormSearch.controls.employeeName.value != '' && this.registerFormSearch.controls.employeeName.value != null ? this.registerFormSearch.value.employeeName :this.registerFormSearch.controls.code.value != '' && this.registerFormSearch.controls.code.value != null? this.registerFormSearch.value.code: this.registerFormSearch.value.phoneNumber;
    const searchType=  this.registerFormSearch.controls.employeeName.value != '' && this.registerFormSearch.controls.employeeName.value != null ? '2' :this.registerFormSearch.controls.code.value != '' && this.registerFormSearch.controls.code.value != null? '1': '3';
    // this.clinicsFacade.GetEmployee(searchType,text);
    this.clinicsFacade.GetEmployee(searchType, text).subscribe(employees => {
      this.clinicsFacade.EmployeeSubject$.next(employees);
    });
    this.cdr.detectChanges();

    // Fetch the employee and position information
    const employee = this.clinicsFacade.EmployeeSubject$.getValue();
    if (employee != null) {


      this.registerForm.controls['employeeId'].setValue(employee.id);
      this.definitionPositionFacade.GetPosition(employee.positionCode, '');
      this.registerForm.controls['employeeCode'].setValue(employee.employeeCode);
      this.registerForm.controls['name'].setValue(employee.name);
      this.registerForm.controls['family'].setValue(employee.familyData);
    }

    const position = this.definitionPositionFacade.PositionSubject$.getValue();
    if (position != null) {
      this.registerForm.controls['jobTitleName'].setValue(position[0].jobTitleName);
      this.registerForm.controls['locationName'].setValue(position[0].locationName);
      this.registerForm.controls['organizationStructureName'].setValue(position[0].organizationStructureName);

    }


    // Explicitly trigger change detection again after updating the form controls
    this.cdr.detectChanges();
  }
  getLabelForDescription(description: string): string {
    const option = this.optionsFamilyDescription.find(opt => opt.value.toString() == description);
    return option ? option.label : '';
  }
  onReset(): void {
    this.edit = false;
    this.registerForm.reset();
    this.registerFormSearch.reset();
    this.registerFormSearch.setErrors(null);
    this.registerForm.setErrors(null);
    this.clinicsFacade.ClinicsSubject$.next(null);
    this.clinicsFacade.Clinics$.subscribe();
    this.listFamily = [];
  }
  addFamily(event,item) {
    if (event.target.checked) {
      this.listFamily.push({
        "name": item.name,
        "gender": item.gender,
        "description": item.description,

      })
    } else {
      this.listFamily = this.listFamily.filter((x: any) => x.name != item.name);
    }
  }
  isSelected(item): boolean {
    return this.listFamily.includes((x: any) => x.name == item.name);
    // return true;
  }
  onSelectAll() {
this.listFamily.push(this.clinicsFacade.EmployeeSubject$.getValue().familyData)
  }

  onAdd(): void {
    const employee = this.clinicsFacade.EmployeeSubject$.getValue() ;
    if (employee != null) {
      this.registerForm.controls.employeeId.setValue(employee.id);
    }
    if (this.registerForm.valid) {
      let request={
        employeeId: this.registerForm.value.employeeId,
        clinicId: this.registerForm.value.clinicId,
        family: this.listFamily
      }
        this.clinicsFacade.AddClinic(request);
        this.onReset();

    }else {
      this.showNotification('عفواً، الرجاء اختر المصحة ','');
    }
  }
  showNotification(title, text){
    this.sharedFacade.showMessage(MessageType.warning, title, ['']);
  }

  protected readonly optionsClinic = optionsClinic;
  protected readonly Object = Object;
  protected readonly optionsGenderGeneral = optionsGenderGeneral;
  protected readonly optionsFamilyDescription = optionsFamilyDescription;
}
