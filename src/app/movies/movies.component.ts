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

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    //Constructor dan sonra calısır
    this.getMovies();
  }
  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }

  getMovies(): void {
    this.movieService.getMovies().subscribe(movies => {
      this.movies = movies;
    });
  }

  add(name:string,imageUrl:string,description:string):void{
      this.movieService.add({
        name,
        imageUrl,
        description
      } as Movie).subscribe(movie=> this.movies.push(movie));
  }

  delete(movie : Movie): void{
    this.movies = this.movies.filter(m=>m !== movie);
    this.movieService.delete(movie).subscribe();
  }

}
