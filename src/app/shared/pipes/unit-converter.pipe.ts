import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'unitConverter'
})
export class UnitConverterPipe implements PipeTransform {

  constructor(private translate: TranslateService) {}
  transform(value: any, ...args: any[]): any {
    // convert unit from MB to GB if value > 1024 for data
    const standardUnit = 1024;
    if (args == null || (args[0] && args[0].isSuperMega === true)) {
      return this.translate.instant('mimanagement.inquiry.supermegaLbl');
    } else if(args[0] && args[0].unit&& args[0].unit.toLowerCase() === 'minutes') {
      return this.translate.instant('roamingManagement.roamingInquiry.minsUnit');
    }else if(args[0] &&args[0].unit && args[0].unit.toLowerCase() == "sms" || args[0] && args[0].unit == "رسالة") {
      return args[0].unit;
    }
    else {
      // if (args[0] != null && args[0].totalData >= standardUnit) {
      //   return this.translate.instant('mimanagement.inquiry.gigaLbl');
      // } else {
      // }
      return this.translate.instant('mimanagement.inquiry.megaLbl');
    }
  }

}
