export interface IFilterSettings {
  keyWord: string;
  isReverse: boolean;
  filterBy: Filters;
}

export interface IFilters {
  [key: string]: Filters;
}

export type Filters = 'none' | 'views' | 'date';

export enum ColorByTime {
  Red = 'red',
  Blue = 'blue',
  Yellow = 'yellow',
  Green = 'green',
}
