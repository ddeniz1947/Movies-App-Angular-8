import { Injectable } from "@angular/core";
import { Movie } from "./movie";
import { Movies } from "./movie.datasource";


@Injectable({
  providedIn: "root" //Servise nerelerin erişebileceğini gösterir
}) //'root' oldugunda heryerden erişilebilir uygulama içinde


export class MovieService {
  constructor() {}

  getMovies(): Movie[] {
    return Movies;
  }
}
