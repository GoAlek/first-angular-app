import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ItunesItem } from './itunes/itunes-item';
import { HttpClient } from '@angular/common/http';

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
    return this.httpClient.get<ItunesItem[]>(apiURL);
  }

}
