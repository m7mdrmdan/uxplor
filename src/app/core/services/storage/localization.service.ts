import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Languages } from 'src/app/shared/constants/defines';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {
  constructor(
    private translate: TranslateService
  ) { }

  setDefaultLocale(defaultLang: string) {
  //  let lang: string =  'en';
  //  if (lang) {
  //     this.translate.setDefaultLang(( lang === Languages.ar ) ? Languages.defaultAr : Languages.defaultEn);
  //     this.translate.use(lang === Languages.ar  ? Languages.ar : Languages.en);
  //   } 
    this.setLocale(defaultLang);
  }

  setLocale(lang: string) {
   this.translate.setDefaultLang((lang === Languages.ar || lang === Languages.defaultAr) ? Languages.defaultAr : Languages.defaultEn);
    this.translate.use((lang === Languages.ar || lang === Languages.defaultAr) ? Languages.ar : Languages.en);
  }
}
