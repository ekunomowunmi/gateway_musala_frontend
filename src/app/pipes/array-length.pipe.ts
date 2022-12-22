import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayLength'
})
export class ArrayLengthPipe implements PipeTransform {

  transform(value: unknown[], ...args: unknown[]): number {
    return value? value.length: 0;
  }

}
