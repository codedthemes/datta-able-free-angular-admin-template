import { BasicOtherModule } from './basic-other.module';

describe('BasicOtherModule', () => {
  let basicOtherModule: BasicOtherModule;

  beforeEach(() => {
    basicOtherModule = new BasicOtherModule();
  });

  it('should create an instance', () => {
    expect(basicOtherModule).toBeTruthy();
  });
});
