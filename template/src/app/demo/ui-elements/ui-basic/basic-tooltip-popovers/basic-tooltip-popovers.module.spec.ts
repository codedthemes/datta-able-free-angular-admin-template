import { BasicTooltipPopoversModule } from './basic-tooltip-popovers.module';

describe('BasicTooltipPopoversModule', () => {
  let basicTooltipPopoversModule: BasicTooltipPopoversModule;

  beforeEach(() => {
    basicTooltipPopoversModule = new BasicTooltipPopoversModule();
  });

  it('should create an instance', () => {
    expect(basicTooltipPopoversModule).toBeTruthy();
  });
});
