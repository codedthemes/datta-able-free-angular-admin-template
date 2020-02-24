import { CrtMorrisModule } from './crt-morris.module';

describe('CrtMorrisModule', () => {
  let crtMorrisModule: CrtMorrisModule;

  beforeEach(() => {
    crtMorrisModule = new CrtMorrisModule();
  });

  it('should create an instance', () => {
    expect(crtMorrisModule).toBeTruthy();
  });
});
