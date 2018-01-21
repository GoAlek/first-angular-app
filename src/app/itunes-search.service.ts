import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ItunesItem } from './itunes/itunes-item';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ItunesSearchService {
  apiRoot = 'https://itunes.apple.com/search';
  results: Object[];
  loading: boolean;

  constructor(private httpClient: HttpClient) {
    this.results = [];
    this.loading = false;
  }

  search(term: string): Observable<ItunesItem[]> {
    const apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
    const mapItem = (item => {
      return new ItunesItem(
        item.trackName,
        item.artistName,
        item.trackViewUrl,
        item.artworkUrl30,
        item.artistId
      );
    });
    return this.httpClient.get<ItunesResponse>(apiURL).pipe(
      map(res => res.results.map(mapItem)
    ));
  }

}
export interface ItunesResponse {
  results: any[];
}
