import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { FilterComponent } from './components/filter/filter.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CardsCollectionService } from './services/cards-collection.service';
import { FilterSettingsService } from './services/filter-settings.service';
import { UserService } from './services/user.service';
import { YoutubeApiService } from './services/youtube-api.service';
@NgModule({
  declarations: [HeaderComponent, FilterComponent, NotFoundComponent],
  providers: [
    CardsCollectionService,
    FilterSettingsService,
    UserService,
    YoutubeApiService,
  ],
  imports: [CommonModule, MatButtonModule, MatIconModule, FormsModule],
  exports: [HeaderComponent, FilterComponent, NotFoundComponent],
})
export class CoreModule {}
