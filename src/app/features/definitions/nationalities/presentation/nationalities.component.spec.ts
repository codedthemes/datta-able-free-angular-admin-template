import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalitiesComponent } from './nationalities.component';

describe('BonusesTypesComponent', () => {
  let component: NationalitiesComponent;
  let fixture: ComponentFixture<NationalitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NationalitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NationalitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
