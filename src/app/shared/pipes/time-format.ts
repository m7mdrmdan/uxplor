import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Languages,timeFormatArabic } from '../constants/defines';

@Pipe({
  name: 'timeFormat'
})
export class TimeFormat implements PipeTransform {
      constructor(private translateService: TranslateService) { }
      transform(value: any, ...args: any[]): any {
        if (value) {    
          if (this.translateService.currentLang === Languages.ar || this.translateService.currentLang === Languages.defaultAr) {
            return `${value.split(' ')[0]} ${timeFormatArabic[value.split(' ')[1].toLowerCase()]}`
          }
          return value;
        }
        return null;
      }

}
