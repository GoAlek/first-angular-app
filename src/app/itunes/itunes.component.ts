import { Component, OnInit } from '@angular/core';
import { ItunesSearchService } from '../itunes-search.service';
import { ItunesItem } from './itunes-item';


@Component({
  selector: 'app-itunes',
  templateUrl: './itunes.component.html',
  styleUrls: ['./itunes.component.css']
})
export class ItunesComponent {
  private loading = false;
  private result: ItunesItem[];

  constructor(private itunesSearch: ItunesSearchService) { }

  doSearch(term: string) {
    this.loading = true;
    this.itunesSearch.search(term).subscribe(data => {
      this.loading = false;
      this.result = data;
    });
  }

}
