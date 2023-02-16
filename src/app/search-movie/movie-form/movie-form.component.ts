import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { JsonMovie, Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss'],
})
export class MovieFormComponent {
  @ViewChild('input') input: ElementRef | undefined;
  selectedIndex: number = 1;
  disable: boolean = false
  added:boolean = false
  get movie() {
    return this.movieService.postMovie;
  }

  constructor(private movieService: MovieService, private http: HttpClient) {}

  addToList() {
    const myRate = {
      movie: this.movie,
      review: this.input?.nativeElement.value,
      rate: this.selectedIndex,
    };
    if (this.input?.nativeElement.value.length > 6) {
      this.http.post<JsonMovie>(`http://localhost:3000/movie`, myRate).subscribe();
      this.disable = true
      this.added = true
    }
  }
}
