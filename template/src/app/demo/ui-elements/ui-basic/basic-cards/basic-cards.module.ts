import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicCardsRoutingModule } from './basic-cards-routing.module';
import { BasicCardsComponent } from './basic-cards.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    BasicCardsRoutingModule,
    SharedModule
  ],
  declarations: [BasicCardsComponent]
})
export class BasicCardsModule { }
