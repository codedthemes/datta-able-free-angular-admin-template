import { BasicCollapseModule } from './basic-collapse.module';

describe('BasicCollapseModule', () => {
  let basicCollapseModule: BasicCollapseModule;

  beforeEach(() => {
    basicCollapseModule = new BasicCollapseModule();
  });

  it('should create an instance', () => {
    expect(basicCollapseModule).toBeTruthy();
  });
});
