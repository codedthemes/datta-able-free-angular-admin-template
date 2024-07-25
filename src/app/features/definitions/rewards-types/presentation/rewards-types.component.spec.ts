import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardsTypesComponent } from './rewards-types.component';

describe('BonusesTypesComponent', () => {
  let component: RewardsTypesComponent;
  let fixture: ComponentFixture<RewardsTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RewardsTypesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RewardsTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
