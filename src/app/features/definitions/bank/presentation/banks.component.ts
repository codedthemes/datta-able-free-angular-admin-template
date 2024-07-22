import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BanksFacade } from '../banks.facade';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.scss']
})


// export default class BanksComponent {}
export default class BanksComponent implements OnInit {
  edit: boolean = false;

  registerForm = this.fb.group({
    id: [''],
    name: ['', Validators.required]
  });

  constructor(private fb: FormBuilder,
              protected banksFacade: BanksFacade,
              private cdr: ChangeDetectorRef) {
    this.onSubmit();

  }

  ngOnInit() {
    this.edit = false;
  }

  onSubmit(): void {
    this.registerForm.controls.id.setValue('');
    this.banksFacade.GetBanks();
  }

  onDelete(Id: string): void {
    this.edit = false;
    this.banksFacade.deleteBank(Id);
    this.registerForm.reset();
  }

  onReset(): void {
    this.edit = false;
    this.registerForm.reset();
    this.registerForm.setErrors(null);
  }

  onAdd(): void {
    if (this.registerForm.valid) {
      if (this.edit) {
        this.banksFacade.UpdateBank(this.registerForm?.value);
        this.onReset();
      } else {
        this.banksFacade.AddBank(this.registerForm?.value);
        this.onReset();

      }
    }
  }

  onEdit(bank: any): void {
    this.registerForm.patchValue(bank);
    this.edit = true;
  }

}
