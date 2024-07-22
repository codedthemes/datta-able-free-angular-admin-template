import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-toggle-input',
  templateUrl: './toggle-input.component.html',
  styleUrl: './toggle-input.component.scss'
})

export class ToggleInputComponent {
  @Input() data!: { label: string, id: string };
  @Input() value: boolean = false;
  @Input() maxWidth:string = '230px';
  @Input() callback!: (id: string, label: string) => void;
  
  onChanged() {
    this.value = !this.value;
    this.callback(this.data.id, this.data.label)
  }
}
