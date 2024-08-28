import { CpfFormatterPipe } from './cpf-formatter.pipe';

describe('CpfFormatterPipe', () => {
  it('create an instance', () => {
    const pipe = new CpfFormatterPipe();
    expect(pipe).toBeTruthy();
  });
});
