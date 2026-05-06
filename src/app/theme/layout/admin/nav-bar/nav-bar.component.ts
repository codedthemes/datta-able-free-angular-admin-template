// angular import
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NavLeftComponent } from './nav-left/nav-left.component';
import { NavRightComponent } from './nav-right/nav-right.component';

@Component({
  selector: 'app-nav-bar',
  imports: [SharedModule, NavLeftComponent, NavRightComponent, RouterModule, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  // public props
  @Output() readonly NavCollapsedMob = new EventEmitter<boolean>();
  @Input() navCollapsedMob = false;
  headerStyle: string;
  menuClass: boolean;
  collapseStyle: string;

  // constructor
  constructor() {
    this.headerStyle = '';
    this.menuClass = false;
    this.collapseStyle = 'none';
  }

  // public method
  toggleMobOption() {
    this.menuClass = !this.menuClass;
    this.headerStyle = this.menuClass ? 'none' : '';
    this.collapseStyle = this.menuClass ? 'block' : 'none';
  }

  // this is for eslint rule
  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.closeMenu();
    }
  }

  closeMenu() {
    if (document.querySelector('app-navigation.pcoded-navbar')?.classList.contains('mob-open')) {
        document.dispatchEvent(new Event('closeMobMenu'));
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (this.menuClass && !target.closest('#mobile-header') && !target.closest('.navbar-collapse')) {
      this.menuClass = false;
      this.headerStyle = '';
      this.collapseStyle = 'none';
    }
  }
}
