// angular import
import { Component } from '@angular/core';
import { Location } from '@angular/common';

// project import
import { DattaConfig } from 'src/app/app-config';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  navCollapsed: any;
  navCollapsedMob: boolean;
  windowWidth: number;

  constructor(private location: Location) {
    let current_url = this.location.path();
    if (this.location['_baseHref']) {
      current_url = this.location['_baseHref'] + this.location.path();
    }

    this.windowWidth = window.innerWidth;
    this.navCollapsed =
      this.windowWidth >= 992 ? DattaConfig.isCollapseMenu : false;
    this.navCollapsedMob = false;
  }

  navMobClick() {
    if (
      this.navCollapsedMob &&
      !document
        .querySelector('app-navigation.pcoded-navbar')
        .classList.contains('mob-open')
    ) {
      this.navCollapsedMob = !this.navCollapsedMob;
      setTimeout(() => {
        this.navCollapsedMob = !this.navCollapsedMob;
      }, 100);
    } else {
      this.navCollapsedMob = !this.navCollapsedMob;
    }
  }
}
