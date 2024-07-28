import { Component } from '@angular/core';
import { MaterialModule } from '../../../../shared/material.module';
import { RouterOutlet } from '@angular/router';
import { Location, NgClass } from '@angular/common';
import { AppConfig } from '../../../../../config/app-config';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  navCollapsed: any;
  navCollapsedMob: boolean;
  windowWidth: number;

  constructor(private location: Location, private appConfig: AppConfig) {
    let current_url = this.location.path();
    if (this.location['_baseHref']) {
      current_url = this.location['_baseHref'] + this.location.path();
    }

    this.windowWidth = window.innerWidth;
    this.navCollapsed = this.windowWidth >= 992 ? this.appConfig.isCollapseMenu : false;
    this.navCollapsedMob = false;
  }

  navMobClick() {
    if (this.navCollapsedMob && !document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open')) {
      this.navCollapsedMob = !this.navCollapsedMob;
      setTimeout(() => {
        this.navCollapsedMob = !this.navCollapsedMob;
      }, 100);
    } else {
      this.navCollapsedMob = !this.navCollapsedMob;
    }
  }

  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.closeMenu();
    }
  }

  closeMenu() {
    if (document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open')) {
      document.querySelector('app-navigation.pcoded-navbar')?.classList.remove('mob-open');
    }
  }
}
