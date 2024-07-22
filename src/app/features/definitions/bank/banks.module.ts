import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BanksRouting} from "./banks.routing";
import {ReactiveFormsModule} from "@angular/forms";
import {BanksFacade} from "./banks.facade";
import {BanksServices} from "./banks.services";
import {SharedModule} from "../../../shared/shared.module";
import BanksComponent from './presentation/banks.component';
import { CardComponent } from '../../../shared/components/card/card.component';



@NgModule({
  declarations: [
    BanksComponent,
  ],
  imports: [
    CommonModule,
    BanksRouting,
    ReactiveFormsModule,
    SharedModule,
    CardComponent
  ],
  providers:[BanksFacade,BanksServices]
})
export class BanksModule { }
