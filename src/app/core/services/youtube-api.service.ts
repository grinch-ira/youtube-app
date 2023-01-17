import { Injectable } from '@angular/core';
import {
  IVideoListResponse,
  IVideoSearchResponce,
} from 'src/app/shared/models/search-response.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { IItem } from 'src/app/shared/models/search-item.model';
import { switchMap, map, tap } from 'rxjs';
import { youtubeApi } from '../models/youtube-api.model';

@Injectable({
  providedIn: 'root',
})

export class YoutubeApiService {
  private idArray: string[] = [];

  private count: number = 1;

  public loadMoreEmmiter: Subject<IItem[] | null> = new Subject();

  constructor(
    private http: HttpClient,
  ) {}

  private getVideoListbyQuery(query: string): Observable<IVideoSearchResponce> {
    const params: HttpParams = new HttpParams()
      .set('key', youtubeApi.apiKey)
      .set('type', 'video')
      .set('part', 'snippet')
      .set('maxResults', '40')
      .set('q', query);
    return this.http.get<IVideoSearchResponce>(
      youtubeApi.rootUrl + youtubeApi.pathForSearch,
      { params },
    );
  }

  private getVideoById(idArr: string[]): Observable<IVideoListResponse> {
    const ids: string = idArr.join();
    const params: HttpParams = new HttpParams()
      .set('key', youtubeApi.apiKey)
      .set('id', ids)
      .set('part', 'snippet,statistics');
    return this.http.get<IVideoListResponse>(
      youtubeApi.rootUrl + youtubeApi.pathForVideo,
      { params },
    );
  }

  private searchIdsFromSearchList(searchList: IVideoSearchResponce): string[] {
    return searchList.items.map((item) => item.id.videoId);
  }

  public getIdFromSearchIds(id: string): Observable<IVideoListResponse> {
    return this.getVideoById([id]);
  }

  public fetchVideosByQuery(query: string): Observable<IItem[]> {
    return this.getVideoListbyQuery(query).pipe(
      tap(
        (responce) => (this.idArray = this.searchIdsFromSearchList(responce)),
      ),
      tap(() => (this.count = 1)),
      switchMap(() => this.getVideoById(this.idArray.slice(0, 10))),
      map((responce) => responce.items),
    );
  }
}
