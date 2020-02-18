import { BreadcrumbPagingModule } from './breadcrumb-paging.module';

describe('BreadcrumbPagingModule', () => {
  let breadcrumbPagingModule: BreadcrumbPagingModule;

  beforeEach(() => {
    breadcrumbPagingModule = new BreadcrumbPagingModule();
  });

  it('should create an instance', () => {
    expect(breadcrumbPagingModule).toBeTruthy();
  });
});
