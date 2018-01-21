import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { ItunesSearchService } from '../itunes-search.service';
import { ItunesItem } from '../itunes/itunes-item';
import { debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-itunes-auto',
  templateUrl: './itunes-auto.component.html',
  styleUrls: ['./itunes-auto.component.css']
})
export class ItunesAutoComponent {
  private tracks: ItunesItem[];
  private searchForm: FormGroup;
  private searchField: FormControl;

  constructor(private itunesSearch: ItunesSearchService, @Inject(FormBuilder) fb: FormBuilder) {
    this.searchField = new FormControl(null, {updateOn: 'change'});
    this.searchForm = fb.group({search: this.searchField});
    this.searchForm.get('search').valueChanges.pipe(
      debounceTime(400),
      switchMap(term => this.itunesSearch.search(term))
    ).subscribe((data) => {
      this.tracks = data;
    });

  }

}
