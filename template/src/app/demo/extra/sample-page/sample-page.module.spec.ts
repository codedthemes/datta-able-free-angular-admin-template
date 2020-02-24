import { SamplePageModule } from './sample-page.module';

describe('SamplePageModule', () => {
  let samplePageModule: SamplePageModule;

  beforeEach(() => {
    samplePageModule = new SamplePageModule();
  });

  it('should create an instance', () => {
    expect(samplePageModule).toBeTruthy();
  });
});
