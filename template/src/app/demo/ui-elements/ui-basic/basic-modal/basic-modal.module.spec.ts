import { BasicModalModule } from './basic-modal.module';

describe('BasicModalModule', () => {
  let basicModalModule: BasicModalModule;

  beforeEach(() => {
    basicModalModule = new BasicModalModule();
  });

  it('should create an instance', () => {
    expect(basicModalModule).toBeTruthy();
  });
});
