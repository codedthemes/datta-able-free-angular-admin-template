import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusesTypesComponent } from './bonuses-types.component';

describe('BonusesTypesComponent', () => {
  let component: BonusesTypesComponent;
  let fixture: ComponentFixture<BonusesTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BonusesTypesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BonusesTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
