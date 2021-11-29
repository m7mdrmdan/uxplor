import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unitValueConverter'
})
export class UnitValueConverterPipe implements PipeTransform {

  transform(value: number, ...args: any[]): any {
    // convert MB to GB if value > 1024 for data
    const standardUnit = 1024;
    let size: any = value;
    if (args == null || (args[0] && args[0].isSuperMega === true)) {
      return value;
    } else {
      if (args[0] != null && args[0].totalData >= standardUnit) {
        size = (value / standardUnit).toFixed(2);
      } else {
        size = Math.ceil(value);
      }
      return size ? size : 0;
    }
  }
}
