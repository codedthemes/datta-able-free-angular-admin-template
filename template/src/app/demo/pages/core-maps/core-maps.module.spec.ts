import { CoreMapsModule } from './core-maps.module';

describe('CoreMapsModule', () => {
  let coreMapsModule: CoreMapsModule;

  beforeEach(() => {
    coreMapsModule = new CoreMapsModule();
  });

  it('should create an instance', () => {
    expect(coreMapsModule).toBeTruthy();
  });
});
