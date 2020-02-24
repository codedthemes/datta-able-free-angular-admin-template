import { DefaultModule } from './default.module';

describe('DefaultModule', () => {
  let defaultModule: DefaultModule;

  beforeEach(() => {
    defaultModule = new DefaultModule();
  });

  it('should create an instance', () => {
    expect(defaultModule).toBeTruthy();
  });
});
