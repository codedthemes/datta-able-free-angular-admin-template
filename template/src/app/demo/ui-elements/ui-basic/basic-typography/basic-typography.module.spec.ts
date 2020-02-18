import { BasicTypographyModule } from './basic-typography.module';

describe('BasicTypographyModule', () => {
  let basicTypographyModule: BasicTypographyModule;

  beforeEach(() => {
    basicTypographyModule = new BasicTypographyModule();
  });

  it('should create an instance', () => {
    expect(basicTypographyModule).toBeTruthy();
  });
});
