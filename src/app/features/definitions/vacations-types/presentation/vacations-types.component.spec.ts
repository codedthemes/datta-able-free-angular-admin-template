import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationsTypesComponent } from './vacations-types.component';

describe('BonusesTypesComponent', () => {
  let component: VacationsTypesComponent;
  let fixture: ComponentFixture<VacationsTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VacationsTypesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacationsTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
