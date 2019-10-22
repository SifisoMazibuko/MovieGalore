import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { IMovie } from '../model/movie.model';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  movies: IMovie[];
  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit() {
     this.movieService.getMovies()
      .subscribe((data) => {
        this.movies = data;
      });
  }

}
