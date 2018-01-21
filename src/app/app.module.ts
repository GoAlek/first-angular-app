import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';
import { TitleCasePipe } from './title-case.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { ItunesComponent } from './itunes/itunes.component';
import { ItunesSearchService } from './itunes-search.service';
import { ItunesAutoComponent } from './itunes-auto/itunes-auto.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    AuthorsComponent,
    TitleCasePipe,
    PanelComponent,
    LikeComponent,
    ItunesComponent,
    ItunesAutoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    CoursesService,
    AuthorsService,
    ItunesSearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
