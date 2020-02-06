import { Component } from "@angular/core";
import { Movies } from "../movie.datasource";
@Component({
  selector: "movies", // basına nokta koyulursa <div class="movies"> seklinde kullanılır> // #(hashtag) koyulursa id olarak cagrılması gerekir <div id="movies">
  templateUrl: "movies.component.html"
})
export class MoviesComponent {
  title = "Movies List";
  movies = Movies;
}
