import {Component, NgZone, OnInit, ViewEncapsulation} from '@angular/core';
import {NextConfig} from '../../../../app-config';
import {Location} from '@angular/common';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ConfigurationComponent implements OnInit {
  public styleSelectorToggle: boolean; // open configuration menu
  public layoutType: string; // layout type
  public rtlLayout: any; // rtl type
  public menuFixedLayout: any; // menu/navbar fixed flag
  public headerFixedLayout: any; // header fixed flag
  public boxLayout: any; // box layout flag
  public headerBackgroundColor: string; // header background color

  public headerBackColor: string;

  public nextConfig: any;
  public isConfig: boolean;

  scroll = (): void => {
    if (this.headerFixedLayout === false) {
      (document.querySelector('#nav-ps-next') as HTMLElement).style.maxHeight = 'calc(100vh)';
      const el = document.querySelector('.pcoded-navbar.menupos-fixed') as HTMLElement;
      const scrollPosition = window.pageYOffset;
      if (scrollPosition > 60) {
        el.style.position = 'fixed';
        el.style.transition = 'none';
        el.style.marginTop = '0';
      } else {
        el.style.position = 'absolute';
        el.style.marginTop = '60px';
      }
    } else if (document.querySelector('.pcoded-navbar').hasAttribute('style')) {
      document.querySelector('.pcoded-navbar.menupos-fixed').removeAttribute('style');
    }
  }

  constructor(private zone: NgZone, private location: Location) {
    this.nextConfig = NextConfig.config;
    this.setThemeLayout();
  }

  ngOnInit() {
    this.styleSelectorToggle = false;

    this.layoutType =  this.nextConfig.layoutType;
    this.setLayout(this.layoutType);

    this.headerBackgroundColor = this.nextConfig.headerBackColor;
    this.setHeaderBackground(this.headerBackgroundColor);

    this.rtlLayout = this.nextConfig.rtlLayout;
    this.changeRtlLayout(this.rtlLayout);

    this.menuFixedLayout = this.nextConfig.navFixedLayout;
    if (this.nextConfig.layout === 'vertical') {
      this.changeMenuFixedLayout(this.menuFixedLayout);
    }

    this.headerFixedLayout = this.nextConfig.headerFixedLayout;
    this.changeHeaderFixedLayout(this.headerFixedLayout);

    this.boxLayout = this.nextConfig.boxLayout;
    this.changeBoxLayout(this.boxLayout);
  }

  setThemeLayout() {
    let currentURL = this.location.path();
    const baseHref = this.location['_baseHref'];
    if (baseHref) {
      currentURL = baseHref + this.location.path();
    }

    switch (currentURL) {
      case baseHref + '/layout/static':
        this.nextConfig.layout = 'vertical';
        this.nextConfig.navFixedLayout = false;
        this.nextConfig.headerFixedLayout = false;
        break;
      case baseHref + '/layout/fixed':
        this.nextConfig.layout = 'vertical';
        this.nextConfig.navFixedLayout = true;
        this.nextConfig.headerFixedLayout = true;
        break;
      case baseHref + '/layout/nav-fixed':
        this.nextConfig.layout = 'vertical';
        this.nextConfig.navFixedLayout = true;
        this.nextConfig.headerFixedLayout = false;
        break;
      case baseHref + '/layout/collapse-menu':
        this.nextConfig.layout = 'vertical';
        this.nextConfig.collapseMenu = true;
        break;
      case baseHref + '/layout/vertical-rtl':
        this.nextConfig.layout = 'vertical';
        this.nextConfig.rtlLayout = true;
        break;
      case baseHref + '/layout/horizontal':
        this.nextConfig.layout = 'horizontal';
        this.nextConfig.navFixedLayout = false;
        this.nextConfig.headerFixedLayout = false;
        this.nextConfig.collapseMenu = false;
        break;
      case baseHref + '/layout/horizontal-l2':
        this.nextConfig.layout = 'horizontal';
        this.nextConfig.subLayout = 'horizontal-2';
        this.nextConfig.navFixedLayout = false;
        this.nextConfig.headerFixedLayout = false;
        this.nextConfig.collapseMenu = false;
        break;
      case baseHref + '/layout/horizontal-rtl':
        this.nextConfig.layout = 'horizontal';
        this.nextConfig.subLayout = 'horizontal-2';
        this.nextConfig.navFixedLayout = false;
        this.nextConfig.headerFixedLayout = false;
        this.nextConfig.rtlLayout = true;
        this.nextConfig.collapseMenu = false;
        break;
      case baseHref + '/layout/box':
        this.nextConfig.layout = 'vertical';
        this.nextConfig.boxLayout = true;
        this.nextConfig.navFixedLayout = true;
        this.nextConfig.headerFixedLayout = false;
        this.nextConfig.collapseMenu = true;
        break;
      case baseHref + '/layout/light':
        this.nextConfig.layout = 'vertical';
        this.nextConfig.layoutType = 'menu-light';
        this.nextConfig.headerBackColor = 'background-blue';
        break;
      case baseHref + '/layout/dark':
        this.nextConfig.layout = 'vertical';
        this.nextConfig.layoutType = 'dark';
        this.nextConfig.headerBackColor = 'background-blue';
        break;
      default:
        break;
    }
  }

  setHeaderBackColor(color) {
    this.headerBackColor = color;
    (document.querySelector('body') as HTMLElement).style.background = color;
  }

  // change main layout
  setLayout(layout) {
    this.isConfig = true;
    document.querySelector('.pcoded-navbar').classList.remove('menu-light');
    document.querySelector('.pcoded-navbar').classList.remove('menu-dark');
    document.querySelector('body').classList.remove('able-pro-dark');

    this.layoutType = layout;
    if (layout === 'menu-light') {
      document.querySelector('.pcoded-navbar').classList.add(layout);
      this.setHeaderBackground('background-blue');
    }
    if (layout === 'dark') {
      this.setHeaderBackground('background-blue');
      document.querySelector('body').classList.add('able-pro-dark');
    }
    if (layout === 'reset') {
      this.reset();
    }
  }

  reset() {
    this.ngOnInit();
  }

  setRtlLayout(e) {
    const flag = !!(e.target.checked);
    this.changeRtlLayout(flag);
  }

  changeRtlLayout(flag) {
    if (flag) {
      document.querySelector('body').classList.add('able-pro-rtl');
    } else {
      document.querySelector('body').classList.remove('able-pro-rtl');
    }
  }

  setMenuFixedLayout(e) {
    const flag = !!(e.target.checked);
    this.changeMenuFixedLayout(flag);
  }

  changeMenuFixedLayout(flag) {
    setTimeout(() => {
      if (flag) {
        document.querySelector('.pcoded-navbar').classList.remove('menupos-static');
        document.querySelector('.pcoded-navbar').classList.add('menupos-fixed');
        if (this.nextConfig.layout === 'vertical') {
          (document.querySelector('#nav-ps-next') as HTMLElement).style.maxHeight = 'calc(100vh - 60px)'; // calc(100vh - 70px) amit
        }
        window.addEventListener('scroll', this.scroll, true);
        window.scrollTo(0, 0);
      } else {
        document.querySelector('.pcoded-navbar').classList.add('menupos-static');
        document.querySelector('.pcoded-navbar').classList.remove('menupos-fixed');
        if (this.nextConfig.layout === 'vertical') {
          (document.querySelector('#nav-ps-next') as HTMLElement).style.maxHeight = 'calc(100%)'; // calc(100% - 70px) amit
        }
        if (this.nextConfig.layout === 'vertical') {
          window.removeEventListener('scroll', this.scroll, true);
        }

      }
    }, 100);
  }

  setHeaderFixedLayout(e) {
    const flag = !!(e.target.checked);
    this.changeHeaderFixedLayout(flag);
  }

  changeHeaderFixedLayout(flag) {
    if (flag) {
      document.querySelector('.pcoded-header').classList.add('headerpos-fixed');
    } else {
      document.querySelector('.pcoded-header').classList.remove('headerpos-fixed');
      // static
      if (this.nextConfig.layout === 'vertical' && this.menuFixedLayout) {
        window.addEventListener('scroll', this.scroll, true);
        window.scrollTo(0, 0);
      } else {
        window.removeEventListener('scroll', this.scroll, true);
      }
    }
  }

  setBoxLayout(e) {
    const flag = !!(e.target.checked);
    this.changeBoxLayout(flag);
  }

  changeBoxLayout(flag) {
    if (flag) {
      document.querySelector('body').classList.add('container');
      document.querySelector('body').classList.add('box-layout');
    } else {
      document.querySelector('body').classList.remove('box-layout');
      document.querySelector('body').classList.remove('container');
    }
  }

  setHeaderBackground(background) {
    this.headerBackgroundColor = background;
    document.querySelector('body').classList.remove('background-blue');
    document.querySelector('body').classList.remove('background-red');
    document.querySelector('body').classList.remove('background-purple');
    document.querySelector('body').classList.remove('background-info');
    document.querySelector('body').classList.remove('background-green');
    document.querySelector('body').classList.remove('background-dark');
    document.querySelector('body').classList.remove('background-grd-blue');
    document.querySelector('body').classList.remove('background-grd-red');
    document.querySelector('body').classList.remove('background-grd-purple');
    document.querySelector('body').classList.remove('background-grd-info');
    document.querySelector('body').classList.remove('background-grd-green');
    document.querySelector('body').classList.remove('background-grd-dark');
    document.querySelector('body').classList.remove('background-img-1');
    document.querySelector('body').classList.remove('background-img-2');
    document.querySelector('body').classList.remove('background-img-3');
    document.querySelector('body').classList.remove('background-img-4');
    document.querySelector('body').classList.remove('background-img-5');
    document.querySelector('body').classList.remove('background-img-6');

    document.querySelector('body').classList.add(background);
  }

}
