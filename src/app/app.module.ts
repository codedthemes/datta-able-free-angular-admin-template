// angular import
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

// project import
import { AppComponent } from './app.component';
import { SharedModule } from './theme/shared/shared.module';
import { GuestComponent } from './theme/layout/guest/guest.component';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { ConfigurationComponent } from './theme/layout/admin/configuration/configuration.component';
import { NavBarComponent } from './theme/layout/admin/nav-bar/nav-bar.component';
import { NavigationComponent } from './theme/layout/admin/navigation/navigation.component';
import { NavLeftComponent } from './theme/layout/admin/nav-bar/nav-left/nav-left.component';
import { NavRightComponent } from './theme/layout/admin/nav-bar/nav-right/nav-right.component';
import { NavContentComponent } from './theme/layout/admin/navigation/nav-content/nav-content.component';
import { NavLogoComponent } from './theme/layout/admin/navigation/nav-logo/nav-logo.component';
import { NavCollapseComponent } from './theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavGroupComponent } from './theme/layout/admin/navigation/nav-content/nav-group/nav-group.component';
import { NavItemComponent } from './theme/layout/admin/navigation/nav-content/nav-item/nav-item.component';
import { NavSearchComponent } from './theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component';
import { NavigationItem } from './theme/layout/admin/navigation/navigation';
import { ToggleFullScreenDirective } from './theme/shared/components/full-screen/toggle-full-screen';
import { AppConfigService } from '../config/app-config-service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppConfig } from '../config/app-config';
import { HttpClient, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import AuthSigninComponent from './demo/pages/authentication/auth-signin/auth-signin.component';
import { CoreModule } from './demo/core.module';

export function initConfig(appConfig: AppConfigService) {
  return () => appConfig.loadConfig();
}


@NgModule({
  declarations: [
    AppComponent,
    GuestComponent,
    AdminComponent,
    ConfigurationComponent,
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
    ToggleFullScreenDirective
  ],
  imports: [HttpClientModule, BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, SharedModule, BrowserAnimationsModule],
  // providers: [NavigationItem],
  providers: [{
    provide: LocationStrategy, useClass:
    HashLocationStrategy
  }, {
    provide: AppConfig,
    deps: [HttpClient],
    useExisting: AppConfigService
  }, {
    provide: APP_INITIALIZER,
    deps: [AppConfigService],
    multi: true,
    useFactory: initConfig
  }, NavigationItem],
  bootstrap: [AppComponent]
})
export class AppModule {}
