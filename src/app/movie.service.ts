import { Injectable } from "@angular/core";
import { Movie } from "./movie";
import { Movies } from "./movie.datasource";
import {Observable,of} from 'rxjs';

@Injectable({
  providedIn: "root" //Servise nerelerin erişebileceğini gösterir
}) //'root' oldugunda heryerden erişilebilir uygulama içinde


export class MovieService {
  constructor() {}

  getMovies(): Observable<Movie[]> {
    return of(Movies);
  }
}
