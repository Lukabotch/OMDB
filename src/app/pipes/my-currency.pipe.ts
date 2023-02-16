import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable } from 'rxjs';

@Pipe({
  name: 'myCurrency',
})
export class MyCurrencyPipe implements PipeTransform {
  constructor(private http: HttpClient) {}
  transform(value: string, ...args: any): Observable<string[]> {
    const currency = this.http
      .get(`https://restcountries.com/v3.1/name/${value}?fullText=true`)
      .pipe(
        map((x: any) => `${x[0].name.common}: ${Object.keys(x[0].currencies)}`)
      );
    // );
    return forkJoin([currency]);
  }
}
