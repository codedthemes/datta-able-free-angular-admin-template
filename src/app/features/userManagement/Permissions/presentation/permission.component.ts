import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {PermissionFacade} from "../permission.facade";
import {MessageType} from "../../../../shared/shared.interfaces";
import {SharedFacade} from "../../../../shared/shared.facade";
import { async, Subscription } from 'rxjs';
import { Permission } from '../permission.interface';
@Component({
  selector: 'app-evaluations-types',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.scss'],

})

export class PermissionComponent implements OnInit ,OnDestroy{
  edit: boolean = false;
  selectedPermissionIds: string[] = [];
  registerForm = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    permissions: [this.selectedPermissionIds , Validators.required],
  });
  // permissionsData: any;
  permissionsData: {} = {};
  private subscription: Subscription;
  constructor(  private fb: FormBuilder,
                protected permissionFacade: PermissionFacade,
                private sharedFacade: SharedFacade,
                private cdr: ChangeDetectorRef) {


  }
  ngOnInit() {
    this.onSubmit();
    this.edit = false;
    this.subscription = this.permissionFacade.permission$.subscribe((data: Permission) => {
      this.permissionsData = data;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  // isSelected(permissionId: string): boolean {
  //   return this.selectedPermissionIds.includes(permissionId);
  // }
  // onCheckboxChange(event: any, permissionId: string) {
  //   if (event.checked) {
  //     this.selectedPermissionIds.push(permissionId);
  //   } else {
  //     const index = this.selectedPermissionIds.indexOf(permissionId);
  //     if (index !== -1) {
  //       this.selectedPermissionIds.splice(index, 1);
  //     }
  //   }
  //   this.registerForm.controls.permissions.setValue(this.selectedPermissionIds);
  // }

  onSubmit(): void {
    this.registerForm.controls.id.setValue('');
    this.permissionFacade.GetAllGroup();
    this.permissionFacade.GetAllPermission();
  //  this.permissionsData  = this.permissionFacade.permissionSubject$.getValue() ;
  }
  onDelete(Id: string): void {
    this.edit = false;
    this.selectedPermissionIds = [];
    this.permissionFacade.deleteGroup(Id);
    this.registerForm.reset();
  }
  onReset(): void {
    this.edit = false;
    this.selectedPermissionIds = [];
    this.registerForm.reset();
    this.registerForm.setErrors(null);
  }
  onAdd(): void {
    if(this.registerForm.value.permissions?.length  == 0 || this.selectedPermissionIds.length  == 0){
      this.sharedFacade.showMessage(MessageType.warning, 'اضافة مجموعة', ['رجاء اختيار صلاحية للمجموعة']);
return;
    }
     if (this.registerForm.valid) {
      if(this.edit) {
        this.permissionFacade.UpdateGroup(this.registerForm?.value);
        this.onReset();
        return;
      }else{
        this.permissionFacade.AddGroup(this.registerForm?.value);
        this.onReset();
        return;

      }

    } else {
       this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء ادخال اسم المجموعة', ['']);

     }

  }
  isSelected(permissionId: string): boolean {
    return this.selectedPermissionIds.includes(permissionId);
  }

  onCheckboxChange(event: any, permissionId: string) {
    if (event.target.checked) {
      this.selectedPermissionIds.push(permissionId);
    } else {
      const index = this.selectedPermissionIds.indexOf(permissionId);
      if (index !== -1) {
        this.selectedPermissionIds.splice(index, 1);
      }
    }
    this.registerForm.controls.permissions.setValue(this.selectedPermissionIds);
  }

  onSelectAll(event: any) {
    if (event.target.checked) {
      // Collect all permission IDs
      const allPermissionIds = Object.values(this.permissionsData)
        .flat()
        .map((permission: Permission) => permission.id);
      this.selectedPermissionIds = allPermissionIds;
    } else {
      this.selectedPermissionIds = [];
    }
    this.registerForm.controls.permissions.setValue(this.selectedPermissionIds);
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
    this.registerForm.controls.permissions.setValue(this.selectedPermissionIds);
    this.edit = true;
  }
  protected readonly Object = Object;
}
