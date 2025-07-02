import { Component } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-sample-page',
  imports: [SharedModule],
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.scss']
})
export class SamplePageComponent {}
