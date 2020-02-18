import { AuthPersonalInfoModule } from './auth-personal-info.module';

describe('AuthPersonalInfoModule', () => {
  let authPersonalInfoModule: AuthPersonalInfoModule;

  beforeEach(() => {
    authPersonalInfoModule = new AuthPersonalInfoModule();
  });

  it('should create an instance', () => {
    expect(authPersonalInfoModule).toBeTruthy();
  });
});
