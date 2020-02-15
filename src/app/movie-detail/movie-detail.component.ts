import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @Input() movieSel: Movie;

  constructor(
    private movieService : MovieService,
    private route: ActivatedRoute,
    private location : Location
            ) { }

  ngOnInit() {
    this.getMovieDetail();
  }

  getMovieDetail():void{
    const Id = +this.route.snapshot.paramMap.get('id');
   this.movieService.getMovie(Id)
                 .subscribe(movie=>this.movieSel = movie)
  }
  save():void{
    this.movieService.update(this.movieSel)
       .subscribe(()=>{
         this.location.back();
       })
  }
}
