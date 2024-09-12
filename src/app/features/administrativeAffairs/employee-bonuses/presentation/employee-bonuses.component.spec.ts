import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeBonusesComponent } from './employee-bonuses.component';

describe('BonusesTypesComponent', () => {
  let component: EmployeeBonusesComponent;
  let fixture: ComponentFixture<EmployeeBonusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeBonusesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeBonusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
