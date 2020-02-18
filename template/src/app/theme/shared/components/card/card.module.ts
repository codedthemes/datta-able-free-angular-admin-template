import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
/*import { AnimationService, AnimatorModule } from 'css-animator';*/

@NgModule({
  imports: [
    CommonModule,
    NgbDropdownModule,
    /*AnimatorModule*/
  ],
  declarations: [CardComponent],
  exports: [CardComponent],
  providers: [/*AnimationService*/]
})
export class CardModule { }
