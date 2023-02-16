import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';

@Pipe({
  name: 'flags',
})
export class FlagsPipe implements PipeTransform {
  constructor(private http: HttpClient) {}

  transform(value: string, ...args: unknown[]): Observable<string[]> {
    const flags = this.http
      .get(`https://restcountries.com/v3.1/name/${value}?fullText=true`)
      .pipe(map((x: any) => `${x[0].flags.svg}`));

    return forkJoin([flags]);
  }
}
