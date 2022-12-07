import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nav-logo',
  templateUrl: './nav-logo.component.html',
  styleUrls: ['./nav-logo.component.scss'],
})
export class NavLogoComponent {
  @Input() navCollapsed: boolean;
  @Output() onNavCollapse = new EventEmitter();
  windowWidth: number;

  constructor() {
    this.windowWidth = window.innerWidth;
  }

  navCollapse() {
    if (this.windowWidth >= 992) {
      this.navCollapsed = !this.navCollapsed;
      this.onNavCollapse.emit();
    }
  }
}
