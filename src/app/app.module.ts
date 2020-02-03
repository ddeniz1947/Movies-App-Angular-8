import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponentComponent } from './movie-component/movie-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
