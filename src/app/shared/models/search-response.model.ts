import { IItem, ISearchItem } from './search-item.model';

export interface IVideoListResponse {
  kind: 'youtube#videoListResponse';
  etag: string;
  items: IItem[];
}

export interface IVideoSearchResponce {
  kind: 'youtube#searchListResponse';
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: IPageInfo;
  items: ISearchItem[];
}

export interface IPageInfo {
  totalResults: number;
  resultsPerPage: number;
}
