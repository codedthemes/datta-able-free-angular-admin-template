import {CommonModule, registerLocaleData} from '@angular/common';
import {LoadingComponent} from "./loading/loading.component";
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {AppConfigService} from "../../config/app-config-service";
import {CookieService} from "ngx-cookie-service";
import {HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import {JwtInterceptor} from '../core/interceptors/jwt.interceptor';
import {ErrorInterceptor} from '../core/interceptors/error.interceptor';
import {MaterialModule} from "./material.module";
import {SharedFacade} from "./shared.facade";
import {SharedService} from "./shared.service";
import {AppConfig} from "../../config/app-config";
import en from '@angular/common/locales/en';
import { ToggleInputComponent } from './toggle-input/toggle-input.component';
import { ValidationFacade } from './validation.facade';
import { NoItemsComponent } from './no-items/no-items.component';
import { FormSeperatorComponent } from './form-seperator/form-seperator.component';
import { NavigationItem } from './navigation/navigation';
import { MatButtonModule } from '@angular/material/button';
import { MessagesComponent } from './messages/messages.component';
import { MatSnackBar } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    LoadingComponent,
    MessagesComponent,
    ToggleInputComponent,
    NoItemsComponent,
    FormSeperatorComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,

  ],
  exports: [
    CommonModule,
    LoadingComponent,
    MaterialModule,
    ToggleInputComponent,
    NoItemsComponent,
    FormSeperatorComponent,
    MessagesComponent,

  ],
  providers: [
    CookieService,
    AppConfigService,
    SharedFacade,
    SharedService,
    ValidationFacade,
    NavigationItem,

    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},

    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
  ]
})
export class SharedModule {
}
