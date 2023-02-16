import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { Movie } from '../models/movie.model';
import { MovieService } from '../movie.service';
const APIKey = 29629339;

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss'],
})
export class SearchMovieComponent {
  @ViewChild('input') input: ElementRef | undefined;
  movie$: Observable<Movie> | undefined;
  postMovie:any;
  constructor(private movieService: MovieService, private http: HttpClient) {}

  getMyMovie() {
    this.movie$ = this.movieService.getMovie(this.input?.nativeElement.value);
    const mainDiv: any | null = document.querySelector('.mainDiv');
    mainDiv.style.cssText = `background-color:black`;
    this.movie$.pipe(delay(200)).subscribe((x) => {
      mainDiv.style.cssText = `background: url(${x.Poster} );background-repeat: no-repeat; background-size:100%`;
    });
  }
  postMyList(movie: Movie) {
    this.movieService.postMovie = movie
  }
  ngOnInit() {}
}
