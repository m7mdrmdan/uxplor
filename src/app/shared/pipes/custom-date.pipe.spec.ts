import { CustomDatePipe } from './custom-date.pipe';
import { TranslateService, TranslateModule, TranslateLoader, TranslateFakeLoader } from '@ngx-translate/core';
import { inject } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { Languages } from '../constants/defines';
export class TranslateServiceStub {

  public get(key: any): any {
    Observable.of(key);
  }
}

describe('CustomDatePipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot({
        loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
      })],
      providers: [
        TranslateService]
    });
    it('should create an instance', () => {
      const translate: TranslateService = TestBed.get(TranslateService);
      const pipe = new CustomDatePipe(translate);
      translate.use(Languages.defaultEn);
      expect(pipe).toBeTruthy();
    });
    it('should return English formate ', () => {
      const translate: TranslateService = TestBed.get(TranslateService);
      const pipe = new CustomDatePipe(translate);
      translate.use(Languages.defaultEn);
      const transFormatedDate = pipe.transform(1567555200000, '');
      expect(transFormatedDate).toBe('4 September 2019');
    });
    it('should return Arabic formate ', () => {
      const translate: TranslateService = TestBed.get(TranslateService);
      const pipe = new CustomDatePipe(translate);
      translate.use(Languages.defaultAr);
      const transFormatedDate = pipe.transform(1567555200000, '');
      expect(transFormatedDate).toBe('4 سبتمبر 2019');
    });
  });
});


