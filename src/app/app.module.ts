// angular import
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

// project import
import { AppComponent } from './app.component';
import { AppConfigService } from '../config/app-config-service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppConfig } from '../config/app-config';
import { HttpClient, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './spinner/spinner.component';
import DashboardComponent from './features/dashboard/dashboard.component';
import { NgbProgressbar } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from './shared/components/card/card.component';


export function initConfig(appConfig: AppConfigService) {
  return () => appConfig.loadConfig();
}


@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    DashboardComponent
  ],
  // imports: [HttpClientModule, BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, SharedModule, BrowserAnimationsModule],
  // providers: [NavigationItem],
  imports: [
    AppRoutingModule,
    CoreModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    NgbProgressbar,
    CardComponent
  ],
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
  }],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
