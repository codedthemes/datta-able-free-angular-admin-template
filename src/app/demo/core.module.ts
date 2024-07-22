import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {CoreRoutingModule} from './core-routing.module';
import {ReactiveFormsModule} from "@angular/forms";
import { SharedModule } from '../theme/shared/shared.module';
import { CoreFacade } from './core.facade';
import { CoreService } from './core.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    // BrowserAnimationsModule,
    // BrowserModule,
    // CoreRoutingModule,
    // ReactiveFormsModule,
    // SharedModule,
    // AuthSigninComponent,

    BrowserAnimationsModule,
    BrowserModule,
    CoreRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    CommonModule
  ],
  // exports: [LoginComponent, MainComponent],
  providers: [CoreService, CoreFacade]
})
export class CoreModule {
}
