import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'years',
})
export class YearsPipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): unknown {
    const now = new Date();
    return `Released: ${now.getFullYear() - value.slice(-4)} years ago`;
  }
}
