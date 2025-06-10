import { Component } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-basic-typography',
  imports: [SharedModule],
  templateUrl: './basic-typography.component.html',
  styleUrls: ['./basic-typography.component.scss']
})
export class BasicTypographyComponent {}
