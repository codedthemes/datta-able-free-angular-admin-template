import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationsTypesComponent } from './evaluations-types.component';

describe('MainBanksComponent', () => {
  let component: EvaluationsTypesComponent;
  let fixture: ComponentFixture<EvaluationsTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EvaluationsTypesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvaluationsTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
