import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-basic-button',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './basic-button.component.html',
  styleUrls: ['./basic-button.component.scss'],
})
export default class BasicButtonComponent {}
