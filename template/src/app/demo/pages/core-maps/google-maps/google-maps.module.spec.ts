import { GoogleMapsModule } from './google-maps.module';

describe('GoogleMapsModule', () => {
  let googleMapsModule: GoogleMapsModule;

  beforeEach(() => {
    googleMapsModule = new GoogleMapsModule();
  });

  it('should create an instance', () => {
    expect(googleMapsModule).toBeTruthy();
  });
});
