import { BasicAlertModule } from './basic-alert.module';

describe('BasicAlertModule', () => {
  let basicAlertModule: BasicAlertModule;

  beforeEach(() => {
    basicAlertModule = new BasicAlertModule();
  });

  it('should create an instance', () => {
    expect(basicAlertModule).toBeTruthy();
  });
});
