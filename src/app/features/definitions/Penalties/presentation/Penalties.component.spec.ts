import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenaltiesComponent } from './Penalties.component';

describe('BonusesTypesComponent', () => {
  let component: PenaltiesComponent;
  let fixture: ComponentFixture<PenaltiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PenaltiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PenaltiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
