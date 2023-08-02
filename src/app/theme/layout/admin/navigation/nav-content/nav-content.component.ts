import {
  Component,
  ElementRef,
  EventEmitter,
  NgZone,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NavigationItem } from '../navigation';
import { DattaConfig } from 'src/app/app-config';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nav-content',
  templateUrl: './nav-content.component.html',
  styleUrls: ['./nav-content.component.scss'],
})
export class NavContentComponent implements OnInit {
  // version
  title = 'Demo application for version numbering';
  currentApplicationVersion = environment.appVersion;

  @Output() onNavCollapsedMob = new EventEmitter();

  config: any;
  navigation: any;
  contentWidth: number;
  wrapperWidth: any;
  scrollWidth: any;
  windowWidth: number;

  @ViewChild('navbarContent', { static: false }) navbarContent: ElementRef;
  @ViewChild('navbarWrapper', { static: false }) navbarWrapper: ElementRef;

  constructor(
    public nav: NavigationItem,
    private zone: NgZone,
    private location: Location,
  ) {
    this.config = DattaConfig;
    this.windowWidth = window.innerWidth;
    this.navigation = this.nav.get();
    this.scrollWidth = 0;
    this.contentWidth = 0;
  }

  ngOnInit() {
    if (this.windowWidth < 992) {
      this.config['layout'] = 'vertical';
      setTimeout(() => {
        document
          .querySelector('.pcoded-navbar')
          .classList.add('menupos-static');
        (
          document.querySelector('#nav-ps-datta') as HTMLElement
        ).style.maxHeight = '100%';
      }, 500);
    }
  }

  navMob() {
    if (
      this.windowWidth < 992 &&
      document
        .querySelector('app-navigation.pcoded-navbar')
        .classList.contains('mob-open')
    ) {
      this.onNavCollapsedMob.emit();
    }
  }

  fireOutClick() {
    let current_url = this.location.path();
    if (this.location['_baseHref']) {
      current_url = this.location['_baseHref'] + this.location.path();
    }
    const link = "a.nav-link[ href='" + current_url + "' ]";
    const ele = document.querySelector(link);
    if (ele !== null && ele !== undefined) {
      const parent = ele.parentElement;
      const up_parent = parent.parentElement.parentElement;
      const last_parent = up_parent.parentElement;
      if (parent.classList.contains('pcoded-hasmenu')) {
        if (DattaConfig.layout === 'vertical') {
          parent.classList.add('pcoded-trigger');
        }
        parent.classList.add('active');
      } else if (up_parent.classList.contains('pcoded-hasmenu')) {
        if (DattaConfig.layout === 'vertical') {
          up_parent.classList.add('pcoded-trigger');
        }
        up_parent.classList.add('active');
      } else if (last_parent.classList.contains('pcoded-hasmenu')) {
        if (DattaConfig.layout === 'vertical') {
          last_parent.classList.add('pcoded-trigger');
        }
        last_parent.classList.add('active');
      }
    }
  }
}
