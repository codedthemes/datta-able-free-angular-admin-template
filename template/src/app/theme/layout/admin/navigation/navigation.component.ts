import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DattaConfig} from '../../../../app-config';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Output() onNavCollapse = new EventEmitter();
  @Output() onNavCollapsedMob = new EventEmitter();
  public dattaConfig: any;
  public navCollapsed;
  public navCollapsedMob;
  public windowWidth: number;

  constructor() {
    this.dattaConfig = DattaConfig.config;
    this.windowWidth = window.innerWidth;
    this.navCollapsed = (this.windowWidth >= 992) ? this.dattaConfig['collapse-menu'] : false;
    this.navCollapsedMob = false;
  }

  ngOnInit() {
  }

  navCollapse() {
    if (this.windowWidth >= 992) {
      this.navCollapsed = !this.navCollapsed;
      this.onNavCollapse.emit();
    }
  }

  navCollapseMob() {
    if (this.windowWidth < 992) {
      this.onNavCollapsedMob.emit();
    }
  }
}
