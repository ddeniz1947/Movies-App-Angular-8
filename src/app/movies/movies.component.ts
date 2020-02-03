import { Component } from "@angular/core";
import { Movie } from "../movie";
@Component({
  selector: "movies", // basına nokta koyulursa <div class="movies"> seklinde kullanılır> // #(hashtag) koyulursa id olarak cagrılması gerekir <div id="movies">
  templateUrl: "movies.component.html"
})
export class MoviesComponent {
  title = "Movies List";
  movie: Movie = {
    id: 1,
    name: "Movie Name"
  };



  getTitle() {
    return this.title;
  }
}
