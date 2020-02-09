import { Component } from "@angular/core";
import { Movie } from "../movie";
import { MovieService } from "../movie.service";
@Component({
  selector: "movies", // basına nokta koyulursa <div class="movies"> seklinde kullanılır> // #(hashtag) koyulursa id olarak cagrılması gerekir <div id="movies">
  templateUrl: "movies.component.html"
})

export class MoviesComponent {
  title = "Movies List";
  movies: Movie[];
  selectedMovie: Movie;

  constructor(private movieService:MovieService){}
   
  ngOnInit(): void {//Constructor dan sonra calısır
   this.getMovies();
    
  }
  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }

  getMovies():void{
  this.movies = this.movieService.getMovies();
  }
}
