import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysConverter'
})
export class DaysConverterPipe implements PipeTransform {
  transform(value: number, ...args: any[]): number {
    return Math.ceil(value / (60 * 60 * 24 * 1000));
  }
}
