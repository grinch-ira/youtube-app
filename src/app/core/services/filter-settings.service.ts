import { Injectable } from '@angular/core';
import { Filters, IFilters, IFilterSettings } from 'src/app/shared/models/filter.model';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class FilterSettingsService {
  private filtersMap: IFilters = {
    date: 'date',
    views: 'views',
    empty: 'none',
  };

  private filterSettings: IFilterSettings = {
    keyWord: '',
    isReverse: false,
    filterBy: this.filtersMap['empty'],
  };

  private filterSubject: BehaviorSubject<IFilterSettings> = new BehaviorSubject(
    this.filterSettings,
  );


  public changeFilter(filterBy: Filters): void {
    let newSettings: IFilterSettings;
    if (this.filterSettings.filterBy === filterBy) {
      newSettings = {
        ...this.filterSettings,
        filterBy,
        isReverse: !this.filterSettings.isReverse,
      };
    } else {
      newSettings = { ...this.filterSettings, filterBy, isReverse: false };
    }
    this.filterSettings = newSettings;
    this.filterSubject.next(newSettings);
  }

  public changeKeyWord(keyWord: string): void {
    const newSettings: IFilterSettings = { ...this.filterSettings, keyWord };
    this.filterSettings = newSettings;
    this.filterSubject.next(newSettings);
  }

  public getFilterSettingsObservable(): Observable<IFilterSettings> {
    return this.filterSubject;
  }

  public getFiltersMap(): IFilters {
    return this.filtersMap;
  }
}
