import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardInfoComponent } from './components/card-info/card-info.component';
// eslint-disable-next-line max-len
import { CardsResultsComponent } from './components/cards-results/cards-results.component';
import { SharedModule } from '../shared/shared.module';
import { VideoCardComponent } from './components/video-card/video-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CardInfoComponent, CardsResultsComponent, VideoCardComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    SharedModule,
  ],
  exports: [CardInfoComponent, CardsResultsComponent, VideoCardComponent],
})
export class YoutubeModule {}
