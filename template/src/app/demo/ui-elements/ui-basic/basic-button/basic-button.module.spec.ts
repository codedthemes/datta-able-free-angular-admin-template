import { BasicButtonModule } from './basic-button.module';

describe('BasicButtonModule', () => {
  let basicButtonModule: BasicButtonModule;

  beforeEach(() => {
    basicButtonModule = new BasicButtonModule();
  });

  it('should create an instance', () => {
    expect(basicButtonModule).toBeTruthy();
  });
});
