import { Component, OnInit } from '@angular/core';
import { Filters, IFilters } from 'src/app/shared/models/filter.model';
import { FilterSettingsService } from '../../services/filter-settings.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})

export class FilterComponent implements OnInit {

  public filtersMap!: IFilters;

  constructor(private filterSettingsService: FilterSettingsService) { }

  public ngOnInit(): void {
    this.filtersMap = this.filterSettingsService.getFiltersMap();
  }

  public setFilter(filter: Filters): void {
    this.filterSettingsService.changeFilter(filter);
  }

  public setKeyWord(input: HTMLInputElement): void {
    const keyWord: string = input.value.trim().toLocaleLowerCase();
    input.placeholder = keyWord;
    input.value = '';

    this.filterSettingsService.changeKeyWord(keyWord);
  }
}
