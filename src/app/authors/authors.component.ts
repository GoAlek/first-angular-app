import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  email = 'me@example.com';
  authors;

  constructor(authorService: AuthorsService) {
    this.authors = authorService.getAuthors();
  }

  onKeyUp() {
    console.log(this.email);
  }

  onSave() {
    console.log(this.email);
  }

  ngOnInit() {
  }

}
