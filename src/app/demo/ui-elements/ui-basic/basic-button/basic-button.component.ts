import { Component } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-basic-button',
  imports: [SharedModule],
  templateUrl: './basic-button.component.html',
  styleUrls: ['./basic-button.component.scss']
})
export class BasicButtonComponent {}
