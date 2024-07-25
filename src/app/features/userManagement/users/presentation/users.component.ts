import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { optionsBooleanGeneral, optionsJobClassification } from '../../../../core/core.interface';
import { UsersFacade } from '../users.facade';
import { EmployeeFacade } from '../../../administrativeAffairs/employee/employee.facade';
import { PermissionFacade } from '../../Permissions/permission.facade';

declare var $: any;

@Component({
  selector: 'app-rewards-types',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  edit: boolean = false;

  registerForm = this.fb.group({
    id: [''],
    employeeId: [null],
    employeeName: [''],
    roleName: [''],
    name: ['', Validators.required],
    userName: ['', Validators.required],
    roleId: ['', Validators.required],
    password: [null, [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(16),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,16}$/)
    ]],
    // password: [''],
    confirmPassword: ['', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(16),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,16}$/)
    ]],

    isActive: [false],
    changePassword: [true]
  });


  constructor(private fb: FormBuilder,
              protected usersFacade: UsersFacade,
              protected employeeFacade: EmployeeFacade,
              protected permissionFacade: PermissionFacade,
              private cdr: ChangeDetectorRef) {
    this.onSubmit();
    this.employeeFacade.GetEmployee();
    this.permissionFacade.GetGroupsMenu();
  }

  get f() {
    return this.registerForm.controls;
  }

  changePass() {

    if (this.registerForm.value.changePassword) {
      this.registerForm.controls.password.setValidators([
        Validators.minLength(6),
        Validators.maxLength(16),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,16}$/)
      ]);
      this.registerForm.controls.confirmPassword.setValidators([
        Validators.minLength(6),
        Validators.maxLength(16),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,16}$/)
      ]);
    } else {
      this.registerForm.controls.password.clearValidators();
      this.registerForm.controls.confirmPassword.clearValidators();
    }
  }

  ngOnInit() {
    this.edit = false;

  }

  onSubmit(): void {
    this.usersFacade.GetUser();
  }

  onDelete(Id: string): void {
    this.edit = false;
    this.usersFacade.deleteUser(Id);
    this.registerForm.reset();
  }

  onReset(): void {
    this.edit = false;
    this.registerForm.reset();
    this.registerForm.setErrors(null);
  }

  onAdd(): void {
    const optionEmployee = this.employeeFacade.employeeSubject$.getValue().find(x => x.id == this.registerForm.value.employeeId);
    const optionGroup = this.permissionFacade.GroupsMenuSubject$.getValue().find((x: {
      id: string | null | undefined;
    }) => x.id == this.registerForm.value.roleId);
    this.registerForm.value.roleName =  this.registerForm.value.roleId != ''?   optionGroup.name : '';
    this.registerForm.value.employeeName =  this.registerForm.value.employeeId != '' && this.registerForm.value.employeeId != null ?   optionEmployee.name: '';

    if (this.registerForm.valid) {
      if (this.edit) {
        this.usersFacade.UpdateUser(this.registerForm?.value);
        this.onReset();
      } else {
        this.usersFacade.AddUser(this.registerForm?.value);
        this.onReset();

      }
    }
  }

  onEdit(jobTitle: any): void {
    this.registerForm.patchValue(jobTitle);
    this.registerForm.controls.password.clearValidators();
    this.registerForm.controls.confirmPassword.clearValidators();
    this.registerForm.controls.password.setValue(null);
    this.registerForm.controls.confirmPassword.setValue('');
    this.registerForm.controls.changePassword.setValue(false);
    this.edit = true;
  }


}
