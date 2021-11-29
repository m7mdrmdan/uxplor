import { UnitConverterPipe } from './unit-converter.pipe';
import { TranslateService, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TestBed } from '@angular/core/testing';
import { async } from '@angular/core/testing';

let pipe;
class TranslateFakeLoader {
  instant(value) {
    switch (value) {
      case 'mimanagement.inquiry.supermegaLbl':
        return 'Super MB';
      case 'mimanagement.inquiry.gigaLbl':
        return 'GB';
      case 'mimanagement.inquiry.megaLbl':
        return 'MB';
      default:
        return 'MB';
    }
  }
}
beforeEach(async(() => {
  TestBed.configureTestingModule({
    imports: [TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
    })],
    declarations: [ ],
    providers: [
      { provide: TranslateService}
    ]
  });
  const translateService = TestBed.get(TranslateLoader);
  pipe = new UnitConverterPipe(translateService);
}));

describe('UnitConverterPipe', () => {
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return MB unit', () => {
    const obj = { isSuperMega: false, totalData: 500 };
    const unit = pipe.transform(500, obj);
    expect(unit).toEqual('MB');
  });

  it('should return GB unit', () => {
    const obj = { isSuperMega: false, totalData: 1500 };
    const unit = pipe.transform(1500, obj);
    expect(unit).toEqual('GB');
  });

  it('should return Super MB unit', () => {
    const obj = { isSuperMega: true, totalData: 500 };
    const unit = pipe.transform(500, obj);
    expect(unit).toEqual('Super MB');
  });
});
