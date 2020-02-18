import { AlertModule } from './alert.module';

describe('AlertModule', () => {
  let alertModule: AlertModule;

  beforeEach(() => {
    alertModule = new AlertModule();
  });

  it('should create an instance', () => {
    expect(alertModule).toBeTruthy();
  });
});
