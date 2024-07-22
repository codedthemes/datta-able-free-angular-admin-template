// angular import
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// project import
import { CardComponent } from './components/card/card.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

// bootstrap import
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

// third party
import { NgScrollbarModule } from 'ngx-scrollbar';
import { CookieService } from 'ngx-cookie-service';
import { AppConfigService } from '../../../config/app-config-service';
import { SharedFacade } from './shared.facade';
import { SharedService } from './shared.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '../../demo/interceptors/jwt.interceptor';
import { ErrorInterceptor } from '../../demo/interceptors/error.interceptor';

@NgModule({
  declarations: [SpinnerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CardComponent,
    NgbModule,
    NgScrollbarModule,
    NgbCollapseModule,
    BreadcrumbsComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CardComponent,
    SpinnerComponent,
    NgbModule,
    NgScrollbarModule,
    NgbCollapseModule,
    BreadcrumbsComponent
  ],
  providers: [
    CookieService,
    AppConfigService,
    SharedFacade,
    SharedService,
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},

    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
  ]
})
export class SharedModule {}
