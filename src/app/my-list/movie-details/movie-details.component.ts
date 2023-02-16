import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { JsonMovie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent {
  movieDetails$: Observable<any> | undefined;
  @ViewChild('input') input: ElementRef | undefined;
  deleted: boolean = false;
  isEditMode: boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private movieService: MovieService,
    private toastr: ToastrService
  ) {}
  deleteMovie(id: string) {
    this.http.delete(`${this.movieService.jsonMovie}/${id}`).subscribe(() => {
      this.movieDetails$ = undefined;
      this.deleted = true;
      setTimeout(() => window.history.back(), 500);
    });
  }
  editPlot(id: string) {
    this.isEditMode = true;
  }
  confirmEdit(id:string,movie: JsonMovie) {
    const Plot = this.input?.nativeElement.value;
    movie.movie.Plot = Plot
    this.movieService.editMovie(movie.id, movie).subscribe();
    this.isEditMode = false;
  }
  cancelEdit() {
    this.isEditMode = false;
  }
  ngOnInit() {
    const movieId = this.activatedRoute.snapshot.params['movieId'];
    if (movieId) {
      this.movieDetails$ = this.http.get(
        `http://localhost:3000/movie/${movieId}`
      );
    }
  }
}
