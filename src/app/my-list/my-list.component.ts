import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { JsonMovie, MovieDetails } from '../models/movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss'],
})
export class MyListComponent {
  movie$: Observable<JsonMovie[]> | undefined;
  constructor(private http: HttpClient, private movieService: MovieService) {}
  seeDetails(movie: JsonMovie) {
    this.movieService.movieDetails = movie;
  }
  ngOnInit() {
    this.movie$ = this.http.get<JsonMovie[]>(this.movieService.jsonMovie);
    this.movie$.subscribe(console.log);
  }
}
