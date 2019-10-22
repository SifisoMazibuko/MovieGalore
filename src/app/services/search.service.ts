import { Injectable } from '@angular/core';
import { MovieService } from './movie.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private movieService: MovieService, private route: Router) { }

  searchMovies(text: string) {
  }
}
