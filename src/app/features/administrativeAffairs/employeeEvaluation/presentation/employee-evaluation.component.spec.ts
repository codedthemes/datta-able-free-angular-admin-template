import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeEvaluationComponent } from './employee-evaluation.component';

describe('BankBranchesComponent', () => {
  let component: EmployeeEvaluationComponent;
  let fixture: ComponentFixture<EmployeeEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeEvaluationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
