
import { SharedModule } from '../../../../theme/shared/shared.module';
import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-bank-branches',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './bank-branches.component.html',
  styleUrls: ['./bank-branches.component.scss']
})


export default class BankBranchesComponent {}
// export class BankBranchesComponent implements OnInit {
//   edit: boolean = false;
//   registerForm = this.fb.group({
//     id: [''],
//     name: ['', Validators.required],
//     prefix: ['', Validators.required],
//     bankId: ['', Validators.required],
//     bankClasscificationId: ['', Validators.required],
//   });
//   registerFormSearch = this.fb.group({
//     bankId: ['', Validators.required],
//     classcificationId: ['', Validators.required],
//   });
//   constructor(  private fb: FormBuilder,
//                 protected bankBranchesFacade: BankBranchesFacade,
//                 protected banksFacade: BanksFacade,
//                 protected classificationBankBranchesFacade: ClassificationBankBranchesFacade,
//                 private cdr: ChangeDetectorRef) {
//     this.getBanks();
//     this.getClassificationBank();
//     this.onSubmit();
//
//   }
//   ngOnInit() {
//     this.edit = false;
//   }
//   onSubmit(): void {
//     this.registerForm.controls.id.setValue('');
//     this.bankBranchesFacade.GetBranch('','');
//   }
//   onSearch(): void {
//     this.registerForm.controls.id.setValue('');
//     this.bankBranchesFacade.GetBranch(this.registerFormSearch.value.bankId,this.registerFormSearch.value.classcificationId);
//   }
//   getBanks(): void {
//     this.banksFacade.GetBanks();
//   }
//   getClassificationBank(): void {
//     this.classificationBankBranchesFacade.GetClassificationBranch();
//  }
//   onDelete(Id: string): void {
//     this.edit = false;
//     this.bankBranchesFacade.deleteBranch(Id);
//     this.registerForm.reset();
//   }
//   onReset(): void {
//     this.edit = false;
//     this.registerForm.reset();
//     this.registerForm.setErrors(null);
//     this.registerFormSearch.reset();
//     this.registerFormSearch.setErrors(null);
//   }
//   onAdd(): void {
//     if (this.registerForm.valid) {
//       if(this.edit) {
//         this.bankBranchesFacade.UpdateBranch(this.registerForm?.value);
//         this.onReset();
//       }else{
//         this.bankBranchesFacade.AddBranch(this.registerForm?.value);
//         this.onReset();
//
//       }
//     }
//   }
//   onEdit(branch: any): void {
//     this.registerForm.patchValue(branch);
//     this.edit = true;
//   }
//
//   protected readonly optionsBooleanGeneral = optionsBooleanGeneral;
// }
