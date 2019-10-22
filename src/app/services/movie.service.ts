import { Injectable } from '@angular/core';
import { IMovie, movies } from '../model/movie.model';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

    getMovies() {
      return of(movies);
    }
    getMovie(id: number): IMovie {
      return movies.find(movie => movie.id === id);
    }
}
