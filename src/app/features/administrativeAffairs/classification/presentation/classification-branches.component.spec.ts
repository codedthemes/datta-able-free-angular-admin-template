import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificationBankBranchescomponent } from './classification-branches.component';

describe('ClassificationBankBranchesComponent', () => {
  let component: ClassificationBankBranchescomponent;
  let fixture: ComponentFixture<ClassificationBankBranchescomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClassificationBankBranchescomponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassificationBankBranchescomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
