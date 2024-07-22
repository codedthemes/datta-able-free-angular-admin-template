// angular import
import { Component, EventEmitter, Output } from '@angular/core';

// project import
import { AppConfig } from '../../../../../config/app-config';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  // public props
  @Output() NavCollapse = new EventEmitter();
  @Output() NavCollapsedMob = new EventEmitter();
  navCollapsed: any;
  navCollapsedMob = false;
  windowWidth = window.innerWidth;

  // constructor
  constructor( private appConfig: AppConfig) {
    this.navCollapsed = this.windowWidth >= 992 ? this.appConfig.isCollapseMenu : false;
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
