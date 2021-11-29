import { UnitValueConverterPipe } from './unit-value-converter.pipe';

describe('DataUnitPipe', () => {

  const pipe = new UnitValueConverterPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('should return MB unit', () => {
    const obj = { isSuperMega: false, totalData: 500 };
    const value = pipe.transform(500, obj);
    expect(value).toEqual((500).toFixed(2));
  });

  it('should return GB unit', () => {
    const obj = { isSuperMega: false, totalData: 1024 };
    const value = pipe.transform(1024, obj);
    expect(value).toEqual((1).toFixed(2));
  });

  it('should return Super MB unit', () => {
    const obj = { isSuperMega: true, totalData: 500 };
    const value = pipe.transform(500, obj);
    expect(value).toEqual(500);
  });
});
