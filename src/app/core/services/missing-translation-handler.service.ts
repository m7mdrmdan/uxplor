import {MissingTranslationHandler, MissingTranslationHandlerParams, TranslateService} from '@ngx-translate/core';
import en from '../../../config/i18n/en.json';
import ar from '../../../config/i18n/ar.json';
import JsonQuery from 'jsonpath/jsonpath';
import { Languages } from 'src/app/shared/constants/defines';
import {Injectable, Injector} from '@angular/core';
@Injectable()
export class CustomMissingTranslationHandler implements MissingTranslationHandler {
  arabic: any = ar;
  english: any = en;

  constructor(private injector: Injector) {
  }

    handle(params: MissingTranslationHandlerParams) {
        const translateService = this.injector.get(TranslateService);
        try {
          if (translateService.currentLang === Languages.ar || translateService.currentLang === Languages.defaultAr) {
              return JsonQuery.value(this.arabic, params.key) !==undefined ? JsonQuery.value(this.arabic, params.key) : params.interpolateParams["Default"];
          } else {
              return JsonQuery.value(this.english, params.key) !==undefined ? JsonQuery.value(this.english, params.key) : params.interpolateParams["Default"];
          }

          } catch (error) {

          }
    }
}
