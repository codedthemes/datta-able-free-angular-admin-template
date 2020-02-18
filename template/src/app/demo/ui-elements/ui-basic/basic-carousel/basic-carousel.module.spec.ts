import { BasicCarouselModule } from './basic-carousel.module';

describe('BasicCarouselModule', () => {
  let basicCarouselModule: BasicCarouselModule;

  beforeEach(() => {
    basicCarouselModule = new BasicCarouselModule();
  });

  it('should create an instance', () => {
    expect(basicCarouselModule).toBeTruthy();
  });
});
