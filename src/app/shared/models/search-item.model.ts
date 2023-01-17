export interface IItem {
  kind: 'youtube#video';
  etag: string;
  id: string;
  snippet: ISnippet;
  statistics: IStatistics;
}

export interface ISearchItem {
  kind: 'youtube#searchResult';
  etag:string;
  id:IIdInfo;
  snippet: IShortSnippet;
}

export interface IIdInfo {
  kind: 'youtube#viod';
  videoId: string;
}

export interface IShortSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: IThumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

export interface ISnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: IThumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: ILocalized;
  defaultAudioLanguage: string;
  defaultLanguage?:string
}

export interface IStatistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

export interface IThumbnailItem {
  url: string;
  width: number;
  height: number;
}

export interface IThumbnails {
  default: IThumbnailItem;
  medium: IThumbnailItem;
  high: IThumbnailItem;
  standard: IThumbnailItem;
  maxres: IThumbnailItem;
}

export interface ILocalized {
  title: string;
  description: string;
}

