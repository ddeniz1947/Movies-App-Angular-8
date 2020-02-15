import { Injectable } from '@angular/core';
import { InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const movies = [
      { id: 1, name: "Movie 1" ,description:"Güzel Film",imageUrl:"1.jpg"},
      { id: 2, name: "Movie 2" ,description:"iyi Film",imageUrl:"2.jpg"},
      { id: 3, name: "Movie 3" ,description:"Kötü Film",imageUrl:"3.jpg"},
      { id: 1, name: "Movie 1" ,description:"Güzel Film",imageUrl:"1.jpg"},
      { id: 2, name: "Movie 2" ,description:"iyi Film",imageUrl:"2.jpg"},
      { id: 3, name: "Movie 3" ,description:"Kötü Film",imageUrl:"3.jpg"},
      { id: 1, name: "Movie 1" ,description:"Güzel Film",imageUrl:"1.jpg"},
      { id: 2, name: "Movie 2" ,description:"iyi Film",imageUrl:"2.jpg"},
      { id: 3, name: "Movie 3" ,description:"Kötü Film",imageUrl:"3.jpg"},
      { id: 1, name: "Movie 1" ,description:"Güzel Film",imageUrl:"1.jpg"},
      { id: 2, name: "Movie 2" ,description:"iyi Film",imageUrl:"2.jpg"},
      { id: 3, name: "Movie 3" ,description:"Kötü Film",imageUrl:"3.jpg"},
      { id: 1, name: "Movie 1" ,description:"Güzel Film",imageUrl:"1.jpg"},
      { id: 2, name: "Movie 2" ,description:"iyi Film",imageUrl:"2.jpg"},
      { id: 3, name: "Movie 3" ,description:"Kötü Film",imageUrl:"3.jpg"}
    ];
    return {movies};
  }
  constructor() { }
}
