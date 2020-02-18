import { BasicElementsModule } from './basic-elements.module';

describe('BasicElementsModule', () => {
  let basicElementsModule: BasicElementsModule;

  beforeEach(() => {
    basicElementsModule = new BasicElementsModule();
  });

  it('should create an instance', () => {
    expect(basicElementsModule).toBeTruthy();
  });
});
