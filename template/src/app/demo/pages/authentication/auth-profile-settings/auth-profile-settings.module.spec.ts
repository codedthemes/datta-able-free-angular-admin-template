import { AuthProfileSettingsModule } from './auth-profile-settings.module';

describe('AuthProfileSettingsModule', () => {
  let authProfileSettingsModule: AuthProfileSettingsModule;

  beforeEach(() => {
    authProfileSettingsModule = new AuthProfileSettingsModule();
  });

  it('should create an instance', () => {
    expect(authProfileSettingsModule).toBeTruthy();
  });
});
