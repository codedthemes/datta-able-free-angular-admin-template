import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CoreFacade } from '../../core.facade';

@Component({
  selector: 'app-auth-signin',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export default class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    UserName: ['', [Validators.required]],
    Password: ['', Validators.required]
  });
  userNameErrorMessage = '';
  passwordErrorMessage = '';

  visibility_off = true;

  private validationMessages: { [char: string]: string } = {
    required: 'الرجاء ادخال  قيمة',
    email: 'البريد الالكتروني غير صحيح'
  };


  constructor(private fb: FormBuilder,
              private coreFacade: CoreFacade
              // public SharedFacade: SharedFacade,
  ) {
  }

  ngOnInit(): void {
    // this.SharedFacade.messages$.subscribe(res =>{

    //   console.log('بيانات تجربة');
    //   console.log(res);
    // });
    const emailControl = this.loginForm.get('UserName');
    const passwordControl = this.loginForm.get('Password');

    emailControl?.valueChanges.subscribe(
      value => this.setMessage(emailControl)
    );

    passwordControl?.valueChanges.subscribe(
      value => {
        this.passwordErrorMessage = '';
        if ((passwordControl.touched || passwordControl.dirty) && passwordControl.errors) {
          this.passwordErrorMessage = Object.keys(passwordControl.errors).map(
            key => this.validationMessages[key]).join(' ');
        }
      }
    );
  }

  // forgotPass() {
  //   this.router.navigate([Pages.ForgotPassword]);
  // }

  onSubmit(): void {
    console.log('this.loginForm');
    console.log(this.loginForm);
    console.log(this.loginForm.valid);
    if (this.loginForm.valid) {
      this.coreFacade.login(this.loginForm?.value);
    } else {
    }
  }

  getErrorMessage() {
    if (this.loginForm.controls.UserName.hasError('required')) {
      return 'You must enter a value';
    }

    return this.loginForm.controls.UserName.hasError('email') ? 'Not a valid email' : '';
  }

  setMessage(c: AbstractControl): void {
    this.userNameErrorMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.userNameErrorMessage = Object.keys(c.errors).map(
        key => this.validationMessages[key]).join(' ');
    }
  }

  visibilityOffToggle() {
    this.visibility_off = !this.visibility_off;
  }

}
