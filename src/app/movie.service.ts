import { Injectable } from "@angular/core";
import { Movie } from "./movie";
import { Movies } from "./movie.datasource";
import {Observable,of} from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: "root" //Servise nerelerin erişebileceğini gösterir
}) //'root' oldugunda heryerden erişilebilir uygulama içinde


export class MovieService {
  private apiMoviesUrl = 'api/movies';

  constructor(
    private logginService: LoggingService,
    private http:HttpClient
    ) {}
 

  getMovies(): Observable<Movie[]> {
  //  HttpClient.get('') Hazır api için kullanım

    this.logginService.add('Movie Service: listing movies');
    return this.http.get<Movie[]>(this.apiMoviesUrl);
  }

  getMovie(id):Observable<Movie>{
    this.logginService.add('MovieService: Get Movie Detail By Id='+id);
    return this.http.get<Movie>(this.apiMoviesUrl+'/'+id);
  }

  update(movie: Movie):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({'Content-Type' : 'application/json'})
    }
    return this.http.put(this.apiMoviesUrl,movie,httpOptions)
  }
}
