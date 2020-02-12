import { Injectable } from "@angular/core";
import { Movie } from "./movie";
import { Movies } from "./movie.datasource";
import {Observable,of} from 'rxjs';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: "root" //Servise nerelerin erişebileceğini gösterir
}) //'root' oldugunda heryerden erişilebilir uygulama içinde


export class MovieService {
  constructor(private logginService: LoggingService) {}


  getMovies(): Observable<Movie[]> {
    this.logginService.add('Movie Service: listing movies');
    return of(Movies);
  }
}
