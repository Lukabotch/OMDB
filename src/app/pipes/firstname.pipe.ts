import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstname',
})
export class FirstnamePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    let nameArr: string[] = [];
    value.split(',').forEach((x: string) => {
      let newArr = x.trim().substring(0, x.trim().indexOf(' '));
      nameArr.push(newArr);
    });
    const joinedNames = nameArr.join(', ');
    return joinedNames;
  }
}
