import { AuthChangePasswordModule } from './auth-change-password.module';

describe('AuthChangePasswordModule', () => {
  let authChangePasswordModule: AuthChangePasswordModule;

  beforeEach(() => {
    authChangePasswordModule = new AuthChangePasswordModule();
  });

  it('should create an instance', () => {
    expect(authChangePasswordModule).toBeTruthy();
  });
});
