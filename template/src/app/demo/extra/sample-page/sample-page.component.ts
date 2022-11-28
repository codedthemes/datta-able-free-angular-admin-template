import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-sample-page',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.scss'],
})
export default class SamplePageComponent {}
