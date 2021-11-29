import { DaysConverterPipe } from './days-converter.pipe';

describe('DaysConverterPipe', () => {
  it('create an instance', () => {
    const pipe = new DaysConverterPipe();
    expect(pipe).toBeTruthy();
  });
  it('should convert long to days', () => {
    const pipe = new DaysConverterPipe();
    const days = pipe.transform(500000000);
    expect(days).toEqual(6);
  });
});
