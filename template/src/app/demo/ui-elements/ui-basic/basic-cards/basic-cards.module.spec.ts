import { BasicCardsModule } from './basic-cards.module';

describe('BasicCardsModule', () => {
  let basicCardsModule: BasicCardsModule;

  beforeEach(() => {
    basicCardsModule = new BasicCardsModule();
  });

  it('should create an instance', () => {
    expect(basicCardsModule).toBeTruthy();
  });
});
