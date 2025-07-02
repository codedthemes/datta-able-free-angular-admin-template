// angular import
import { Component } from '@angular/core';

// project import
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-form-element',
  imports: [SharedModule, NgbDropdownModule],
  templateUrl: './form-element.html',
  styleUrl: './form-element.scss'
})
export class FormElement {}
