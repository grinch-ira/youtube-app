import { Pipe, PipeTransform } from '@angular/core';
import { IFilterSettings } from '../models/filter.model';
import { IItem } from '../models/search-item.model';

@Pipe({
  name: 'sortingCards',
})

export class SortingCardsPipe implements PipeTransform {
  sortByDate(arr: IItem[], isReverse: boolean) {
    const sortedArr = arr.sort((currentItem: IItem, nextItem: IItem) => {
      const currentDate = Date.parse(currentItem.snippet.publishedAt);
      const nextDate = Date.parse(nextItem.snippet.publishedAt);
      return nextDate - currentDate;
    });
    if (!isReverse) {
      return sortedArr;
    } else {
      return sortedArr.reverse();
    }
  }

  sortByCountOfView(arr: IItem[], isReverse: boolean) {
    const sortedArr = arr.sort((currentItem: IItem, nextItem: IItem) => {
      return (
        Number(currentItem.statistics.viewCount) -
        Number(nextItem.statistics.viewCount)
      );
    });
    if (!isReverse) {
      return sortedArr;
    } else {
      return sortedArr.reverse();
    }
  }

  filteredByWords(arr: IItem[], inputWords: string) {
    const sortedArr = arr.filter((item) =>
      item.snippet.title.toLowerCase().includes(inputWords.toLowerCase()),
    );
    return sortedArr;
  }

  transform(allCards: IItem[], settings: IFilterSettings): IItem[] {
    let filteredCards: IItem[];

    switch (settings.filterBy) {
      case 'date': {
        filteredCards = this.sortByDate(allCards, settings.isReverse);
        break;
      }
      case 'views': {
        filteredCards = this.sortByCountOfView(allCards, settings.isReverse);
        break;
      }
      default: {
        filteredCards = allCards;
      }
    }

    return this.filteredByWords(filteredCards, settings.keyWord);
  }
}
