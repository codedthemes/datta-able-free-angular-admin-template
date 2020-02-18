import { BasicTabsPillsModule } from './basic-tabs-pills.module';

describe('BasicTabsPillsModule', () => {
  let basicTabsPillsModule: BasicTabsPillsModule;

  beforeEach(() => {
    basicTabsPillsModule = new BasicTabsPillsModule();
  });

  it('should create an instance', () => {
    expect(basicTabsPillsModule).toBeTruthy();
  });
});
