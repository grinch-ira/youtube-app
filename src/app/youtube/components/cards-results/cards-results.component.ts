import { Component, OnInit } from '@angular/core';
import { IItem } from 'src/app/shared/models/search-item.model';
import { IFilterSettings } from 'src/app/shared/models/filter.model';
import { CardsCollectionService } from 'src/app/core/services/cards-collection.service';
import { FilterSettingsService } from 'src/app/core/services/filter-settings.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards-results',
  templateUrl: './cards-results.component.html',
  styleUrls: ['./cards-results.component.scss'],
})

export class CardsResultsComponent implements OnInit {
  public items!: IItem[];

  public filterSettings!: IFilterSettings;

  constructor(
    private cardsCollectionService: CardsCollectionService,
    private filterSettingsService: FilterSettingsService,
    private router: Router,
  ) {}

  public ngOnInit(): void {
    this.filterSettingsService
      .getFilterSettingsObservable()
      .subscribe((filterSettings) => (this.filterSettings = filterSettings));

    this.cardsCollectionService
      .getCards()
      .subscribe((items) => (this.items = items));
  }
}
