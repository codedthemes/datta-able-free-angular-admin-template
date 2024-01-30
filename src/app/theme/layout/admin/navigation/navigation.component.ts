// angular import
import { Component, EventEmitter, Output } from '@angular/core';

// project import
import { DattaConfig } from 'src/app/app-config';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  // public props
  @Output() NavCollapse = new EventEmitter();
  @Output() NavCollapsedMob = new EventEmitter();
  navCollapsed: any;
  navCollapsedMob = false;
  windowWidth = window.innerWidth;

  // constructor
  constructor() {
    this.navCollapsed =
      this.windowWidth >= 992 ? DattaConfig.isCollapseMenu : false;
  }

  // public method
  navCollapse() {
    if (this.windowWidth >= 992) {
      this.navCollapsed = !this.navCollapsed;
      this.NavCollapse.emit();
    }
  }

  navCollapseMob() {
    if (this.windowWidth < 992) {
      this.NavCollapsedMob.emit();
    }
  }
}
