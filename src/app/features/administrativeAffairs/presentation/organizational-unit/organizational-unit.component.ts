import { Component } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-organizational-unit',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './organizational-unit.component.html',
  styleUrls: ['./organizational-unit.component.scss']
})


export default class OrganizationalUnitComponent {}
// export class JobTitleComponent implements OnInit {
//   edit: boolean = false;
//   selectedPermissionIds: string[] = [];
//   registerForm = this.fb.group({
//     id: [''],
//     name: ['', Validators.required],
//     permissions: [this.selectedPermissionIds , Validators.required],
//   });
//   // permissionsData: any;
//
//   constructor(  private fb: FormBuilder,
//                 protected permissionFacade: PermissionFacade,
//                 private sharedFacade: SharedFacade,
//                 private cdr: ChangeDetectorRef) {
//
//
//   }
//   ngOnInit() {
//     this.onSubmit();
//     this.edit = false;
//   }
//   isSelected(permissionId: string): boolean {
//     return this.selectedPermissionIds.includes(permissionId);
//   }
//   onCheckboxChange(event: any, permissionId: string) {
//     if (event.checked) {
//       this.selectedPermissionIds.push(permissionId);
//     } else {
//       const index = this.selectedPermissionIds.indexOf(permissionId);
//       if (index !== -1) {
//         this.selectedPermissionIds.splice(index, 1);
//       }
//     }
//     this.registerForm.controls.permissions.setValue(this.selectedPermissionIds);
//   }
//
//   onSubmit(): void {
//     this.registerForm.controls.id.setValue('');
//     this.permissionFacade.GetAllGroup();
//     this.permissionFacade.GetAllPermission();
//   //  this.permissionsData  = this.permissionFacade.permissionSubject$.getValue() ;
//   }
//   onDelete(Id: string): void {
//     this.edit = false;
//     this.selectedPermissionIds = [];
//     this.permissionFacade.deleteGroup(Id);
//     this.registerForm.reset();
//   }
//   onReset(): void {
//     this.edit = false;
//     this.selectedPermissionIds = [];
//     this.registerForm.reset();
//     this.registerForm.setErrors(null);
//   }
//   onAdd(): void {
//     if(this.registerForm.value.permissions?.length  == 0 || this.selectedPermissionIds.length  == 0){
//       this.sharedFacade.showMessage(MessageType.error, 'اضافة مجموعة', ['رجاء اختيار صلاحية للمجموعة']);
// return;
//     }
//      if (this.registerForm.valid) {
//       if(this.edit) {
//         this.permissionFacade.UpdateGroup(this.registerForm?.value);
//         this.onReset();
//         return;
//       }else{
//         this.permissionFacade.AddGroup(this.registerForm?.value);
//         this.onReset();
//         return;
//
//       }
//
//     }
//
//   }
//   onEdit(group: any): void {
//     this.selectedPermissionIds =  [];
//     Object.keys(group.permissions).forEach(key => {
//       group.permissions[key].forEach((item: { id: string; }) => {
//         this.selectedPermissionIds.push(item.id);
//       });
//     });
//     // group.permissions.push(this.selectedPermissionIds)
//     this.registerForm.patchValue(group);
//     this.edit = true;
//   }
//   protected readonly Object = Object;
// }
