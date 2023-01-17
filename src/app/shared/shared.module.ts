import { NgModule } from '@angular/core';


import { DateStatusDirective } from './directives/date-status.directive';
import { SortingCardsPipe } from './pipes/sorting-cards.pipe';

@NgModule({
  declarations: [DateStatusDirective, SortingCardsPipe],

  exports: [DateStatusDirective, SortingCardsPipe],
})

export class SharedModule {}
