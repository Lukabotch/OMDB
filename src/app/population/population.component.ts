import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { map, mergeMap, Observable, of, reduce, scan } from 'rxjs';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-population',
  templateUrl: './population.component.html',
  styleUrls: ['./population.component.scss'],
})
export class PopulationComponent {
  input1: string = '';
  input2: string = '';
  input3: string = '';
  duration$: Observable<string> | undefined;
  population$: Observable<string> | undefined;
  constructor(private population: MovieService, private http: HttpClient) {}

  getDuration() {
    this.duration$ = this.population
      .getDuration(this.input1, this.input2, this.input3)
      .pipe(
        mergeMap((x) => x),
        reduce((a: any, b: any) => a + +b.Runtime.split(' ')[0], 0),
        map((x) => 'Duration:' + ' ' + x + ' ' + 'Minutes')
      );
    this.population$ = this.population
      .getDuration(this.input1, this.input2, this.input3)
      .pipe(
        mergeMap((x) => x),
        map((a: any) => a.Country.split(', ')),
        map((x) =>
          x.map((x: any) =>
            this.http.get(
              `https://restcountries.com/v3.1/name/${x}?fullText=true`
            )
          )
        ),
        mergeMap((x) => x),
        map((x: any) => x),
        mergeMap((x) => x),
        map((x: any) => x[0].population),
        reduce((a, b) => a + b, 0),
        map((x) => 'Population: ' + x + ' ' + 'People')
      );
  }
}
