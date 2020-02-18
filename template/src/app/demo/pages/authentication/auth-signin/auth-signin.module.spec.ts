import { AuthSigninModule } from './auth-signin.module';

describe('AuthSigninModule', () => {
  let authSigninModule: AuthSigninModule;

  beforeEach(() => {
    authSigninModule = new AuthSigninModule();
  });

  it('should create an instance', () => {
    expect(authSigninModule).toBeTruthy();
  });
});
