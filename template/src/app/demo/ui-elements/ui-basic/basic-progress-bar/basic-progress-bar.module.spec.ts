import { BasicProgressBarModule } from './basic-progress-bar.module';

describe('BasicProgressBarModule', () => {
  let basicProgressBarModule: BasicProgressBarModule;

  beforeEach(() => {
    basicProgressBarModule = new BasicProgressBarModule();
  });

  it('should create an instance', () => {
    expect(basicProgressBarModule).toBeTruthy();
  });
});
