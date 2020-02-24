import { CoreChartModule } from './core-chart.module';

describe('CoreChartModule', () => {
  let coreChartModule: CoreChartModule;

  beforeEach(() => {
    coreChartModule = new CoreChartModule();
  });

  it('should create an instance', () => {
    expect(coreChartModule).toBeTruthy();
  });
});
