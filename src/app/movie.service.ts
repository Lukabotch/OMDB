import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, of } from 'rxjs';
import { JsonMovie, Movie } from './models/movie.model';

const APIKey = 29629339;
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  postMovie: any;
  movieDetails: any;
  jsonMovie = 'http://localhost:3000/movie';
  constructor(private http: HttpClient) {}
  getMovie(movie: string) {
    return this.http.get<Movie>(
      `http://www.omdbapi.com/?t=${movie}&apikey=${APIKey}`
    );
  }
  editMovie(id: string, movie: JsonMovie) {
    return this.http.patch(`${this.jsonMovie}/${id}`, movie);
  }
  getDuration(first: string, second: string, third: string) {
    const movieInputs = [first, second, third];
    const movie = movieInputs.map((item) =>
      this.http.get<Movie>(`http://www.omdbapi.com/?t=${item}&apikey=${APIKey}`)
    );
    return of(...movie);
  }
}
