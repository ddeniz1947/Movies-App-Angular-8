import { Component } from "@angular/core";
import { Movies } from "../movie.datasource";
import { Movie } from '../movie';
@Component({
  selector: "movies", // basına nokta koyulursa <div class="movies"> seklinde kullanılır> // #(hashtag) koyulursa id olarak cagrılması gerekir <div id="movies">
  templateUrl: "movies.component.html"
})
export class MoviesComponent {
  title = "Movies List";
  movies = Movies;
  selectedMovie : Movie;
  onSelect(movie:Movie): void{
    this.selectedMovie = movie;
  }

}

