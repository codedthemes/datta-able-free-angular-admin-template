import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefinitionsRoutingModule } from './definitions-routing.module';
import { BanksServices } from './presentation/banks/banks.services';
import { BanksFacade } from './presentation/banks/banks.facade';
import { TablesRoutingModule } from '../../demo/pages/tables/tables-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, DefinitionsRoutingModule],
  providers:[BanksFacade,BanksServices]
})
export class DefinitionsModule {}
