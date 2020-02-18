import { UiBasicModule } from './ui-basic.module';

describe('UiBasicModule', () => {
  let uiBasicModule: UiBasicModule;

  beforeEach(() => {
    uiBasicModule = new UiBasicModule();
  });

  it('should create an instance', () => {
    expect(uiBasicModule).toBeTruthy();
  });
});
