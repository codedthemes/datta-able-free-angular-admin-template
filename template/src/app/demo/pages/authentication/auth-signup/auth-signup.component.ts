import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-auth-signup',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.scss'],
})
export default class AuthSignupComponent {}
