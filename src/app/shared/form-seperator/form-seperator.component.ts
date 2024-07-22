import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-seperator',
  templateUrl: './form-seperator.component.html',
  styleUrl: './form-seperator.component.scss'
})
export class FormSeperatorComponent {
  @Input() title!: string;
}
