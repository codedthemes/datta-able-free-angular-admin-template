import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SharedFacade } from '../../../../shared/shared.facade';
import { EmployeeFacade } from '../employee.facade';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})


export class EmployeeComponent implements OnInit {
  edit: boolean = false;
  selectedPermissionIds: string[] = [];
  registerForm = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    permissions: [this.selectedPermissionIds , Validators.required],
  });
  // permissionsData: any;

  constructor(
    protected employeeFacade: EmployeeFacade,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef) {

    this.onSubmit();
  }
  ngOnInit() {
    this.edit = false;
  }
  isSelected(permissionId: string): boolean {
    return this.selectedPermissionIds.includes(permissionId);
  }
  onCheckboxChange(event: any, permissionId: string) {
    if (event.checked) {
      this.selectedPermissionIds.push(permissionId);
    } else {
      const index = this.selectedPermissionIds.indexOf(permissionId);
      if (index !== -1) {
        this.selectedPermissionIds.splice(index, 1);
      }
    }
    this.registerForm.controls.permissions.setValue(this.selectedPermissionIds);
  }

  onSubmit(): void {
    this.registerForm.controls.id.setValue('');
 this.employeeFacade.GetEmployee();
  //  this.permissionsData  = this.permissionFacade.permissionSubject$.getValue() ;
  }
  onDelete(Id: string): void {
    this.edit = false;
    this.employeeFacade.deleteEmployee(Id);
    this.registerForm.reset();
  }
  onReset(): void {
    this.edit = false;
    this.registerForm.reset();
    this.registerForm.setErrors(null);
  }
  onAdd(): void {

     if (this.registerForm.valid) {

        this.employeeFacade.UpdateEmployee(this.registerForm?.value);
        this.onReset();
        return;

    }

  }
  onEdit(group: any): void {
    this.selectedPermissionIds =  [];
    Object.keys(group.permissions).forEach(key => {
      group.permissions[key].forEach((item: { id: string; }) => {
        this.selectedPermissionIds.push(item.id);
      });
    });
    // group.permissions.push(this.selectedPermissionIds)
    this.registerForm.patchValue(group);
    this.edit = true;
  }
  protected readonly Object = Object;
}
