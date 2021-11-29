import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Languages } from '../constants/defines';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {
  constructor(private translateService: TranslateService) { }
  transform(value: any, ...args: any[]): any {
    if (value) {
      const date = new Date(value);
      const today = new Date();
      const Yesterday = new Date(new Date().getTime() - 1 * 24 * 60 * 60 * 1000);
      let year: any;
      let day: any ;
      const month = date.getMonth();
      let currentMonthName;
      let todayLbl;
      let yesterdayLbl;

      day = date.getDate();
      year = date.getFullYear();
      if (this.translateService.currentLang === Languages.ar || this.translateService.currentLang === Languages.defaultAr) {
        const monthNames = ['يناير', 'فبراير', 'مارس', 'إبريل', 'مايو', 'يونيه',
          'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
        ];
        currentMonthName = monthNames[month];
        todayLbl = 'اليوم';
        yesterdayLbl = 'أمس';
      } else {
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December'
        ];
        currentMonthName = monthNames[month];
        todayLbl = 'Today';
        yesterdayLbl = 'Yesterday';
      }
      if (args) {
        args.map((arg) => {
          if (arg === 'nameing') {
            if (date.setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0)) {
              day = todayLbl;
              currentMonthName = '';
              year = '';
            } else if ( date.setHours(0, 0, 0, 0) === Yesterday.setHours(0, 0, 0, 0)) {
              day = yesterdayLbl;
              currentMonthName = '';
              year = '';
            }
          }
        });
      }
      if(args && args[2] === 'bills') {
        return `${day} ${currentMonthName}`;
      }
      return `${day} ${currentMonthName} ${year}`;
    }
    return null;
  }


}
