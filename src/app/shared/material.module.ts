import { NgModule } from '@angular/core';

import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';
import { NgScrollbar } from 'ngx-scrollbar';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavLeftComponent } from './nav-bar/nav-left/nav-left.component';
import { NavRightComponent } from './nav-bar/nav-right/nav-right.component';
import { NavContentComponent } from './navigation/nav-content/nav-content.component';
import { NavLogoComponent } from './navigation/nav-logo/nav-logo.component';
import { NavCollapseComponent } from './navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavGroupComponent } from './navigation/nav-content/nav-group/nav-group.component';
import { NavItemComponent } from './navigation/nav-content/nav-item/nav-item.component';
import { NavSearchComponent } from './nav-bar/nav-left/nav-search/nav-search.component';
import { ToggleFullScreenDirective } from './components/full-screen/toggle-full-screen';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { NgbDropdown, NgbDropdownMenu, NgbDropdownToggle } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [NavBarComponent,
    NavigationComponent,
    NavLeftComponent,
    NavRightComponent,
    NavContentComponent,
    NavLogoComponent,
    NavCollapseComponent,
    NavGroupComponent,
    NavItemComponent,
    NavSearchComponent,
    ToggleFullScreenDirective,
    BreadcrumbsComponent,
    ConfigurationComponent
  ],
  imports: [
    RouterLink,
    NgClass,
    RouterLinkActive,
    NgScrollbar,
    NgbDropdown,
    NgbDropdownToggle,
    NgbDropdownMenu
  ],
  exports: [
    NavBarComponent,
    NavigationComponent,
    NavLeftComponent,
    NavRightComponent,
    NavContentComponent,
    NavLogoComponent,
    NavCollapseComponent,
    NavGroupComponent,
    NavItemComponent,
    NavSearchComponent,
    BreadcrumbsComponent,
    ToggleFullScreenDirective,
    ConfigurationComponent
  ]
})
export class MaterialModule {
}
