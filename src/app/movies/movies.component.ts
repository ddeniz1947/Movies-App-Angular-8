import { Component } from '@angular/core';

@Component({
    selector: 'movies', // basına nokta koyulursa <div class="movies"> seklinde kullanılır> // #(hashtag) koyulursa id olarak cagrılması gerekir <div id="movies">
    templateUrl: 'movies.component.html',
    styles:[`
    h2{
        color:blue;
    }
  
    `]
    

})
export class MoviesComponent{

}