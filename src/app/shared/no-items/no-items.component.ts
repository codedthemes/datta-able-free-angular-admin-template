import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-no-items',
  templateUrl: './no-items.component.html',
  styleUrl: './no-items.component.scss'
})
export class NoItemsComponent {

  @Input() title!: string;
  @Input() description!: string;
  @Input() buttonTitle!: string;
  @Input() buttonHandler!: (e: Event) => void;
}
