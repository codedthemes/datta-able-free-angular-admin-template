import { BasicGridModule } from './basic-grid.module';

describe('BasicGridModule', () => {
  let basicGridModule: BasicGridModule;

  beforeEach(() => {
    basicGridModule = new BasicGridModule();
  });

  it('should create an instance', () => {
    expect(basicGridModule).toBeTruthy();
  });
});
