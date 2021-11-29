import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Languages} from '../../shared/constants/defines';
import {APIConfig} from '../../../config/api-config';
import en from '../../../config/i18n/en.json';
import ar from '../../../config/i18n/ar.json';

export class CustomTranslateLoader extends TranslateHttpLoader {
  private customHttp;

  constructor(http: HttpClient, prefix?: string, suffix?: string) {
    super(http, prefix, suffix);
    this.customHttp = http;
  }

  getTranslation(lang?: string) {
    /**
     * The function get the current language from CMS or from Local file ,
     * @param {any} lang - language may be English or Arabic
     * @returns {Observable} of the current language
     */
    switch (lang) {
      case Languages.defaultEn:
        return of(en);
      case Languages.en:
        return this.customHttp.get('APIConfig.content.url' + '/en').pipe(catchError(err => of(en)));
      case Languages.ar:
        return this.customHttp.get('APIConfig.content.url' + '/ar').pipe(catchError(err => of(ar)));
      case Languages.defaultAr:
        return of(ar);
    }
  }
}
