import { FormElementsModule } from './form-elements.module';

describe('FormElementsModule', () => {
  let formElementsModule: FormElementsModule;

  beforeEach(() => {
    formElementsModule = new FormElementsModule();
  });

  it('should create an instance', () => {
    expect(formElementsModule).toBeTruthy();
  });
});
