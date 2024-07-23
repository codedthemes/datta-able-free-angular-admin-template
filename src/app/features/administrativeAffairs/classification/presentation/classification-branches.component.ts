import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import { ClassificationBranchesFacade } from '../classification-branches.facade';
declare var $: any;
@Component({
  selector: 'app-classification-bankBranches',
  templateUrl: './classification-branches.component.html',
  styleUrl: './classification-branches.component.scss'
})
export class ClassificationBranchesComponent implements OnInit {
  edit: boolean = false;
  registerForm = this.fb.group({
    id: [''],
    name: ['', Validators.required],
  });
  constructor(  private fb: FormBuilder,
                protected classificationBranchesFacade: ClassificationBranchesFacade,
                private cdr: ChangeDetectorRef) {
    this.onSubmit();

  }
  ngOnInit() {
    this.edit = false;
  }
  onSubmit(): void {
    this.registerForm.controls.id.setValue('');
    this.classificationBranchesFacade.GetClassification();
  }
  onDelete(Id: string): void {
    this.edit = false;
    this.classificationBranchesFacade.deleteClassification(Id);
    this.registerForm.reset();
  }
  onReset(): void {
    this.edit = false;
    this.registerForm.reset();
    this.registerForm.setErrors(null);
  }
  onAdd(): void {
    if (this.registerForm.valid) {
      if(this.edit) {
        this.classificationBranchesFacade.UpdateClassification(this.registerForm?.value);
        this.onReset();
      }else{
        this.classificationBranchesFacade.AddClassification(this.registerForm?.value);
        this.onReset();

      }
    }
  }
  onEdit(classBranch: any): void {
    this.registerForm.patchValue(classBranch);
    this.edit = true;
  }

}
