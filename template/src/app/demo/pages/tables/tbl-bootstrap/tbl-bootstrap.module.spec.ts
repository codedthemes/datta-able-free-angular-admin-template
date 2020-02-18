import { TblBootstrapModule } from './tbl-bootstrap.module';

describe('TblBootstrapModule', () => {
  let tblBootstrapModule: TblBootstrapModule;

  beforeEach(() => {
    tblBootstrapModule = new TblBootstrapModule();
  });

  it('should create an instance', () => {
    expect(tblBootstrapModule).toBeTruthy();
  });
});
